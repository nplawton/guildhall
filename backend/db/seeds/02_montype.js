/* Monster type seed data for montype migration file */

exports.seed = async function(knex) {
  //Clears old data first
  await knex('montype').del();
  await knex('montype').insert([
    {t_name:'Aberration', t_descrip: 'Aberrations are alien entities, often with powers drawn from their minds. All aberrations have darkvision.'},
    {t_name: 'Beast', t_descrip: 'Beasts are nonhumanoid creatures that are part of the natural world. Some beasts have magical powers, but are generally low in intelligence.'},
    {t_name: 'Celestial', t_descrip: 'Celestials are creatures native to the Upper Planes, and good by nature.'},
    {t_name: 'Construct', t_descrip: 'A construct is either an animated object of some sort, or an artificially crafted creature. They are usually unintelligent, and immune to mind-influencing effects. They are immune to many effects that harm living creatures, such as poison and disease, but they cannot be magically restored to life. Constructs usually have darkvision.'},
    {t_name: 'Dragon', t_descrip: 'A dragon is a reptilian creature, usually winged, often having supernatural abilities. Dragons cannot be paralyzed or induced to sleep. Dragons usually have darkvision and low-light vision.'},
    {t_name: 'Elemental', t_descrip: 'An elemental is composed of one of the four classical elements of air, earth, fire, or water. They can resist effects such as poison and paralysis, and do not have any discernable front or back, making tactics such as flanking or attacks such as critical hits useless. Like constructs, they cannot be resurrected by magic once destroyed, save powerful spells such as wish or miracle. Elementals usually have darkvision.'},
    {t_name: 'Fey', t_descrip: 'Fey are creatures of magic with a connection to nature. Often they are connected to the Feywild, or certain Outer Planes such as Arborea or the Beastlands.'},
    {t_name: 'Fiend', t_descrip: 'Fiends are creatures native to the Lower Planes, and evil by nature.'},
    {t_name: 'Giant', t_descrip: 'A giant is a humanoid-shaped creature of great strength and size. Giants usually have darkvision.'},
    {t_name: 'Humanoid', t_descrip: 'Humanoids are the main people of most worlds, bipeds with culture but few natural magical abilities.'},
    {t_name: 'Monstrosity', t_descrip: 'Monstrosities are unnatural creatures from a variety of origins, including curses and magical experimentation.'},
    {t_name: 'Ooze', t_descrip:	'An ooze is an amorphous or mutable creature. Oozes are usually mindless, and thus immune to mind-influencing effects. They possess blindsight but are otherwise blind. Like elementals, they have no clear front or back and are thus immune to flanking or critical hits. Composed mainly of protoplasm, oozes resist effects such as poison and polymorphing.'},
    {t_name: 'Plant', t_descrip: 'A plant is a vegetable and fungus creature, and immune to effects such as poison, stunning, or polymorphing. They also ignore mind-influencing effects, and may have low-light vision (assuming they can see at all).'},
    {t_name: 'Undead', t_descrip: 'An undead is a once-living creature animated by spiritual or supernatural forces. They resist many effects which harm the living, such as poison and disease. They are healed by negative energy. Undead usually have darkvision.'},
    {t_name: 'Vermin', t_descrip: 'A vermin is an invertebrate, such as an insect, arachnid, arthropod, or worm. Vermin are unintelligent and immune to mind-influencing effects. They usually have darkvision.'},
    {t_name: 'Monstrous Humanoid', t_descrip: 'A monstrous humanoid is similar to a humanoid, but usually has monstrous or animalistic features. Many also have supernatural abilities. Monstrous humanoids usually have darkvision.'},
    {t_name: 'Goblinoid', t_descrip: 'Goblinoids had a typical humanoid anatomy, though their skin tone and texture was often somewhere between that of a human and a snail. The notable exception of this rule was the bugbears whose entire bodies were covered head to toe in thick fur.'}
  ])
  
}