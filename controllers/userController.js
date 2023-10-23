const User = require('../models/user');

// Create a new User
async function createUser(req, res) {
    try {
        const user = await User.create(req.body);
        res.status(201).json (user);

    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

async function getAllUser(req, res) {
    try {
        const Users = await User.find();
        console.log(Users)
        res.json(Users);

    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

async function updateUser(req, res) {
    const UserId = req.params.id;
    try {
        const updatedUser = await User.findByIdAndUpdate(UserId, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(updatedUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function deleteUser(req, res) {
    const UserId = req.params.id; 
    try {
        const deletedUser = await User.findByIdAndRemove(UserId);
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: 'User deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


module.exports = {
    createUser,
    getAllUser,
    updateUser,
    deleteUser
}