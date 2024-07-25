const express = require('express');
const router = express.Router();

// In-memory storage for user data
const userData = [];

router.get('/', (req, res) => {
    res.render('index');
});

router.post('/calculate', (req, res) => {
    const { weight, height } = req.body;
    const bmi = weight / (height * height);

    // Store user data in memory
    const newUser = { weight, height, bmi, date: new Date() };
    userData.push(newUser);

    res.render('result', { bmi: bmi.toFixed(2) });
});

module.exports = router;
