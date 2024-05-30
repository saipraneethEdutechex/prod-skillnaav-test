const mongoose = require("mongoose");

const discoverSchema = new mongoose.Schema({
  discoverheading: {
    type: String,
    required: true,
  },
  discoversubheading: {
    type: String,
    required: true,
  },
  tryforfreebtn: {
    type: String,
    required: true,
  },
  viewpricebtn: {
    type: String,
    required: true,
  },
});

const visionSchema = new mongoose.Schema({
  visionheading: {
    type: String,
    required: true,
  },
  visionsubheading: {
    type: String,
    required: true,
  },
  visionpoints: {
    type: Array,
    required: true,
  },
});

const featureSchema = new mongoose.Schema({
  feature: {
    type: String,
    required: true,
  },
  featuredesc: {
    type: String,
    required: true,
  },
  subfeature: {
    type: String,
    required: true,
  },
  point1: {
    type: String,
    required: true,
  },
  point2: {
    type: String,
    required: true,
  },
  point3: {
    type: String,
    required: true,
  },
  point4: {
    type: String,
    required: true,
  },
});

const teamSchema = new mongoose.Schema({
  teamheading: {
    type: String,
    required: true,
  },
  teamsubheading: {
    type: String,
    required: true,
  },
  teamMembers: {
    type: Array,
    required: true,
  },
});

const pricingSchema = new mongoose.Schema({
  priceheading: {
    type: String,
    required: true,
  },
  priceCards: {
    type: Array,
    required: true,
  },
});

const faqSchema = new mongoose.Schema({
  faqheading: {
    type: String,
    required: true,
  },
  faqsubheading: {
    type: String,
    required: true,
  },
  faqdesc: {
    type: String,
    required: true,
  },
  faqCard: {
    type: Array,
    required: true,
  },
});

const contactSchema = new mongoose.Schema({
  havequestions: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contactus: {
    type: String,
    required: true,
  },
  entername: {
    type: String,
    required: true,
  },
  enteremail: {
    type: String,
    required: true,
  },
  yourquestion: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  submitbtn: {
    type: String,
    required: true,
  },
});

const footerSchema = new mongoose.Schema({
  contactdetails: {
    type: String,
    required: true,
  },
});

module.exports = {
  Discover: mongoose.model("discovers", discoverSchema),
  Vision: mongoose.model("vision", visionSchema),
  Feature: mongoose.model("features", featureSchema),
  Team: mongoose.model("team", teamSchema),
  Pricing: mongoose.model("pricing", pricingSchema),
  FAQ: mongoose.model("faqs", faqSchema),
  Contact: mongoose.model("contact", contactSchema),
  Footer: mongoose.model("footer", footerSchema),
};
