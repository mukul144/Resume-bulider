const express = require('express');
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');


const storage = multer.diskStorage({
  destination: path.join(__dirname, '../uploads/profile_pictures'),
  filename: (req, file, cb) => {
    cb(null, req.user.id + path.extname(file.originalname)); 
  }
});

const upload = multer({ storage });

router.post('/upload-profile-picture', authMiddleware, upload.single('profilePicture'), (req, res) => {
  res.json({ msg: 'Profile picture uploaded successfully' });
});



router.get('/profile-picture', authMiddleware, (req, res) => {
  const baseDir = path.join(__dirname, '../uploads/profile_pictures');
  const extensions = ['.jpg', '.jpeg', '.png'];

  for (const ext of extensions) {
    const filePath = path.join(baseDir, req.user.id + ext);
    if (fs.existsSync(filePath)) {
      return res.sendFile(filePath); 
  }

  res.status(404).json({ msg: 'No profile picture found' });
});




router.delete('/profile-picture', authMiddleware, (req, res) => {
  try {
    const baseDir = path.join(__dirname, '../uploads/profile_pictures');
    const extensions = ['.jpg', '.jpeg', '.png'];

    for (const ext of extensions) {
      const filePath = path.join(baseDir, req.user.id + ext);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        return res.json({ msg: 'Profile picture deleted successfully' });
      }
    }

    return res.status(404).json({ msg: 'No profile picture found to delete' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;
