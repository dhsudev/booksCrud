//import "./App.js"
import { auth, googleProvider } from "../config/firebase";
import { info, success, error } from "../utils/logger";
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { useState } from 'react';

function Auth() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signInGoogle = async () => {
        try {
            info(`Trying to sign in with google... [${email}, ${password}]`)
            await signInWithPopup(auth, googleProvider);
            success(`Singed with google: ${auth?.currentUser?.email}!`);
        }
        catch (err) {
            console.log(err);
        }
    };

    const signIn = async () => {
        try {
            info(`Trying to sign in with email... [${email}, ${password}]`)
            await createUserWithEmailAndPassword(auth, email, password);
            success(`Singed in as: ${auth?.currentUser?.email}!`);
        }
        catch (err) {
            error(`Problems while signIn:`);
            console.log(err);
        }
    };

    const logOut = async () => {
        try {
            info(`Trying to log out... [${email}, ${password}]`)
            await signOut(auth);
            success(`Log Out!`);
        } catch (err) {
            error(`Problems while LogOut:`);
            console.log(err)
        }
    }

    return (
        <div>

            <input
                placeholder="Email..."
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                placeholder="Password..."
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={signIn}>Sign In</button>

            <button onClick={signInGoogle}>Singn In With google</button>

            <button onClick={logOut}>Log out</button>
        </div>
    )

}

export { Auth }