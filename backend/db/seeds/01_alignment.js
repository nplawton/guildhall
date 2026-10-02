/* Alignment seed data for alignment migration file */

exports.seed = async function(knex) {
  //Clears old data first
  await knex('alignment').del();
  await knex('alignment').insert([
    {align_id: 1, a_type: 'Lawful Good', a_descrip: 'Creatures can be counted on to do the right thing as expected by society. Gold dragons and paladins are typically lawful good.'},
    {align_id: 2, a_type: 'Neutral Good', a_descrip: 'Folk do the best they can to help others according to their needs. Many celestials are neutral good.'},
    {align_id: 3, a_type: 'Chaotic Good', a_descrip: 'Creatures act as their conscience directs, with little regard for what others expect. Copper dragons and unicorns are typically chaotic good.'},
    {align_id: 4, a_type: 'Lawful Neutral', a_descrip: 'Individuals act in accordance with law, tradition, or personal codes. Modrons and many wizards and monks are lawful neutral.'},
    {align_id: 5, a_type: 'Neutral', a_descrip: 'The alignment of those who prefer to steer clear of moral questions and dont take sides, doing what seems best at the time. Druids are traditionally neutral, as are typical townsfolk.'},
    {align_id: 6, a_type: 'Chaotic Neutral', a_descrip: 'Creatures follow their whims, holding their personal freedom above all else. Many rogues and bards are chaotic neutral.'},
    {align_id: 7, a_type: 'Lawful Evil', a_descrip: 'Creatures methodically take what they want, within the limits of a code of tradition, loyalty, or order. Devils and blue dragons are typically lawful evil.'},
    {align_id: 8, a_type: 'Neutral Evil', a_descrip: 'The alignment of those who do whatever they can get away with, without compassion or qualms. Yugoloths are typically neutral evil'},
    {align_id: 9, a_type: 'Chaotic Evil', a_descrip: 'Creatures act with arbitrary violence, spurred by their greed, hatred, or bloodlust. Demons and red dragons are typically chaotic evil.' },
    {align_id: 10, a_type: 'Unaligned', a_descrip: 'Most creatures that lack the capacity for rational thought do not have alignments—they are Unaligned. Such a creature is incapable of making a moral or ethical choice and acts according to its bestial nature. Sharks are savage predators, for example, but they are not evil; they have no alignment.'}
  ]);
  
};