const router = require("express").Router();
const QuestionaryEntry = require("../model/QuestionaryEntry");
const { questionaryEntryValidation } = require("../model/validation");

router.post("/", async (req, res) => {
  const { error } = questionaryEntryValidation(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  try {
    const entry = new QuestionaryEntry({
      ...req.body,
      createdBy: req.user.id,
    });
    const saved = await entry.save();
    res.json({ error: null, data: { id: saved._id } });
  } catch (error) {
    res.status(400).json({ error });
  }
});
module.exports = router;
