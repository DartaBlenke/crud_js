const express = require('express');
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
const app = express();
const PORT = 3000;

// Test Firestore Connection
app.get('/test-db', async (req, res) => {
    try {
        const testDoc = db.collection('test').doc('connection');
        await testDoc.set({ message: 'Database connection successful!' });
        const doc = await testDoc.get();

        if (!doc.exists) {
            return res.status(404).send('No document found!');
        }

        res.status(200).send(doc.data());
    } catch (error) {
        console.error('Error testing database connection:', error);
        res.status(500).send('Database connection failed.');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
