import express from "express";
import MenuItem from "../models/MenuItem.js";

const router = express.Router();

router.get('/', async (req,res) => {
    try {
        const items = await MenuItem.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ error: "Server error"})
    }
});

router.post('/', async (req, res) => {
    try {
        const newItem = new MenuItem(req.body);
        await newItem.save();
        res.status(201).json(newItem);
    } catch (err) {
        res.status(400).json({ error: "Invalid data"});
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deletedItem = await MenuItem.findByIdAndDelete(req.params.id);
        if (!deletedItem) {
            return res.status(404).json({ error: 'Item not found'});
        }
        res.json({ message: 'Item deleted' });
    } catch (err) {
        res.status(500).json({ error: 'Server error'});
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedItem = await MenuItem.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updatedItem) {
            return res.status(404).json({ error: 'Item not found' });
        }

        res.json(updatedItem);
    } catch (err) {
        res.status(400).json({ error: 'Bad request' });
    }
});

export default router;