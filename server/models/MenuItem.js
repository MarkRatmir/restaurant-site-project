import mongoose from 'mongoose';

// the blueprint of a menu item
const MenuItemSchema = new mongoose.Schema({
    name: { type: String, required: true},
    description: String,
    price: { type: Number, required: true},
    category: String,
    image: String,
}, { timestamps: true}); // keeps track of when an item was added

export default mongoose.model("MenuItem", MenuItemSchema);

