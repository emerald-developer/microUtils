
import { firebaseStore } from './firebase';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
import { get } from 'svelte/store';
import {encrypt , decrypt} from '$lib/scripts/encryption';
const db = getFirestore(get(firebaseStore).app);

/**
 * Save user profile data to Firestore
 * @param uid User's UID
 * @param data Object containing username, photoUrl, and description
 */
export async function saveUserProfile(uid: string, data: { username: string; photoUrl?: string;}) : Promise<void> {
    const userRef = doc(db, 'users', uid);
    await setDoc(userRef, data, { merge: true });
}

/**
 * Saves a user's note to Firestore, encrypting the content before storage.
 *
 * @param uid - The user's unique identifier.
 * @param data - An object containing the note content to be saved.
 * @param extraPassword - (Optional) An additional password used for encryption, concatenated with the UID.
 *                        If not provided, only the UID is used for encryption.
 * @returns A Promise that resolves when the note has been saved.
 */
export async function saveUserNote(uid: string, data:string, extraPassword?: string) : Promise<void> {
    const noteRef = doc(db, 'notes', uid);
    if (extraPassword) {
        data = await encrypt(data, extraPassword + uid);
    } else {
        data = await encrypt(data, uid);
    }
    await setDoc(noteRef, { content: data }, { merge: true });
}

/**
 * Retrieve user note from Firestore
 * @param uid User's UID
 * @param extraPassword Optional extra password for decryption
 * @returns Decrypted note content or null if not found
 */
export async function getUserNote(uid: string, extraPassword?: string) : Promise<{ content: string } | null> {
    const noteRef = doc(db, 'notes', uid);
    const docSnap = await getDoc(noteRef);
    if (docSnap.exists()) {
        let data = docSnap.data();
        if (extraPassword) {
            data.content = decrypt(data.content, extraPassword + uid);
        } else {
            data.content = await decrypt(data.content, uid);
        }
        return data.content ? { content: data.content } : null;
    } else {
        return null;
    }
}
