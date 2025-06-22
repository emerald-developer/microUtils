import { createCipheriv, createDecipheriv, randomBytes, pbkdf2Sync } from 'crypto';

const algorithm = 'aes-256-cbc'; // AES encryption algorithm
const salt = randomBytes(16); // Generate a random salt for key derivation
const iterations = 100000; // Number of iterations for PBKDF2
const keyLength = 32; // Key length for AES-256
const ivLength = 16; // Initialization vector length

function deriveKey(password: string): Buffer {
    return pbkdf2Sync(password, salt, iterations, keyLength, 'sha256');
}

export function encrypt(text: string, password: string): string {
    const iv = randomBytes(ivLength); // Generate a random IV
    const key = deriveKey(password); // Derive key from password

    const cipher = createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');

    // Combine salt, iv, and encrypted text for later decryption
    return `${salt.toString('hex')}:${iv.toString('hex')}:${encrypted}`;
}

export function decrypt(encryptedText: string, password: string): string {
    const [saltHex, ivHex, encrypted] = encryptedText.split(':');
    const saltBuffer = Buffer.from(saltHex, 'hex');
    const ivBuffer = Buffer.from(ivHex, 'hex');
    const key = pbkdf2Sync(password, saltBuffer, iterations, keyLength, 'sha256');

    const decipher = createDecipheriv(algorithm, key, ivBuffer);
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');

    return decrypted;
}