const crypto = require('crypto');

const targetHash = '5531a5834816222280f20d1ef9e95f69';

function bruteForcePIN() {
    for (let i = 0; i < 10000; i++) {
        // Format the number to 4 digits (e.g., 0001, 0423)
        const pin = i.toString().padStart(4, '0');
        // Hash the PIN using MD5
        const hash = crypto.createHash('md5').update(pin).digest('hex');
        // Compare the hash
        if (hash === targetHash) {
            console.log(`Alice's PIN is: ${pin}`);
            return pin;
        }
    }
    console.log('PIN not found.');
}

bruteForcePIN();
