const router = require("express").Router();
const {
  Discover,
  Vision,
  Feature,
  Team,
  Pricing,
  FAQ,
  Contact,
  Footer,
} = require("../models/skillnaavModel");

// get all SkillNaav data
router.get("/get-skillnaav-data", async (req, res) => {
  try {
    const discovers = await Discover.find();
    const vision = await Vision.find();
    const features = await Feature.find();
    const team = await Team.find();
    const pricing = await Pricing.find();
    const faqs = await FAQ.find();
    const contact = await Contact.find();
    const footer = await Footer.find();

    res.status(200).send({
      discover: discovers,
      vision: vision,
      features: features,
      team: team,
      pricing: pricing,
      faq: faqs,
      contact: contact,
      footer: footer,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update discover
router.post("/update-discover", async (req, res) => {
  try {
    const discover = await Discover.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: discover,
      success: true,
      message: "Discover updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update Vision
router.post('/update-vision', async (req, res) => {
  try {
    const vision = await Vision.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: vision,
      success: true,
      message: 'Vision updated successfully',
    });
  } catch (error) {
    console.error('Error updating vision:', error);
    res.status(500).send(error);
  }
});

// Add Vision
router.post('/add-vision', async (req, res) => {
  try {
    const vision = new Vision(req.body);
    await vision.save();
    res.status(200).send({
      data: vision,
      success: true,
      message: 'Vision added successfully',
    });
  } catch (error) {
    console.error('Error adding vision:', error);
    res.status(500).send(error);
  }
});

// Delete Vision
router.delete('/delete-vision/:id', async (req, res) => {
  try {
    await Vision.findByIdAndDelete(req.params.id);
    res.status(200).send({
      success: true,
      message: 'Vision deleted successfully',
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update Feature
router.post("/update-feature", async (req, res) => {
  try {
    const feature = await Feature.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: feature,
      success: true,
      message: "Feature updated successfully",
    });
  } catch (error) {
    console.error("Error updating feature:", error);
    res.status(500).send(error);
  }
});

// Add Feature
router.post("/add-feature", async (req, res) => {
  try {
    const feature = new Feature(req.body);
    await feature.save();
    res.status(200).send({
      data: feature,
      success: true,
      message: "Feature added successfully",
    });
  } catch (error) {
    console.error("Error adding feature:", error);
    res.status(500).send(error);
  }
});

// Delete Feature
router.delete("/delete-feature/:id", async (req, res) => {
  try {
    await Feature.findByIdAndDelete(req.params.id);
    res.status(200).send({
      success: true,
      message: "Feature deleted successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

//Update Team
router.post("/update-team", async (req, res) => {
  try {
    const team = await Team.findOneAndUpdate({ _id: req.body._id }, req.body, {
      new: true,
    });
    res.status(200).send({
      data: team,
      success: true,
      message: "Team updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
