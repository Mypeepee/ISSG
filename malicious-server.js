const http = require("http"); // Mengimpor modul 'http' untuk membuat server HTTP
const socketIo = require("socket.io"); // Mengimpor modul 'socket.io' untuk komunikasi WebSocket

const server = http.createServer(); // Membuat server HTTP baru
const io = socketIo(server); // Mengaitkan Socket.IO dengan server HTTP

// Event saat client baru terhubung
io.on("connection", (socket) => {
    console.log(`Client ${socket.id} Connected`); // Menampilkan ID client yang terhubung

    // Event saat client terputus
    socket.on("disconnect", () => {
        console.log(`Client ${socket.id} disconnected`); // Menampilkan ID client yang terputus
    });

    // Event saat server menerima pesan dari client
    socket.on("message", (data) => {
        let {username, message } = data; // Mengambil username dan pesan dari data
        console.log(`Receiving message from ${username}: ${message}`); // Menampilkan pesan yang diterima

        message = message + " (modified by server)"; // Memodifikasi pesan yang diterima

        // Mengirim pesan yang dimodifikasi ke semua client
        io.emit("message", {username , message}); 
    });
});

// Menentukan port untuk server
const port = 3000;
// Menjalankan server pada port yang ditentukan
server.listen(port, () => {
    console.log(`server running on port ${port}`); // Menampilkan pesan bahwa server sedang berjalan
});
