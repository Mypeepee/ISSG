const io = require("socket.io-client"); // Mengimpor modul 'socket.io-client' untuk berkomunikasi dengan server
const readline = require("readline"); // Mengimpor modul 'readline' untuk input/output di terminal
const crypto = require("crypto"); // Mengimpor modul 'crypto' untuk hashing

const socket = io("http://localhost:3000"); // Menghubungkan client ke server socket.io

function generateHash(message) { //  menghasilkan hash dari pesan menggunakan algoritma SHA-256.
    return crypto.createHash('sha256').update(message).digest('hex');
}

const rl = readline.createInterface({ // Membuat interface untuk input/output dari terminal
    input: process.stdin,
    output: process.stdout,
    prompt: "> "
});

let username = "";

socket.on("connect", () => { // Saat terhubung ke server
    console.log("Connected to the server");

    rl.question("Enter your username: ", (input) => { // Meminta username pengguna
        username = input;
        console.log(`Welcome, ${username} to the chat`);
        rl.prompt();

        rl.on("line", (message) => { // Saat pengguna memasukkan pesan
            if (message.trim()) {
                let hashedMessage = generateHash(message); // Membuat hash pesan

                socket.emit("message", { username, message, hashedMessage }); // Mengirim pesan dan hash ke server
            }
            rl.prompt();
        });
    });
});

socket.on("message", (data) => { // Mendengarkan pesan yang diterima dari server
    const { username: senderUsername, message: senderMessage, hashedMessage } = data;

    let correctHash = generateHash(senderMessage); // Hash ulang pesan untuk pengecekan

    if (senderUsername !== username) { // Cek apakah pesan berasal dari pengguna lain
        if (hashedMessage === correctHash) { // Memverifikasi apakah hash pesan cocok dengan hash yang dihitung
            console.log(`${senderUsername}: ${senderMessage}`); // Jika cocok, tampilkan pesan
        } else {  // Jika tidak cocok, beri peringatan bahwa pesan telah diubah
            console.log(`${senderUsername}: ${senderMessage} (Warning!!: Message has been modified!)`); 
        }
        rl.prompt(); // Menampilkan prompt agar pengguna dapat memasukkan pesan berikutnya
    };    
});

socket.on("disconnect", () => { // Saat koneksi ke server terputus
    console.log("Server disconnected, Exiting...");
    rl.close();
    process.exit(0);
});

rl.on("SIGINT", () => { // Saat pengguna menekan CTRL+C untuk keluar
    console.log("\nExiting...");
    socket.disconnect();
    rl.close();
    process.exit(0);
});
