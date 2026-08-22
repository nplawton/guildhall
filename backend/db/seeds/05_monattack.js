/* Monster attack seed data for mondattack migration file */

exports.seed = async function(knex) {
  await knex('monattack').del();
  await knex('monattack').insert([
    {
      atk1_name: 'Talon',
      atk1_descrip: `Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) slashing damage.`,
      atk2_name: 'Javelin',
      atk2_descrip: `Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 5 (1d6 + 2) piercing damage.`,
      atk3_name: 'Dive Attack',
      atk3_descrip: `If the aarakocra is flying and dives at least 30 feet straight toward a target and then hits it with a melee weapon attack, the attack deals an extra 3 (1d6) damage to the target.`,
      atk4_name: 'Bite (Ex)',
      atk4_descrip: `When grounded, an aarakocra attacks with its beak (+1 melee), dealing 1d3 points of damage on a successful attack.`,
      spatk1_name: 'Summon Large Air Elemental (Su)',
      spatk1_descrip: `Five aarakocra within 30 feet of each other can magically summon an air elemental. Each of the five must use its action and movement on three consecutive turns to perform an aerial dance and must maintain concentration while doing so (as if concentrating on a spell). When all five have finished their third turn of the dance, the elemental appears in an unoccupied space within 60 feet of them. It is friendly toward them and obeys their spoken commands. It remains for 1 hour, until it or all its summoners die, or until any of its summoners dismisses it as a bonus action . A summoner can't perform the dance again until it finishes a short rest. When the elemental returns to the Elemental Plane of Air, any aarakocra within 5 feet of it can return with it.`

    },
    {
      atk1_name: 'Multiattack',
      atk1_descrip: `The aboleth makes three tentacle attacks.`,
      atk2_name: 'Tentacle',
      atk2_descrip: `Melee Weapon Attack: +9 to hit, reach 10ft., one target. Hit: 12 (2d6 + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC 14 Constitution saving throw or become diseased. The disease has no effect for 1 minute and can be removed by any magic that cures disease. After 1 minute, the diseased creature's skin becomes translucent and slimy, the creature can't regain hit points unless it is underwater, and the disease can be removed only by heal or another disease-curing spell of 6th level or higher. When the creature is outside a body of water, it takes 6 (1d12) acid damage every 10 minutes unless moisture is applied to the skin before 10 minutes have passed.`,
      atk3_name: 'Tail',
      atk3_descrip: `Melee Weapon Attack: +9 to hit, reach 10ft. one target. Hit: 15 (3d6 + 5) bludgeoning damage.`,
      atk4_name: 'Enslave (3/Day)',
      atk4_descrip: `The aboleth targets one creature it can see within 30 feet of it. The target must succeed on a DC 14 Wisdom saving throw or be magically charmed by the aboleth until the aboleth dies or until it is on a different plane of existence from the target. The charmed target is under the aboleth's control and can't take reactions, and the aboleth and the target can communicate telepathically with each other over any distance. Whenever the charmed target takes damage, the target can repeat the saving throw. On a success, the effect ends. No more than once every 24 hours, the target can also repeat the saving throw when it is at least 1 mile away from the aboleth.`,
      spatk1_name: 'Detect',
      spatk1_descrip: `The aboleth makes a Wisdom (Perception) check`,
      spatk2_name: 'Tail Swipe',
      spatk2_descrip: `The aboleth makes one tail attack.`,
      spatk3_name: 'Psychic Drain (Costs 2 Actions)',
      spatk3_descrip: `One creature charmed by the aboleth takes 10 (3d6) psychic damage, and the aboleth regains hit points equal to the damage the creature takes.`
    },
    {
      atk1_name: 'Multiattack',
      atk1_descrip: `The armor makes two melee attacks.`,
      atk2_name: 'Slam',
      atk2_descrip: `The creature batters opponents with an appendage, dealing bludgeoning damage.`,
      atk3_name: 'Melee Weapon Attack',
      atk3_descrip: `+4 to hit, reach 5 ft., one target. Hit: 5 (ld6 + 2) bludgeoning damage.`,
      spatk1_name: 'Antimagic Susceptibility',
      spatk1_descrip: `The armor is incapacitated while in the area of an anti magic field. If targeted by dispel magic, the armor must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute.`,
      spatk2_name: 'False Appearance',
      spatk2_descrip: `While the armor remains motion less, it is indistinguishable from a normal suit of armor.`
    },
    {
      atk1_name: 'Longsword',
      atk1_descrip: `Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8 + 1) slashing damage.`,
      spatk1_name: 'Antimagic Susceptibility',
      spatk1_descrip: `The sword is incapacitated while in the area of an anti magic field. If targeted by dispel magic, the sword must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute.`,
      spatk2_name: 'False Appearance',
      spatk2_descrip: `While the sword remains motionless and isn't flying, it is indistinguishable from a normal sword.`,
    },
    {
      atk1_name: "Smother",
      atk1_descrip: `Melee Weapon Attack: +5 to hit, reach 5 ft., one Medium or smaller creature. Hit: The creature is grappled (escape DC 13). Until this grapple ends, the target is restrained, blinded, and at risk of suffocating, and the rug can't smother another target. In addition, at the start of each of the target's turns, the target takes 10 (2d6 + 3) bludgeoning damage.`,
      spatk1_name: "Antimagic Susceptibility",
      spatk1_descrip: `The rug is incapacitated while in the area of an anti magic field. If targeted by dispel magic, the rug must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute.`,
      spatk2_name: "Damage Transfer",
      spatk2_descrip: `While it is grappling a creature, the rug takes only half the damage dealt to it, and the creature grappled by the rug takes the other half.`,
      spatk3_name: "False Appearance",
      spatk3_descrip: `While the rug remains motionless, it is indistinguishable from a normal rug.`
    },
    {
      atk1_name: "Bite",
      atk1_descrip: `Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 9 (2d6 + 3) slashing damage plus 3 (1d6) acid damage. If the target is a large or smaller creature, it is grappled (escape DC 13). Until this grapple ends, the ankheg can bite only the grappled creature and has advantage on attack rolls to do so.`,
      spatk1_name: "Acid Spray (Recharge 6)",
      spatk1_descrip: `The ankheg spits acid in a line that is 30 feet long and 5 feet wide, provided that it has no creature grappled. Each creature in that line must make a DC 13 Dexterity saving throw, taking 10 (3d6) acid damage on a failed save, or half as much damage on a successful one.`
    },
    {
      atk1_name: "Warhammer",
      atk1_descrip: `Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) bludgeoning damage, or 8 (1d10 + 3) bludgeoning damage if used with two hands to make a melee attack, plus 3 (1d6) fire damage.`,
      spatk1_name: "Heated Body",
      spatk1_descrip: `A creature that touches the azer or hits it with a melee attack while within 5 feet of it takes 5 (1d10) fire damage.`,
      spatk2_name: "Heated Weapons",
      spatk2_descrip: `When the azer hits with a metal melee weapon, it deals an extra 3 (1d6) fire damage (included in the attack).`,
      spatk3_name: "	Illumination",
      spatk3_descrip: `The azer sheds bright light in a 10-foot radius and dim light for an additional 10 feet.`
    },
    {
      atk1_name: "Corrupting Touch",
      atk1_descrip: `Melee Spell Attack: +4 to hit, reach 5 ft., one target. Hit: 12 (3d6 + 2) necrotic damage.`,
      atk2_name: "Horrifying Visage",
      atk2_descrip: `Each non-undead creature within 60 feet of the banshee that can see her must succeed on a DC 13 Wisdom saving throw or be frightened for 1 minute. A frightened target can repeat the saving throw at the end of each of its turns, with disadvantage if the banshee is within line of sight, ending the effect on itself on a success. If a target's saving throw is successful or the effect ends for it, the target is immune to the banshee's Horrifying Visage for the next 24 hours.`,
      atk3_name: "Wail (1fDay)",
      atk3_descrip: `The banshee releases a mournful wail, provided that she isn't in sunlight. This wail has no effect on constructs and undead. All other creatures within 30 feet of her that can hear her must make a DC 13 Constitution saving throw. On a failure, a creature drops to 0 hit points. On a success, a creature takes 10 (3d6) psychic damage.`,
      spatk1_name: "Detect Life",
      spatk1_descrip: `The banshee can magically sense the presence of living creatures up to 5 miles away. She knows the general direction they're in but not their exact locations.`,
      spatk2_name: "Incorporeal Movement",
      spatk2_descrip: `The banshee can move through other creatures and objects as if they were difficult terrain. She takes 5 (1d10) force damage if she ends her turn inside an object.`
    }, 
    {
      atk1_name: "Bite",
      atk1_descrip: `Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage plus 7 (2d6) poiso n damage.`,
      spatk1_name: "Petrifying Gaze",
      spatk1_descrip: `If a creature starts its turn within 30 feet of the basilisk and the two of them can see each other, the basilisk can force the creature to make a DC 12 Constitution saving throw if the basilisk isn't incapacitated. On a failed save, the creature magically begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure , the creature is petrified until freed by the greater restoration spell or other magic. A creature that isn't surprised can avert its eyes to avoid the saving throw at the start of its turn. If it does so, it can't see the basilisk until the start of its next turn, when it can avert its eyes again. If it looks at the basilisk in the meantime, it must immediately make the save. If the basilisk sees its reflection within 30 feet of it in bright light, it mistakes itself for a rival and targets itself with its gaze.`
    },
    {
      atk1_name: "Multiattack",
      atk1_descrip: `The behir makes two attacks: one with its bite and one to constrict.`,
      atk2_name: "Bite",
      atk2_descrip: `Melee Weapon Attack: +10 to hit, reach 10ft., one target. Hit: 22 (3d10 + 6) piercing damage.`,
      atk3_name: "Constrict",
      atk3_descrip: `Melee Weapon Attack: + 10 to hit, reach 5 ft., one large or smaller creature. Hit: 17 (2d10 + 6) bludgeoning damage plus 17 (2d10 + 6) slashing damage. The target is grappled (escape DC 16) if the behir isn't already constricting a creature, and the target is restrained until this grapple ends.`,
      spatk1_name: "Lightning Breath (Recharge 5-6)",
      spatk1_descrip: `The behir exhales a line of lightning that is 20 feet long and 5 feet wide. Each creature in that line must make a DC 16 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one.`,
      spatk2_name: "Swallow",
      spatk2_descrip: `The behir makes one bite attack against a medium or smaller target it is grappling. If the attack hits, the target is also swallowed, and the grapple ends. While swallowed, the target is blinded and restrained, it has total cover against attacks and other effects outside the behir, and it takes 21 (6d6) acid damage at the start of each of the behir's turns. A behir can have only one creature swallowed at a time. If the behir takes 30 damage or more on a single turn from the swallowed creature, the behir must succeed on a DC 14 Constitution saving throw at the end of that turn or regurgitate the creature, which falls prone in a space within 10 feet of the behir. If the behir dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 15 feet of movement, exiting prone.`
    },
    {
      atk1_name: "Bite",
      atk1_descrip: `Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 14 (4d6) piercing damage.`,
      spatk1_name: "Eye Rays",
      spatk1_descrip: `The beholder shoots three of the following magical eye rays at random (reroll duplicates), choosing one to three targets it can see within 120 feet of it: 1) Charm Ray / 2) Paralyzing Ray / 3) Fear Ray / 4) Slowing Ray / 5) Enervation Ray / 6) Telekinetic Ray / 7) Sleep Ray / 8) Petrification Ray / 9) Disintegration Ray / 10) Death Ray`,
      spatk2_name: "Antimagic Cone",
      spatk2_descrip: `The beholder's central eye creates an area of antimagic, as in the antimagic field spell, in a 150-foot cone. At the start of each of its turns, the beholder decides which way the cone faces and whether the cone is active. The area works against the beholder's own eye rays.`
    },
    {
      atk1_name: "Bite",
      atk1_descrip: `Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 14 (4d6) piercing damage.`,
      spatk1_name: "Eye Rays",
      spatk1_descrip: `The beholder shoots three of the following magical eye rays at random (reroll duplicates), choosing one to three targets it can see within 120 feet of it: 1) Charm Ray / 2) Paralyzing Ray / 3) Fear Ray / 4) Slowing Ray / 5) Enervation Ray / 6) Telekinetic Ray / 7) Sleep Ray / 8) Petrification Ray / 9) Disintegration Ray / 10) Death Ray`,
      spatk2_name: "Antimagic Cone",
      spatk2_descrip: `The beholder's central eye creates an area of antimagic, as in the antimagic field spell, in a 150-foot cone. At the start of each of its turns, the beholder decides which way the cone faces and whether the cone is active. The area works against the beholder's own eye rays.`
    },
    {
      atk1_name: "Bite",
      atk1_descrip: `Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 14 (4d6) piercing damage.`
    },
    {
      atk1_name: "Claws",
      atk1_descrip: `Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) piercing damage.`,
      spatk1_name: "False Appearance",
      spatk1_descrip: `While the blight remains motionless, it is indistinguishable from a dead shrub.`
    },
    {
      atk1_name: "Constrict",
      atk1_descrip: `Melee Weapon Attack: +4 to hit, reach 10ft., one target. Hit: 9 (2d6 + 2) bludgeoning damage, and a large or smaller target is grappled (escape DC 12). Until this grapple ends, the target is restrained, and the blight can't constrict another target.`,
      atk2_name: "Entangling Plants (Recharge 5-6)",
      atk2_descrip: `Grasping roots and vines sprout in a 15-foot radius centered on the blight, withering away after 1 minute. For the duration, that area is difficult terrain for non plant creatures. In addition, each creature of the blight's choice in that area when the plants appear must succeed on a DC 12 Strength saving throw or become restrained. A creature can use its action to make a DC 12 Strength check, freeing itself or another entangled creature within reach on a success.`,
      spatk1_name: "False Appearance",
      spatk1_descrip: `While the blight remains motionless, it is indistinguishable from a tangle of vines.`
    },
    {
      atk1_name: "Claws",
      atk1_descrip: `Melee Weapon Attack: +3 to hit, reach 5 ft ., one target. Hit: 6 (2d4 + 1) piercing damage.`,
      spatk1_name: "Needles",
      spatk1_descrip: `Ranged Weapon Attack: +3 to hit, range 30/60 ft., one target. Hit: 8 (2d6 + 1) piercing damage.`
    },
    {
      atk1_name: "Morningstar",
      atk1_descrip: `Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: ll (2d8 + 2) piercing damage.`,
      atk2_name: "Javelin",
      atk2_descrip: `Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 30/1 20 ft., one target. Hit: 9 (2d6 + 2) piercing damage in melee or 5 (1d6 + 2) piercing damage at range.`,
      spatk1_name: "Brute",
      spatk1_descrip: `A melee weapon deals one extra die of its damage when the bugbear hits with it (included in the attack).`,
      spatk2_name: "Surprise Attack",
      spatk2_descrip: `If the bugbear surprises a creature and hits it with an attack during the first round of combat, the target takes an extra 7 (2d6) damage from the attack.`
    },
    {
      atk1_name: "Multiattack",
      atk1_descrip: `The bugbear makes two melee attacks.`,
      atk2_name: "Morningstar",
      atk2_descrip: `Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 12 (2d8 + 3) piercing damage.`,
      atk3_name: "Javelin",
      atk3_descrip: `Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 10 (2d6 + 3) piercing damage in melee or 6 (1d6 + 3) piercing damage at range.`,
      spatk1_name: "Brute",
      spatk1_descrip: `A melee weapon deals one extra die of its damage when the bugbear hits with it (included in the attack).`,
      spatk2_name: "Heart of Hruggek",
      spatk2_descrip: `The bugbear has advantage on saving throws against being charmed, frightened, paralyzed, poisoned, stunned, or put to sleep.`,
      spatk3_name: "Surprise Attack",
      spatk3_descrip: `If the bugbear surprises a creature and hits it with an attack during the first round of combat, the target takes an extra 7 (2d6) damage from the attack.`
    },
    {
      atk1_name: "Bite",
      atk1_descrip: `Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 30 (4d12 + 4) piercing g damage.`,
      spatk1_name: "Standing Leap",
      spatk1_descrip: `The bulette's long jump is up to 30 feet and its high jump is up to 15 feet, with or without a running start.`,
      spatk2_name: "Deadly Leap",
      spatk2_descrip: `If the bulette jumps at least 15 feet as part of its movement, it can then use this action to land on its feet in a space that contains one or more other creatures. Each of those creatures must succeed on a DC 16 Strength or Dexterity saving throw (target's choice) or be knocked prone and take 14 (3d6 + 4) bludgeoning damage plus 14 (3d6 + 4) slashing damage. On a successful save, the creature takes only half the damage, isn't knocked prone, and is pushed 5 feet out of the bulette's space into an unoccupied space of the creature's choice. If no unoccupied space is with in range, the creature instead falls prone in the bulette's space.`
    },
    {
      atk1_name: "Multiattack",
      atk1_descrip: `The bullywug makes two melee attacks: one with its bite and one with its spear.`,
      atk2_name: "Bite",
      atk2_descrip: `Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) bludgeoning damage.`,
      atk3_name: "Spear",
      atk3_descrip: `Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d6 + 1) piercing damage, or 5 (1d8 + 1) piercing damage if used with two hands to make a melee attack.`,
      spatk1_name: "Amphibious",
      spatk1_descrip: `The bullywug can breathe air and water. `,
      spatk2_name: "Speak with Frogs and Toads",
      spatk2_descrip: `The bullywug can communicate simple concepts to frogs and toads when it speaks in Bullywug.`,
      spatk3_name: "Swamp Camouflage",
      spatk3_descrip: `The bullywug has advantage on Dexterity (Stealth) checks made to hide in swampy terrain.`,
      spatk4_name: "Standing Leap",
      spatk4_descrip: `The bullywug's long jump is up to 20 feet and its high jump is up to 10 feet, with or without a running start.`
    },
    {
      atk1_name: "Multiattack",
      atk1_descrip: `The cambion makes two melee attacks or uses its Fire Ray twice.`,
      atk2_name: "Spear",
      atk2_descrip: `Melee or Ranged Weapon Attack: +7 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 7 (1d6 + 4) piercing damage, or 8 (1 d8 + 4) piercing damage if used with two hands to make a melee attack, plus 3 (1 d6) fire damage.`,
      atk3_name: "Fire Ray",
      atk3_descrip: `Ranged Spell Attack: +7 to hit, range 120ft., one target. Hit: 10 (3d6) fire damage.`,
      atk4_name: "Fiendish Charm",
      atk4_descrip: `One humanoid the cambion can see within 30 feet of it must succeed on a DC 14 Wisdom saving throw or be magically charmed for 1 day. The charmed target obeys the cambion's spoken commands. If the target suffers any harm from the cambion or another creature or receives a suicidal command from the cambion, the target can repeat the saving throw, ending the effect on itself on a success. If a target's saving throw is successful, or if the effect ends for it, the creature is immune to the cambion's Fiendish Charm for the next 24 hours.`,
      spatk1_name: "Fiendish Blessing",
      spatk1_descrip: `The AC of the cambion includes its Charisma bonus.`,
      spatk2_name: "Innate Spellcasting",
      spatk2_descrip: `The cambion's spellcasting ability is Charisma (spell save DC 14). The cambion can innately cast the following spells, requiring no material components: 3/day each: alter self, command, detect magic 1/day: plane shift (self only).`
    },
    {
      atk1_name: "Multiattack",
      atk1_descrip: `The carrion crawler makes two attacks: one with its tentacles and one with its bite.`,
      atk2_name: "Tentacles",
      atk2_descrip: `Melee Weapon Attack: +8 to hit, reach 10ft., one creature. Hit: 4 (1 d4 + 2) poison damage, and the target must succeed on a DC 13 Constitution saving throw or be poisoned for 1 minute. Until this poison ends, the ta rget is paralyzed. The target can repeat the saving throw at the end of each of its turns, ending the poison on itself on a success.`,
      atk3_name: "Bite",
      atk3_descrip: `Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) piercing damage.`,
      spatk1_name: "Keen Smell",
      spatk1_descrip: `The carrion crawler has advantage on Wisdom (Perception) checks that rely on smell.`,
      spatk2_name: "Spider Climb",
      spatk2_descrip: `The carrion crawler can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.`
    },
    {
      atk1_name: "Multiattack", 
      atk1_descrip: `The centaur makes two attacks: one with its pike and one with its hooves or two with its longbow.`,
      atk2_name: "Pike",
      atk2_descrip: `Melee Weapon Attack: +6 to hit, reach 10ft., one target. Hit: 9 (1d10 + 4) piercing damage.`,
      atk3_name: "Hooves",
      atk3_descrip: `Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage.`,
      atk4_name: "Longbow",
      atk4_descrip: `Ranged Weapon Attack: +4 to hit, range 150/600 ft ., one target. Hit: 6 (1d8 + 2) piercing damage.`,
      spatk1_name: "Charge",
      spatk1_descrip: `If the centaur moves at least 30 feet straight toward a target and then hits it with a pike attack on the same turn, the target takes an extra 10 (3d6) piercing damage.`
    },
    {
      atk1_name: "Multiattack",
      atk1_descrip: `The chimera makes three attacks: one with its bite, one with its horns, and one with its claws. When its fire breath is available, it can use the breath in place of its bite or horns.`,
      atk2_name: "Bite",
      atk2_descrip: `Melee Weapon Attack: +7 to hit, reach 5 ft., one t a rget. Hit: 11 (2d6 + 4) piercing damage.`,
      atk3_name: "Horns",
      atk3_descrip: `Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 10 (1d12 + 4) bludgeoning damage.`,
      atk4_name: "Claws",
      atk4_descrip: `Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage.`,
      spatk1_name: "Fire Breath (Recharge 5-6)",
      spatk1_descrip: `The dragon head exhales fire in a 15-foot cone. Each creature in that area must make a DC 15 Dexterity saving throw, taking 31 (7d8) fire damage on a failed save, or half as much damage on a successful one.`
    },
    {
      atk1_name: "Multiattack",
      atk1_descrip: `The chuul makes two pincer attacks. If the chuul is grappling a creature, the chuul can also use its tentacles once.`,
      atk2_name: "Pincer",
      atk2_descrip: `Melee Weapon Attack: +6 to hit, reach 10ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage. The target is grappled (escape DC 14) if it is a large or smaller creature and the chuul doesn't have two other creatures grappled.`,
      atk3_name: "Tentacles",
      atk3_descrip: `One creature grappled by the chuul must succeed on a DC 13 Constitution saving throw or be poisoned for 1 minute. Until this poison ends, the target is paralyzed. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.`,
      spatk1_name: "Amphibious",
      spatk1_descrip: `The chuul can breathe air and water.`,
      spatk2_name: "Sense Magic",
      spatk2_descrip: `The chuul senses magic within 120 feet of it at will. This trait otherwise works like the detect magic spell but isn't itself magical.`
    },
    {
      atk1_name: "Multiattack",
      atk1_descrip: `The cloaker makes two attacks: one with its bite and one with its tail.`,
      atk2_name: "Bite",
      atk2_descrip: `Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 10 (2d6 + 3) piercing damage, and if the target is large or smaller, the cloaker attaches to it. lf the cloaker has advantage against the target, the cloaker attaches to the target's head, and the target is blinded and unable to breathe while the cloaker is attached. While attached, the cloaker can make this attack only against the target and has advantage on the attack roll. The cloaker can detach itself by spending 5 feet of its movement. A creature, including the target, can take its action to detach the cloaker by succeeding on a DC 16 Strength check.`,
      atk3_name: "Tail",
      atk3_descrip: `Melee Weapon Attack: +6 to hit, reach 10ft., one creature. Hit: 7 (1d8 + 3) slashing damage.`,
      spatk1_name: "Moan",
      spatk1_descrip: `Each creature within 60 feet of the cloaker that can hear its moan and that isn't an aberration must succeed on a DC 13 Wisdom saving throw or become frightened until the end of the cloaker's next turn. If a creature's saving throw is successful, the creature is immune to the cloaker's moan for the next 24 hours.`,
      spatk2_name: "Phantasms (Recharges after a Short or Long Rest)",
      spatk2_descrip: `The cloaker magically creates three illusory duplicates of itself if it isn't in bright light. The duplicates move with it and mimic its actions, shifting position so as to make it impossible to track which cloaker is the real one. If the cloaker is ever in an area of bright light, the duplicates disappear. Whenever any creature targets the cloaker with an attack or a harmful spell while a duplicate remains, that creature rolls randomly to determine whether it targets the cloaker or one of the duplicates. A creature is unaffected by this magical effect if it can't see or if it relies on senses other than sight. A duplicate has the cloaker's AC and uses its saving throws. If an attack hits a duplicate, or if a duplicate fails a saving throw against an effect that deals damage, the duplicate disappears.`
    },
    {
      atk1_name: "Bite",
      atk1_descrip: `Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 3 (1d4 + 1) piercing damage, and the target must succeed on a DC 11 Constitution saving throw against being magically petrified. On a failed save, the creature begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the creature is petrified for 24 hours.`
    },
    {
      atk1_name: "Bite",
      atk1_descrip: `Melee Weapon Attack: +8 to hit, reach 5 ft., one creature. Hit: 8 (1d6 + 5) piercing damage, and the target must succeed on a DC 13 Constitution saving throw or be poisoned for 24 hours. Until this poison ends, the target is unconscious. Another creature can use an action to shake the target awake.`,
      atk2_name: "Constrict",
      atk2_descrip: `Melee Weapon Attack: +6 to hit, reach 10ft., one medium or smaller creature. Hit: 10 (2d6 + 3) bludgeoning damage, and the target is grappled (escape DC 15). Until this grapple ends, the target is restrained, and the couatl can't constrict another target.`,
      atk3_name: "Change Shape",
      atk3_descrip: `The couatl magically polymorphs into a humanoid or beast that has a challenge rating equal to or less than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the couatl's choice). In a new form, the couatl retains its game statistics and ability to speak, but its AC, movement modes, Strength, Dexterity, and other actions are replaced by those of the new form, and it gains any statistics and capabilities (except class features, legendary actions, and lair actions) that the new form has but that it lacks. If the new form has a bite attack, the couatl can use its bite in that form.`,
      spatk1_name: "Innate Spellcasting",
      spatk1_descrip: `The couatl's spellcasting ability is Charisma (spell save DC 14). It can innately cast the following spells, requiring only verbal components: At will: detect evil and good, detect magic, detect thoughts 3/day each: bless, create food and water, cure wounds, lesser restoration, protection from poison, sanctuary, shield 1/day each: dream, greater restoration, scrying.`,
      spatk2_name: "Magic Weapons",
      spatk2_descrip: `The couatl's weapon attacks are magical.`,
      spatk3_name: "Shielded Mind",
      spatk3_descrip: `The couatl is immune to scrying and to any effect that would sense its emotions, read its thoughts, or detect its location.`
    },
    {
      atk1_name: "Claw",
      atk1_descrip: `Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) bludgeoning or slashing damage (claw's choice).`,
      spatk1_name: "Turn Immunity",
      spatk1_descrip: `The claw is immune to effects that turn undead.` 
    },
    {
      atk1_name: "Multiattack",
      atk1_descrip: `The deva makes two melee attacks.`,
      atk2_name: "Mace",
      atk2_descrip: `Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 7 (1d6 + 4) bludgeoning damage plus 18 (4d8) radiant damage.`,
      atk3_name: "Healing Touch (3/Day)",
      atk3_descrip: `The deva touches another creature. The target magically regains 20 (4d8 + 2) hit points and is freed from any curse, disease, poison, blindness, or deafness.`,
      atk4_name: "Change Shape",
      atk4_descrip: `The deva magically polymorphs into a humanoid or beast that has a challenge rating equal to or less than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the deva's choice). In a new form, the deva retains its game statistics and ability to speak, but its AC, movement modes, Strength , Dexterity, and special senses are replaced by those of the new form, and it gains any statistics and capabilities (except class features, legendary actions, and lair actions) that the new form has but that it lacks.`,
      spatk1_name: "Angelic Weapons",
      spatk1_descrip: `The deva's weapon attacks are magical. When the deva hits with any weapon, the weapon deals an extra 4d8 radiant damage (included in the attack).`,
      spatk2_name: "Innate Spellcasting",
      spatk2_descrip: `The deva's spell casting ability is Charisma (spell save DC 17). The deva can innately cast the following spells, requiring only verbal components: At will: detect evil and good 1/day each: commune, raise dead`,
      spatk3_name: "Magic Resistance",
      spatk3_descrip: `The deva has advantage on saving throws against spells and other magical effects.`
    },
    {
      atk1_name: "Multiattack",
      atk1_descrip: `The planetar makes two melee attacks.`,
      atk2_name: "Greatsword",
      atk2_descrip: `Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 21 (4d6 + 7) slashing damage plus 22 (5d8) radiant damage.`,
      atk3_name: "Healing Touch (4/Day)",
      atk3_descrip: `The planetar touches another creature, the target magically regains 30 (6d8 + 3) hit points and is freed from any curse, disease, poison, blindness, or deafness.`,
      spatk1_name: "Angelic Weapons",
      spatk1_descrip: `The planetar's weapon attacks are magical, when the planetar hits with any weapon, the weapon deals an extra 5d8 radiant damage (included in the attack).`,
      spatk2_name: "Divine Awareness",
      spatk2_descrip: `The Planetar knows if it hears a lie.`,
      spatk3_name: "Magic Resistance",
      spatk3_descrip: `The planetar has advantage on saving throws against spells and other magical effects.`,
      spatk4_name: "Innate Spellcasting",
      spatk4_descrip: `The planetar's spellcasting ability is Charisma (spell save DC 20). The planetar can innately cast the following spells, requiring no material components: At will: detect evil and good, invisibility (self only) / 3/day each: blade barrier, dispel evil and good, flame strike, raise dead / 1/day each: commune, control weather, insect plague.`,
    },
    {
      atk1_name: "Greatsword",
      atk1_descrip: `Melee Weapon Attack: +15 to hit, reach 5 ft. , one target. Hit: 22 (4d6 + 8) slashing damage plus 27 (6d8) radiant damage.`,
      atk2_name: "Slaying Longbow",
      atk2_descrip: `Ranged Weapon Attack: +13 to hit, range 120/600 ft., one target. Hit: 15 (2d8 + 6) piercing damage plus 27 (6d8) radiant damage. If the target is a creature that has 190 hit points or fewer, it must succeed on a DC 15 Constitution saving throw or die.`,
      atk3_name: "Flying Sword",
      atk3_descrip: `Releases its greatsword to hover magically in an unoccupied space within 5 feet of it. If the solar can see the sword, the solar can mentally command it as a bonus action to fly up to 50 feet and either make one attack against a target or return to the solar's hands. If the hovering sword is targeted by any effect, the solar is considered to be holding it. The hovering sword falls if the solar dies.`,
      atk3_name: "Healing Touch (4/Day)",
      atk3_descrip: `The solar touches another creature. The target magically regains 40 (8d8 + 4) hit points and is freed from any curse, disease, poison, blindness, or deafness.`,
      spatk1_name: "Teleport",
      spatk1_descrip: `Magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see.`,
      spatk2_name: "Searing Burst (Costs 2 Actions)",
      spatk2_descrip: `The solar emits magical, divine energy. Each creature of its choice in a 10-foot radius must make a DC 23 Dexterity saving throw, taking 14 (4d6) fire damage plus 14 (4d6) radiant damage on a failed save, or half as much damage on a successful one.`,
      spatk3_name: "Blinding Gaze (Costs 3 Actions)",
      spatk3_descrip: `The solar targets one creature it can see within 30 feet of it. If the target can see it, the target must succeed on a DC 15 Constitution saving throw or be blinded until magic such as the lesser restoration spell removes the blindness.`
    }
  ]);
};