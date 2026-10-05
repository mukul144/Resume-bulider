

const Portfolio = require('../models/portfolio');


async function createPortfolio(req, res) {
  try {
    const portfolio = await Portfolio.create({
      createdBy: req.user.id,
      ...req.body
    });
    res.status(201).json({ msg: "Details saved", portfolio });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


async function updateTemplate(req, res) {
  try {
    const portfolio = await Portfolio.findByIdAndUpdate(
      req.params.id,
      { template: req.body.template },
      { returnDocument: 'after' }
    );
    res.status(200).json({ msg: "Template updated", portfolio });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


async function getResume(req, res) {
  try {
    const portfolio = await Portfolio.findById(req.params.id);
    if (!portfolio) return res.status(404).json({ msg: "Not found" });
    
    res.status(200).json(portfolio);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


async function deleteResume(req, res) {
  try {
    const portfolio = await Portfolio.findByIdAndDelete(req.params.id);
    if (!portfolio) return res.status(404).json({ msg: "Not found" });
    
    res.status(200).json({ msg: "Resume deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { 
  createPortfolio, 
  updateTemplate, 
  getResume,
  deleteResume
};