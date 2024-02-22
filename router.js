const express = require('express');
const router = express.Router();

const authRoutes = require('./auth-service/src/routes/authRoutes');

router.get('/api/', (req, res) => {
    res.send("Hello World");
});

router.use('/api/auth', authRoutes);

module.exports = router;