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
    author: "Heather Lanier",
    mediaID: "auzL82BM",
    synopsis:
      "Heather Lanier's daughter Fiona has Wolf-Hirschhorn syndrome, a genetic condition that results in developmental delays -- but that doesn't make her tragic, angelic or any of the other stereotypes about kids like her. In this talk about the beautiful, complicated, joyful and hard journey of raising a rare girl, Lanier questions our assumptions about what makes a life ‘good’ or ‘bad,’ challenging us to stop fixating on solutions for whatever we deem not normal, and instead to take life as it comes."
  },
    {
    title: "The next generation of African architects and designers",
    author: "Christian Benimana",
    mediaID: "t8P6smYx",
    synopsis:
      "Christian Benimana wants to build a network of architects who can help Africa's booming cities flourish in sustainable, equitable ways -- balancing growth with values that are uniquely African. From Nigeria to Burkina Faso and beyond, he shares examples of architecture bringing communities together. A pan-African movement of architects, designers and engineers on the continent and in diaspora are learning from and inspiring each other, and Benimana invites us to imagine future African cities as the most resilient, socially inclusive places on earth."
    },
    {
    title: "A mother and son united by love and art",
    author: "Deborah Willis and Hank Willis Thomas",
    mediaID: "u0kAaLta",
    synopsis:
      "An art school professor once told Deborah Willis that she, as a woman, was taking a place from a good man -- but the storied photographer says she instead made a space for a good man, her son Hank Willis Thomas. In this moving talk, the mother and son artists describe how they draw from one another in their work, how their art challenges mainstream narratives about black life and black joy, and how, ultimately, everything comes down to love."
    },
    {
    title: "The power of citizen video to create undeniable truths",
    author: "Yvette Alberdingk Thijm",
    mediaID: "LipLvQ87",
    synopsis:
      "Could smartphones and cameras be our most powerful weapons for social justice? Through her organization Witness, Yvette Alberdingk Thijm is developing strategies and technologies to help activists use video to protect and defend human rights. She shares stories of the growing power of distant witnesses -- and a call to use the powerful tools at our disposal to capture incidents of injustice."
    },
    {
    title: "A vehicle built in Africa, for Africa",
    author: "Joel Jackson",
    mediaID: "KHu05PyX",
    synopsis:
      "Joel Jackson wants to reimagine transportation around the needs of the African consumer. He's designed an SUV that's rugged enough for long stretches of uneven terrain and affordable enough to be within reach of those who need it most. Learn more about the challenges of mobility and manufacturing in Africa -- and what a localized motor industry could mean for the future of the continent."
    },
    {
    title: "The history of human emotions",
    author: "Tiffany Watt Smith",
    mediaID: "L61TZ006",
    synopsis:
      "The words we use to describe our emotions affect how we feel, says historian Tiffany Watt Smith, and they've often changed (sometimes very dramatically) in response to new cultural expectations and ideas. Take nostalgia, for instance: first defined in 1688 as an illness and considered deadly, today it's seen as a much less serious affliction. In this fascinating talk about the history of emotions, learn more about how the language we use to describe how we feel continues to evolve -- and pick up some new words used in different cultures to capture those fleeting feelings in words."
    },
    {
    title: "The gift of words",
    author: "Javed Akhtar",
    mediaID: "3P4l6jwM",
    synopsis:
      " ‘Do you know what I mean?’ Legendary poet, lyricist and screenwriter Javed Akhtar asks why we seem to be losing our power to use words -- and inspires us to better understand and communicate with one another using this near-magical tool that carries our culture across generations. (In Hindi with English subtitles)"
    },
    {
    title: "Want to get great at something? Get a coach",
    author: "Atul Gawande",
    mediaID: "Iwspyi1b",
    synopsis:
      "How do we improve in the face of complexity? Atul Gawande has studied this question with a surgeon's precision. He shares what he's found to be the key: having a good coach to provide a more accurate picture of our reality, to instill positive habits of thinking, and to break our actions down and then help us build them back up again. ‘It's not how good you are now; it's how good you're going to be that really matters,’ Gawande says."
    },
    {
    title: "How China is changing the future of shopping",
    author: "Angela Wang",
    mediaID: "EkpIIvMm",
    synopsis:
      "China is a huge laboratory of innovation, says retail expert Angela Wang, and in this lab, everything takes place on people's phones. Five hundred million Chinese consumers -- the equivalent of the combined populations of the US, UK and Germany -- regularly make purchases via mobile platforms, even in brick-and-mortar stores. What will this transformation mean for the future of shopping? Learn more about the new business-as-usual, where everything is ultra-convenient, ultra-flexible and ultra-social."
    },
    {
    title: "A new weapon in the fight against superbugs",
    author: "David Brenner",
    mediaID: "4Vu9IrQq",
    synopsis:
      "Since the widespread use of antibiotics began in the 1940s, we've tried to develop new drugs faster than bacteria can evolve -- but this strategy isn't working. Drug-resistant bacteria known as superbugs killed nearly 700,000 people last year, and by 2050 that number could be 10 million -- more than cancer kills each year. Can physics help? In a talk from the frontiers of science, radiation scientist David Brenner shares his work studying a potentially life-saving weapon: a wavelength of ultraviolet light known as far-UVC, which can kill superbugs safely, without penetrating our skin. Followed by a Q&A with TED Curator Chris Anderson."
    },
    {
    title: "Success stories from Kenya's first makerspace",
    author: "Kamau Gachigi",
    mediaID: "k1xpQySN",
    synopsis:
      "Africa needs engineers, but its engineering students often end up working at auditing firms and banks. Why? Kamau Gachigi suspects it's because they don't have the spaces and materials needed to test their ideas and start businesses. To solve this problem, Gachigi started Gearbox, a makerspace and hardware accelerator that provides a rapid prototyping environment for both professionals and people with no formal engineering background. In this forward-thinking talk, he shares some of the extraordinary projects and innovations coming out of his Kenyan fab lab."
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
