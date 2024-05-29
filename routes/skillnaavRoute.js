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
      feature: features,
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

module.exports = router;
