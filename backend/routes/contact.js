const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Rota para salvar os dados do formulário
router.post('/save-contact', async (req, res) => {
  try {
    const { fullName, email, whatsAppNumber, message } = req.body;
    
    // Validação básica (pode ser expandida)
    if (!fullName || !email || !message) {
      return res.status(400).json({ 
        success: false,
        error: 'Missing required fields' 
      });
    }

    // Criar objeto com os dados
    const contactData = {
      fullName,
      email,
      whatsAppNumber: whatsAppNumber || 'Não informado',
      message,
      date: new Date().toISOString()
    };

    // Salvar em arquivo JSON (para desenvolvimento)
    const filePath = path.join(__dirname, 'contact-submissions.json');
    let submissions = [];
    
    if (fs.existsSync(filePath)) {
      submissions = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    }
    
    submissions.push(contactData);
    fs.writeFileSync(filePath, JSON.stringify(submissions, null, 2));

    console.log('Dados recebidos:', contactData);
    
    res.status(200).json({ 
      success: true,
      message: 'Contact saved successfully'
    });
    
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ 
      success: false,
      error: 'Internal server error'
    });
  }
});

module.exports = router;