const router = require("express").Router();
const {
  Discover,
  //Vision,
  VisionHead,
  VisionPoint,
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
    //const vision = await Vision.find();
    const visionhead = await VisionHead.find();
    const visionpoint = await VisionPoint.find();
    const features = await Feature.find();
    const team = await Team.find();
    const pricing = await Pricing.find();
    const faqs = await FAQ.find();
    const contact = await Contact.find();
    const footer = await Footer.find();

    res.status(200).send({
      discover: discovers,
      visionhead: visionhead,
      visionpoint: visionpoint,
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

// Update Vision Heading
router.post("/update-visionheading", async (req, res) => {
  try {
    const visionhead = await VisionHead.findByIdAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: visionhead,
      success: true,
      message: "Vision Heading updated successfully",
    });
  } catch (error) {
    console.error("Error updating Vision Heading:", error);
    res.status(500).send(error);
  }
});

// Add Vision Point
router.post("/add-visionpoint", async (req, res) => {
  try {
    const visionpoint = new VisionPoint(req.body);
    await visionpoint.save();
    res.status(200).send({
      data: visionpoint,
      success: true,
      message: "Feature added successfully",
    });
  } catch (error) {
    console.error("Error adding vision:", error);
    res.status(500).send(error);
  }
});

// Update Vision Point
router.post("/update-visionpoint", async (req, res) => {
  try {
    const visionpoint = await VisionPoint.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: visionpoint,
      success: true,
      message: "Vision Point updated successfully",
    });
  } catch (error) {
    console.error("Error updating vision point:", error);
    res.status(500).send(error);
  }
});

// Delete Vision Point
router.delete("/delete-visionpoint/:id", async (req, res) => {
  try {
    await VisionPoint.findByIdAndDelete(req.params.id);
    res.status(200).send({
      success: true,
      message: "Vision Point deleted successfully",
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

// Update Team
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

// Add Team
router.post("/add-team", async (req, res) => {
  try {
    const team = new Team(req.body);
    await team.save();
    res.status(200).send({
      data: team,
      success: true,
      message: "Team added successfully",
    });
  } catch (error) {
    console.error("Error adding team:", error);
    res.status(500).send(error);
  }
});

// Delete Team
const onDelete = async (teamId) => {
  try {
    console.log("Deleting team with ID:", teamId);
    const response = await axios.delete(`/api/skillnaav/delete-team/${teamId}`);
    if (response.data.success) {
      message.success(response.data.message);
      fetchSkillnaavData();
    } else {
      message.error(response.data.message);
    }
  } catch (error) {
    message.error("Error deleting team:", error.message);
    console.error("Error deleting team:", error);
  }
};

module.exports = router;
