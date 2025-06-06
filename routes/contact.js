const { Router } = require('express');
const router = Router();

router.post('/', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Contact form submitted:', { name, email, message });
  res.json({ success: true });
});

module.exports = router;