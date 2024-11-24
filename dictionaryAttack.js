const fs = require('fs');
const crypto = require('crypto');

// Target MD5 hash
const targetHash = '578ed5a4eecf5a15803abdc49f6152d6';

// File path to the dictionary file
const filePath = './500-worst-passwords.txt';

function dictionaryAttack() {
    // Read the password list
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
            return;
        }
        
        // Split the file content into lines (passwords)
        const passwords = data.split('\n');
        
        for (const password of passwords) {
            // Trim whitespace and hash the password
            const hash = crypto.createHash('md5').update(password.trim()).digest('hex');
            
            // Compare with the target hash
            if (hash === targetHash) {
                console.log(`Bob's password is: ${password.trim()}`);
                return;
            }
        }

        console.log('Password not found in the dictionary.');
    });
}

dictionaryAttack();
