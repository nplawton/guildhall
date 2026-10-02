/* Monster stats breakdown seed data for stats migration file */

exports.seed = async function(knex) {
  await knex('stats').del();
  await knex('stats').insert([
    {
      armor: 12,
      str: 10,
      cons: 14,
      dex: 10,
      intel: 11,
      wis: 12,
      cha: 11
    },
    {
      armor: 17, 
      str: 21, 
      cons: 9, 
      dex: 15, 
      intel: 18, 
      wis: 15,	
      cha: 18
    },
    {
      armor: 18, 
      str: 14, 
      cons: 22, 
      dex: 23,
      intel: 1, 
      wis: 3, 
      cha: 11
    },
    {
      armor: 17,
      str: 12, 
      cons: 15, 
      dex: 11,
      intel: 1, 
      wis: 5, 
      cha: 1
    },
    {
      armor: 12, 
      str: 17,
      cons: 14, 
      dex: 10, 
      intel: 1,
      wis: 3,
      cha: 1
    },
    {
      armor: 14, 
      str: 17, 
      cons: 11, 
      dex: 13, 
      intel: 1,	
      wis: 13,
      cha: 6
    },
    {
      armor: 17, 
      str: 17,
      cons:  12, 
      dex: 15, 
      intel: 12, 
      wis: 13,
      cha: 10
    },
    {
      armor: 12, 
      str: 1, 
      cons: 14, 
      dex: 10, 
      intel: 12, 
      wis: 11,
      cha: 17
    },
    {
      armor: 15, 
      str: 16, 
      cons: 8, 
      dex: 15, 
      intel: 2, 
      wis: 8, 
      cha: 7
    },
    {
      armor: 17, 
      str: 23, 
      cons: 16, 
      dex: 18, 
      intel: 7, 
      wis: 14, 
      cha: 12
    },
    {
      armor: 18, 
      str: 10, 
      cons: 14, 
      dex: 18,
      intel: 17, 
      wis: 15, 
      cha: 17
    },
    {
      armor: 19,
      str: 10, 
      cons: 14, 
      dex: 14, 
      intel: 19, 
      wis: 15,
      cha: 19
    },
    {
      armor: 14, 
      str: 8, 
      cons: 14, 
      dex: 14, 
      intel: 13,
      wis: 14, 
      cha: 11
    },
    {
      armor: 13, 
      str: 6, 
      cons: 13, 
      dex: 12,
      intel: 4, 
      wis: 8, 
      cha: 3
    },
    {
      armor: 12, 
      str: 15, 
      cons: 8, 
      dex: 14,
      intel: 5, 
      wis: 10, 
      cha: 3
    },
    {
      armor: 12, 
      str: 12, 
      cons: 12, 
      dex: 13, 
      intel: 4,
      wis: 8, 
      cha: 3
    },
    {
      armor: 16, 
      str: 15, 
      cons: 14, 
      dex: 13, 
      intel: 8, 
      wis: 11, 
      cha: 9
    },
    {
      armor: 17, 
      str: 17, 
      cons: 14, 
      dex: 14, 
      intel: 11, 
      wis: 12, 
      cha: 11
    },
    {
      armor: 17, 
      str: 19, 
      cons: 11, 
      dex: 21, 
      intel: 2, 
      wis: 10, 
      cha: 5
    },
    {
      armor: 15, 
      str: 12, 
      cons: 12, 
      dex: 13, 
      intel: 7,
      wis: 10, 
      cha: 7
    },
    {
      armor: 19, 
      str: 18, 
      cons: 18, 
      dex: 16, 
      intel: 14, 
      wis: 12, 
      cha: 16
    },
    {
      armor: 13, 
      str: 14, 
      cons: 13, 
      dex: 16, 
      intel: 1, 
      wis: 12, 
      cha: 5
    },
    {
      armor: 12, 
      str: 18, 
      cons: 14, 
      dex: 14, 
      intel: 9, 
      wis: 13,
      cha: 11
    },
    {
      armor: 14, 
      str: 19,
      cons: 11, 
      dex: 19, 
      intel: 3, 
      wis: 14, 
      cha: 10
    },
    {
      armor: 16,
      str: 19, 
      cons: 10, 
      dex: 16, 
      intel: 5, 
      wis: 11, 
      cha: 5
    },
    {
      armor: 14,
      str: 17, 
      cons: 12, 
      dex: 15, 
      intel: 13, 
      wis: 12, 
      cha: 14
    },
    {
      armor: 11,
      str: 6, 
      cons: 12, 
      dex: 12, 
      intel: 2, 
      wis: 13, 
      cha: 5
    },
    {
      armor: 19,
      str: 16, 
      cons: 17, 
      dex: 20, 
      intel: 18, 
      wis: 20, 
      cha: 18
    },
    {
      armor: 12,
      str: 13, 
      cons: 11, 
      dex: 14, 
      intel: 5, 
      wis: 10, 
      cha: 4
    },
    {
      armor: 17, 
      str: 18, 
      cons: 18, 
      dex: 18, 
      intel: 17, 
      wis: 20, 
      cha: 20
    },
    {
      armor: 19, 
      str: 24, 
      cons: 20, 
      dex: 24, 
      intel: 19, 
      wis: 22, 
      cha: 25
    },
    {
      armor: 21, 
      str: 26, 
      cons: 22, 
      dex: 26, 
      intel: 25, 
      wis: 25, 
      cha: 30
    }
  ]);
};