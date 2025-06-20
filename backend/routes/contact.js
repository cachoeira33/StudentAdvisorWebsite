require('dotenv').config()
const express = require('express')
const router = express.Router()
const fs = require('fs')
const path = require('path')
const nodemailer = require('nodemailer')

// Configuração do transporter do Nodemailer
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT, 10),
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})

router.post('/save-contact', async (req, res) => {
  try {
    const { fullName, email, whatsAppNumber, message } = req.body

    // Validação básica
    if (!fullName || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields'
      })
    }

    // Monta o objeto para salvar
    const contactData = {
      fullName,
      email,
      whatsAppNumber: whatsAppNumber || 'Não informado',
      message,
      date: new Date().toISOString()
    }

    // Salva no JSON local
    const filePath = path.join(__dirname, 'contact-submissions.json')
    let submissions = []
    if (fs.existsSync(filePath)) {
      submissions = JSON.parse(fs.readFileSync(filePath, 'utf8'))
    }
    submissions.push(contactData)
    fs.writeFileSync(filePath, JSON.stringify(submissions, null, 2))

    console.log('Dados recebidos:', contactData)

    // Envia o e‑mail
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // ou outro destinatário
      subject: '📬 Novo contato recebido no site',
      text: `
Novo contato recebido:

Nome: ${contactData.fullName}
Email: ${contactData.email}
WhatsApp: ${contactData.whatsAppNumber}
Mensagem:
${contactData.message}

Enviado em: ${contactData.date}
      `
    }

    // Aguarda o envio do e‑mail, mas não bloqueia o envio da resposta
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error('Erro ao enviar e‑mail:', err)
      } else {
        console.log('E‑mail enviado:', info.response)
      }
    })

    // Responde ao frontend
    res.status(200).json({
      success: true,
      message: 'Contact saved and email sent (if configured)'
    })

  } catch (error) {
    console.error('Error saving contact:', error)
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    })
  }
})

module.exports = router