
const express = require('express');
const { createPortfolio, updateTemplate, getResume, deleteResume } = require('../controllers/portfolioController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/create', authMiddleware, createPortfolio);
router.put('/:id/template', authMiddleware, updateTemplate);
router.get('/:id/resume', authMiddleware, getResume);        // Preview - NO DELETE
router.delete('/:id/resume', authMiddleware, deleteResume);   // Delete AFTER download

module.exports = router;