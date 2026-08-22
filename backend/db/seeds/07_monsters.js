//Seed file connecting all data together

exports.seed = async function(knex) {

  //1. Clear out any exisiting monsters
  await knex('monsters').del();

  //2. Insert the main relational monster records
  await knex("monsters").insert([
    /*
      Alignmnet ID to creature alignment
      1 Lawful Good
      2 Neutral Good
      3 Chaotic Good
      4 Lawful Neutral
      5 Neutral
      6 Chaotic Neutral
      7 Lawful Evil
      8 Neutral Evil
      9 Chaotic Evil
      10 Unaligned
    */
    /*
      Type ID to creature type
      1 'Aberration'
      2 'Beast'
      3 'Celestial'
      4 'Construct'
      5 'Dragon'
      6 'Elemental'
      7 'Fey'
      8 'Fiend'
      9 'Giant'
      10 'Humanoid'
      11 'Monstrosity'
      12 'Ooze'
      13 'Plant'
      14 'Undead'
      15 'Vermin'
      16 'Monstrous Humanoid'
      17 'Goblinoid'
    */
    {
      id: 1,
      name: "Aarakocra",
      align_id: 2,
      type_id: 16,
      descrip_id: 1,
      stats_id: 1,
      atk_id: 1,
      vit_id: 1
    },
    {
      id: 2,
      name: "Aboleth",
      align_id: 7,
      type_id: 1,
      descrip_id: 2,
      stats_id: 2,
      atk_id: 2,
      vit_id: 2
    },
    {
      id: 3,
      name: "Animated Object, Armor",
      align_id: 10,
      type_id: 4,
      descrip_id: 3,
      stats_id: 3,
      atk_id: 3,
      vit_id: 3
    },
    {
      id: 4,
      name: "Animated Object, Flying Sword",
      align_id: 10,
      type_id: 4,
      descrip_id: 4,
      stats_id: 4,
      atk_id: 4,
      vit_id: 4,
    },
    {
      id: 5,
      name: "Animated Object, Rug of Smothering", 
      align_id: 10,
      type_id: 4,
      descrip_id: 5,
      stats_id: 5,
      atk_id: 5,
      vit_id: 5,
    },
    {
      id: 6,
      name: "Ankheg",
      align_id: 10,
      type_id: 11,
      descrip_id: 6,
      stats_id: 6,
      atk_id: 6,
      vit_id: 6,
    },
    {
      id: 7,
      name: "Azer",
      align_id: 4,
      type_id: 6,
      descrip_id: 7,
      stats_id: 7,
      atk_id: 7,
      vit_id: 7
    },
    {
      id: 8,
      name: "Banshee",
      align_id: 9,
      type_id: 14,
      descrip_id: 8, 
      stats_id: 8,
      atk_id: 8,
      vit_id: 8
    },
    {
      id: 9,
      name: "Basilisk",
      align_id: 10,
      type_id: 11,
      descrip_id: 9,
      stats_id: 9,
      atk_id: 9,
      vit_id: 9
    },
    {
      id: 10,
      name: "Behir",
      align_id: 8,
      type_id: 11,
      descrip_id: 10,
      stats_id: 10,
      atk_id: 10,
      vit_id: 10,
    },
    {
      id: 11,
      name: "Beholder",
      align_id: 7,
      type_id: 1,
      descrip_id: 11,
      stats_id: 11,
      atk_id: 11,
      vit_id: 11
    },
    {
      id: 12,
      name: "Beholder, Death Tyrant",
      align_id: 7,
      type_id: 14,
      descrip_id: 12,
      stats_id: 12,
      atk_id: 12,
      vit_id: 12
    },
    {
      id: 13,
      name: "Beholder, Spectator",
      align_id: 4,
      type_id: 1,
      descrip_id: 13,
      stats_id: 13,
      atk_id: 13,
      vit_id: 13
    },
    {
      id: 14,
      name: "Blight, Twig",
      align_id: 8,
      type_id: 13,
      descrip_id: 14,
      stats_id: 14,
      atk_id: 14,
      vit_id: 14
    },
    {
      id: 15,
      name: "Blight, Vine",
      align_id: 8,
      type_id: 13,
      descrip_id: 15,
      stats_id: 15,
      atk_id: 15,
      vit_id: 15
    },
    {
      id: 16,
      name: "Blight, Needle",
      align_id: 8,
      type_id: 13,
      descrip_id: 16,
      stats_id: 16,
      atk_id: 16,
      vit_id: 16
    },
    {
      id: 17,
      name: "Bugbear",
      align_id: 9,
      type_id: 17,
      descrip_id: 17,
      stats_id: 17,
      atk_id: 17,
      vit_id: 17
    },
    {
      id: 18,
      name: "Bugbear Chief",
      align_id: 9,
      type_id: 17,
      descrip_id: 18,
      stats_id: 18,
      atk_id: 18,
      vit_id: 18
    },
    {
      id: 19,
      name: "Bulette",
      align_id: 10,
      type_id: 11,
      descrip_id: 19,
      stats_id: 19,
      atk_id: 19,
      vit_id: 19
    },
    {
      id: 20,
      name: "Bullywug",
      align_id: 8,
      type_id: 10,
      descrip_id: 20,
      stats_id: 20,
      atk_id: 20,
      vit_id: 20
    },
    {
      id: 21,
      name: "Cambion",
      align_id: 8,
      type_id: 8,
      descrip_id: 21,
      stats_id: 21,
      atk_id: 21,
      vit_id: 21
    },
    {
      id: 22,
      name: "Carrion Crawler",
      align_id: 10,
      type_id: 11,
      descrip_id: 22,
      stats_id: 22,
      atk_id: 22,
      vit_id: 22,
    },
    {
      id: 23,
      name: "Centaur",
      align_id: 2,
      type_id: 11,
      descrip_id: 23,
      stats_id: 23,
      atk_id: 23,
      vit_id: 23
    },
    {
      id: 24,
      name: "Chimera",
      align_id: 9,
      type_id: 11,
      descrip_id: 24,
      stats_id: 24,
      atk_id: 24,
      vit_id: 24
    },
    {
      id: 25,
      name: "Chuul",
      align_id: 9,
      type_id: 1,
      descrip_id: 25, 
      stats_id: 25,
      atk_id: 25,
      vit_id: 25
    },
    {
      id: 26,
      name: "Cloaker",
      align_id: 6,
      type_id: 1,
      descrip_id: 26,
      stats_id: 26,
      atk_id: 26,
      vit_id: 26
    },
    {
      id: 27,
      name: "Cockatrice",
      align_id: 10,
      type_id: 11,
      descrip_id: 27,
      stats_id: 27,
      atk_id: 27,
      vit_id: 27
    },
    {
      id: 28,
      name: "Couatl",
      align_id: 1,
      type_id: 3,
      descrip_id: 28,
      stats_id: 28,
      atk_id: 28,
      vit_id: 28
    },
    {
      id: 29,
      name: "Crawling Claw",
      align_id: 8,
      type_id: 14,
      descrip_id: 29,
      stats_id: 29,
      atk_id: 29,
      vit_id: 29
    },
    {
      id: 30,
      name: "Deva",
      align_id: 1,
      type_id: 3,
      descrip_id: 30,
      stats_id: 30,
      atk_id: 30,
      vit_id: 30
    },
    {
      id: 31,
      name: "Planetar",
      align_id: 1,
      type_id: 3,
      descrip_id: 31,
      stats_id: 31,
      atk_id: 31,
      vit_id: 31
    },
    {
      id: 32,
      name: "Solar",
      align_id: 1,
      type_id: 3,
      descrip_id: 32,
      stats_id: 32,
      atk_id: 32,
      vit_id: 32
    }
  ]);
  
};