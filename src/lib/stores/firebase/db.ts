import { firebaseStore } from './firebase';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { get } from 'svelte/store';

const db = getFirestore(get(firebaseStore).app);

/**
 * Save user profile data to Firestore
 * @param uid User's UID
 * @param data Object containing username, photoUrl, and description
 */
export async function saveUserProfile(uid: string, data: { username: string; photoUrl?: string;}) {
    const userRef = doc(db, 'users', uid);
    await setDoc(userRef, data, { merge: true });
}

