import React, { useEffect } from 'react';
import db from './firebase';
import { collection, getDocs } from 'firebase/firestore';

function App() {
    useEffect(() => {
        const testFirestore = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'user'));
                querySnapshot.forEach((doc) => {
                    console.log(`${doc.id} =>`, doc.data());
                });
            } catch (error) {
                console.error("Error connecting to Firestore:", error);
            }
        };

        testFirestore();
    }, []);

    return <div>Check the console for Firestore data!</div>;
}

export default App;
