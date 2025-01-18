import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
    const [response, setResponse] = useState('');

    const fetchData = async () => {
        try {
            const res = await axios.post('http://localhost:8000/api/data', { name: 'Dartagnan' });
            setResponse(res.data.message);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <button onClick={fetchData}>Fetch Data</button>
            <p>{response}</p>
        </div>
    );
};

export default App;
