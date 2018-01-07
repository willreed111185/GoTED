const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;
const keys = require('../config/keys');

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || keys.mongodb.dbURI,
  {
    useMongoClient: true
  }
);

const talkSeed = [
  {
    title: "What we don't teach kids about sex",
    author: "Sue Jaye Johnson",
    mediaID: "6w38zBWq",
    synopsis:
      "As parents, it's our job to teach our kids about sex. But beyond 'the talk,' which covers biology and reproduction, there's so much more we can say about the human experience of being in our bodies. Introducing 'The Talk 2.0,' Sue Jaye Johnson shows us how we can teach our children to tune in to their sensations and provide them with the language to communicate their desires and emotions -- without shutting down or numbing out."
  },
   {
    title: "Our treatment of HIV has advanced. Why hasn't the stigma changed?",
    author: "Arik Hartmann",
    mediaID: "PfZJFkn6",
    synopsis:
      "The treatment of HIV has significantly advanced over the past three decades -- why hasn't our perception of people with the disease advanced along with it? After being diagnosed with HIV, Arik Hartmann chose to live transparently, being open about his status, in an effort to educate people. In this candid, personal talk, he shares what it's like to live with HIV -- and calls on us to dismiss our misconceptions about the disease."
  },
    {
    title: "3 thoughtful ways to conserve water",
    author: "Lana Mazahreh",
    mediaID: "B561DrJn",
    synopsis:
      "According to the UN, nearly one in three people worldwide live in a country facing a water crisis, and less than five percent of the world lives in a country that has more water today than it did 20 years ago. Lana Mazahreh grew up in Jordan, a state that has experienced absolute water scarcity since 1973, where she learned how to conserve water as soon as she was old enough to learn how to write her name. In this practical talk, she shares three lessons from water-poor countries on how to save water and address what's fast becoming a global crisis."
  },
    {
    title: "You aren't at the mercy of your emotions -- your brain creates them",
    author: "Lisa Feldman Barrett",
    mediaID: "B561DrJn",
    synopsis:
      "Can you look at someone's face and know what they're feeling? Does everyone experience happiness, sadness and anxiety the same way? What are emotions anyway? For the past 25 years, psychology professor Lisa Feldman Barrett has mapped facial expressions, scanned brains and analyzed hundreds of physiology studies to understand what emotions really are. She shares the results of her exhaustive research -- and explains how we may have more control over our emotions than we think."
  },
    {
    title: "How adoption worked for me",
    author: "Christopher Ategeka",
    mediaID: "fVlWke0l",
    synopsis:
      "Talent is universal, but opportunity isn't, says TED Fellow Christopher Ategeka. In this charming, hopeful talk, Ategeka tells his story of being orphaned at a young age -- and how being adopted gave him the chance to experience a new culture, acquire an education and live up to his full potential. ‘We may not be able to solve the bigotry and the racism of this world today,’ Ategeka says, ‘But certainly we can raise children to create a positive, inclusive, connected world full of empathy, love and compassion."
  },
    {
    title: "'Good' and 'Bad' are incomplete stories we tell ourselves",
    author: "Heather Lanier: ",
    mediaID: "auzL82BM",
    synopsis:
      "Heather Lanier's daughter Fiona has Wolf-Hirschhorn syndrome, a genetic condition that results in developmental delays -- but that doesn't make her tragic, angelic or any of the other stereotypes about kids like her. In this talk about the beautiful, complicated, joyful and hard journey of raising a rare girl, Lanier questions our assumptions about what makes a life ‘good’ or ‘bad,’ challenging us to stop fixating on solutions for whatever we deem not normal, and instead to take life as it comes."
  }
];

db.Talk
  .remove({})
  .then(() => db.Talk.collection.insertMany(talkSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
