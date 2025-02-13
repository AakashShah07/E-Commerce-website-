const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
    try {
        const { username, password } = req.body;
        
        // Add validation checks (if necessary)
        if (!username || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newUser = new User({ username, password });
        await newUser.save();

        return res.status(201).json({ message: "User registered successfully!" });

    } catch (error) {
        console.error("Signup Error:", error);

        // Send a more detailed error response
        return res.status(400).json({ message: error.message || "Validation error" });
    }
};

exports.login = async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ where: { username } });
    if (!user || !(await user.validatePassword(password))) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    res.json({ token });
};