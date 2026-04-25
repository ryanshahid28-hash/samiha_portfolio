import { Router } from 'express'
import Message from '../models/Message.js'
import sendEmail from '../utils/sendEmail.js'

const router = Router()

// POST /api/contact
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body

    // --- Validate ---
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return res.status(400).json({ success: false, error: 'All fields are required.' })
    }

    // --- Save to DB ---
    const newMessage = await Message.create({ name, email, message })

    // --- Send email notification (non-blocking for the response) ---
    sendEmail({ name, email, message }).catch((err) =>
      console.error('⚠️  Email failed to send:', err.message)
    )

    return res.status(201).json({
      success: true,
      message: 'Message received! I'll get back to you soon.',
      data: { id: newMessage._id },
    })
  } catch (error) {
    // Mongoose validation error
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((e) => e.message)
      return res.status(400).json({ success: false, error: messages.join(', ') })
    }

    console.error('❌ Contact route error:', error)
    return res.status(500).json({ success: false, error: 'Server error. Please try again later.' })
  }
})

export default router
