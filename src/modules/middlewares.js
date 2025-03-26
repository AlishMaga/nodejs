const validateInput = (req, res, next) => {
    
    if (!req.body) {
        return res.status(400).json({ message: "Request body is missing" });
    }

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }

    if (!email.includes("@")) {
        return res.status(400).json({ message: "Invalid email format" });
    }

    next();
};

module.exports = validateInput;