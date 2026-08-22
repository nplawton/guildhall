/* Monster vitals and rewards breakdown seed data for vitals migration file */

exports.seed = async function(knex) {
  await knex('vitals').del();
  await knex('vitals').insert([
    {
      hp: 13,
      xp: 50,
      cr: '1/4'
    },
    {
      hp: 135,
      xp: 5900,
      cr: '10'
    },
    {
      hp: 33,
      xp: 200,
      cr: '1'
    },
    {
      hp: 17,
      xp: 50,
      cr: '1/4'
    },
    {
      hp: 33,
      xp: 450,
      cr: '2'
    },
    {
      hp: 39,
      xp: 450,
      cr: '2'
    },
    {
      hp: 39,
      xp: 450,
      cr: '2'
    },
    {
      hp: 58,
      xp: 1100,
      cr: '4'
    },
    {
      hp: 52,
      xp: 700,
      cr: '3'
    },
    {
      hp: 168,
      xp: 7200,
      cr: '11'
    },
    {
      hp: 180,
      xp: 10000,
      cr: '13'
    },
    {
      hp: 187,
      xp: 11500,
      cr: '14'
    },
    {
      hp: 39,
      xp: 700,
      cr: '3'
    },
    {
      hp: 4,
      xp: 25,
      cr: '1/8'
    },
    {
      hp: 26,
      xp: 100,
      cr: '1/2'
    },
    {
      hp: 11,
      xp: 50,
      cr: '1/4'
    },
    {
      hp: 27,
      xp: 200,
      cr: '1'
    },
    {
      hp: 65,
      xp: 700,
      cr: '3'
    },
    {
      hp: 94,
      xp: 1800,
      cr: '5'
    },
    {
      hp: 11,
      xp: 50, 
      cr: '1/4'
    },
    {
      hp: 82,
      xp: 1800,
      cr: '5'
    },
    {
      hp: 51,
      xp: 450,
      cr: '2'
    },
    {
      hp: 45,
      xp: 450,
      cr: '2'
    },
    {
      hp: 114,
      xp: 2300,
      cr: '6'
    },
    {
      hp: 93,
      xp: 1100,
      cr: '4'
    },
    {
      hp: 78,
      xp: 3900,
      cr: '8'
    },
    {
      hp: 27,
      xp: 100,
      cr: '1/2'
    },
    {
      hp: 97, 
      xp: 1100,
      cr: '4'
    },
    {
      hp: 2,
      xp: 10,
      cr:'0'
    },
    {
      hp: 136,
      xp: 5900,
      cr: '10'
    },
    {
      hp: 200,
      xp: 15000,
      cr: '16'
    },
    {
      hp: 243,
      xp: 33000,
      cr: '21'
    },
  ]);
};
