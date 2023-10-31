import { connectDatabase, selectDB, insertDocument } from "@/utils/db-utils";

async function handler(req, res) {
    if(req.method === 'POST') {
        
        const {email, message, name} = req.body;
        const collection = 'requests';

        if(
            !email ||
            !email.includes('@') ||
            !name ||
            name.trim() === '' ||
            !message ||
            message.trim() === ''
            ) {
            res.status(422).json({ message: 'Invalid input.' }); 
        return;
        }

        const newContact = {
            email,
            name,
            message
        };

        let client;

        try {
            client = await connectDatabase();
        } catch(error) {
            res.status(500).json({ message: 'Database connection failed'});
            return;
        }

        try {
            const db = selectDB(client, 'contact');
            await insertDocument(db, collection, newContact );
            client.close();
        } catch (error) {
            res.status(500).json({ message: 'Message creation failed'});
            return;
        }
        
        

        res.status(201).json({ message: 'Message received.' });
    }
}

export default handler;