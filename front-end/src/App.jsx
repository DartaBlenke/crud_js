import React, { useState } from 'react';
import db from './firebase';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firestore = getFirestore(App);

function App() {
    var [inputName, setinputName] = useState("");
    var [inputEmail, setinputEmail] = useState("");
    
    const handleChangeName = (event) => {
        setinputName(event.target.value);
    };

    const handleChangeEmail = (event) => {
        setinputEmail(event.target.value);
    };

    const handleSubmit = async () => {
        try {
            const docRef = await addDoc(collection(firestore, "user"), {
                name: inputName,
                email: inputEmail
            });
            console.log("Document written with ID:", docRef.id);
        } catch (e) {
            console.error("Error adding document:", e);
        }
      };

    return (
        <div>
            <h1>Faça seu login!</h1>
            <div>
                <h3>Nome</h3>
                <input type="text" value={inputName} onChange={handleChangeName} placeholder="Nome"/>
            </div>
            <div>
                <h3>email</h3>
                <div>
                    <input type="text" value={inputEmail} onChange={handleChangeEmail} placeholder="email" />
                </div>
            </div>

            <button onClick={handleSubmit}>
                Submit
            </button>
        </div>
    )
    
}

export default App;
