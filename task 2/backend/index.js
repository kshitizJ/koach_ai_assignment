// app.js
import express, { json } from 'express';
import Scheduler from './model/scheduler.js';
import cors from 'cors'

const app = express();
const scheduler = new Scheduler();

app.use(cors());
app.use(json());

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Server is up' });
})

// Add event route
app.post('/api/events', async (req, res) => {
    const { start_time, end_time } = req.body;
    if (scheduler.addEvent({ start_time, end_time })) {
        res.status(201).json({ message: 'Event added successfully' });
    } else {
        res.status(400).json({ message: 'Event overlaps with an existing one' });
    }
});

// Get events route
app.get('/api/events', async (req, res) => {
    res.json(scheduler.getEvents());
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
