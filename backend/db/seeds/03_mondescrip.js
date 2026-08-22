/* Monster base descrip information seed data for mondescrip migration file */

exports.seed = async function(knex) {
  //Clears old data first
  await knex('mondescrip').del();
  await knex('mondescrip').insert([
    {
      size: 'Medium',
      speed: 'On Ground 20ft, Flying 50ft',
      descrip: 'Aarakocra are bird-like humanoids with feathers and a beak. Their hands have three fingers and a thumb, and they also have a pair of feathered wings. Aarakocra have lean legs ending in talons. Aarakocra look like large birds from below, until they land. Aarakocra have advantage on saving throws against lightning and thunder damage, as well as against spells or powers that manipulate air, such as gust of wind, wind wall, or an air elementals whirlwind power. Aarakocra have lean, lightweight bodies, typically 80 to 100 pounds. Their skeletons are hollow and fragile. Their wings anchor in a bony chest plate that provides some slight natural protection.',
      info: 'Aarakocra range the Howling Gyre, an endless storm of mighty winds and lashing rains that surrounds the tranquil realm of Aaqa in the Elemental Plane of Air. Making aerial patrols, these birdlike humanoids guard the windy borders of their home against invaders from the Elemental Plane of Earth, such as gargoyles, their sworn enemies.',
      img_url: 'https://www.dndbeyond.com/avatars/thumbnails/7/622/420/618/636286750209394240.png'
    },
    {
      size: 'Large',
      speed: 'On Ground 10ft, Swim 40ft',
      descrip: 'Aboleth underbellies were often orange-pink, while their topsides were typically sea-green. A little bit back from the head were four long tentacles, two sprouting from across each other on the top, and two more of the same on the underbelly. Their heads were roughly triangular-shaped, with a spherical, somewhat beak-like nose. Above the nose were their three eyes, each one set atop the other. Tendrils and a few shorter tentacles dangled from the bottom of the head. Four blue-black slime-secreting orifices lined the bottom of their bodies. Aboleth blood was green and thick, oozing like sap.',
      info: 'The Aboleth can take 3 legendary actions, choosing from the options below (Special Attacks). Only one legendary action option can be used at a time and only at the end of another creatures turn.',
      img_url: 'https://www.dndbeyond.com/avatars/thumbnails/30761/774/1000/1000/638061093283829548.png'
    },
    {
      size: 'Medium',
      speed: 'On Ground 25ft',
      descrip: 'This empty steel shell clamors as it moves, heavy plates banging and grinding against one another like the vengeful spirit of a fallen knight. Ponderous but persistent, this magical guardian is almost always a suit of plate armor.', 
      info: 'To add to its menace, animated armor is frequently enchanted with scripted speech, so the armor can utter warnings, demand passwords, or deliver riddles. Rare suits of animated armor are able to carry on an actual conversation.',
      img_url: 'https://www.dndbeyond.com/avatars/thumbnails/31312/506/1000/1000/638084408333616236.png'
    },
    {
      size: 'Small',
      speed: 'On Ground 0ft, Flying 50ft',
      descrip: 'Swords are the most common weapons animated with magic. Axes, clubs, daggers, maces, spears, and even self-loading crossbows are also known to exist in animated object form.',
      info: 'A Flying Sword dances through the air, fighting with the confidence of a warrior that cannot be injured.',	
      img_url: 'https://www.dndbeyond.com/avatars/thumbnails/30761/834/1000/1000/638061095632921781.png'
    },
    {
      size: 'Large',
      speed: 'On Ground 10ft',
      descrip: 'A Rug of Smothering can be made in many different forms, from a finely woven carpet fit for a queen to a coarse mat in a peasants hovel.',
      info: 'Creatures with the ability to sense magic detect the Rugs magical aura. In some cases, a Rug of Smothering is disguised as a carpet of flying or another beneficial magic item. However, a character who stands or sits on the Rug, or who attempts to utter a word of command, is quickly trapped as the Rug of Smothering rolls itself tightly around its victim.', 
      img_url: 'https://www.dndbeyond.com/avatars/thumbnails/30761/845/1000/1000/638061095923531915.png'
    },
    {
      size: 'Large',
      speed: 'On Ground 30ft, Burrowing 10ft',
      descrip: 'An Ankheg resembles an enormous many-legged insect, its long antennae twitching in response to any movement around it. Its legs end in sharp hooks adapted for burrowing and grasping its prey, and its powerful mandibles can snap a small tree in half.',
      info: 'When it hunts, an Ankheg burrows upward, waiting below the surface until its antennae detect movement from above. Then it bursts from the earth and. seizes prey in its mandibles, crushing and grinding while it secretes acidic digestive enzymes.', 
      img_url: 'https://www.dndbeyond.com/avatars/thumbnails/30761/865/1000/1000/638061096692582271.png'
    },
    {
      size: 'Medium',
      speed: 'On Ground 30ft',
      descrip: 'In appearance and manner, an Azer resembles a male dwarf, but this is a facade. Beneath its metallic looking skin, an Azer is a being of fire, which outwardly manifests in its fiery hair and beard.',
      info: 'Natives of the Elemental Plane of Fire, Azers are master crafters, expert miners, and sworn foes of the efreet.',
      img_url: 'https://www.dndbeyond.com/avatars/thumbnails/30761/873/1000/1000/638061096972302413.png'
    },
    {
      size: 'Medium',
      speed: 'On Ground 0ft, Flying 40ft',
      descrip: 'Banshees appear as luminous, wispy forms that vaguely recall their mortal features. A Banshees face is wreathed in a wild tangle of hair, its body clad in wispy rags that flutter and stream around it.',
      info: 'When night falls, unlucky travelers hear the faint cries of the forlorn dead. This woeful spirit is a Banshee, a spiteful creature formed from the spirit of a female elf.',
      img_url: 'https://www.dndbeyond.com/avatars/thumbnails/30761/972/1000/1000/638061101973584758.png'
    },
    {
      size: 'Medium',
      speed: 'On Ground 20ft',
      descrip: 'Basilisks had eight legs, which they crawled upon. Basilisks came in a variety of colors from dark gray to dark orange, although they also commonly had a dull brown body with a yellowish underbelly. Basilisks possessed a single row of bony spines that lined their backs, and a few had a curved horn atop their noses. Basilisk eyes were, however, the most notable feature, glowing with a pale green light.', 
      info: 'Some alchemists are said to know how to process the Basilisks gullet and the fluids contained within. Properly handled, the gullet produces an oil that can return petrified creatures to flesh and life. Unfortunately for such a victim, any parts lost in stone form remain absent if the creature revives. Revivification using the oil is impossible if a vital part of the petrified creature, such as its head, is detached.',
      img_url: 'https://www.dndbeyond.com/avatars/thumbnails/30761/974/1000/1000/638061102119934833.png'
    },
    {
      size: 'Huge',
      speed: 'On Ground 50ft, Climbing 40ft', 
      descrip: 'A Behirs monstrous form resembles a combination of centipede and crocodile. Its scaled hide ranges from ultramarine to deep blue in color, fading to pale blue on its underside.',
      info: 'The serpentine Behir crawls along floors and clambers up walls to reach its prey. Its lightning breath can incinerate most creatures, even as more powerful foes are constricted in its coils and eaten alive.',
      img_url: 'https://www.dndbeyond.com/avatars/thumbnails/30761/978/1000/1000/638061102241924981.png'
    },
    {
      size: 'Large',
      speed: 'On Ground 0ft, Flying 20ft',
      descrip: 'A Beholders spheroid body levitates at all times, and its great bulging eye sits above a wide, toothy maw, while the smaller eyestalks that crown its body twist and turn to keep its foes in sight. When a Beholder sleeps, it closes its central eye but leaves its smaller eyes open and alert.',
      info: 'One glance at a Beholder is enough to assess its foul and otherworldly nature. Aggressive, hateful, and greedy, these aberrations dismiss all other creatures as lesser beings, toying with them or destroying them as they choose.', 
      img_url: 'https://www.dndbeyond.com/attachments/thumbnails/3/918/250/209/636288206263978085.jpg'
    },
    {
      size: 'Large',
      speed: 'On Ground 0ft, Flying 20ft',
      descrip: 'A Death Tyrant appears as a massive, naked skull, with a pinpoint of red light gleaming in its hollow eye socket. With its eyestalks rotted away, ten spectral eyes hover above the creature and glare in all directions.',
      info: 'On rare occasions, a Beholders sleeping mind drifts to places beyond its normal madness, imagining a reality in which it exists beyond death. When such dreams take hold, a Beholder can transform, its flesh sloughing away to leave a Death Tyrant behind. This monster possesses the cunning and much of the magic it had in life, but it is fueled by the power of undeath.',
      img_url: 'https://vignette.wikia.nocookie.net/forgottenrealms/images/b/b6/245beholder5eundead.jpg/revision/latest?cb=20171011164609'
    },
    {
      size: 'Medium',
      speed: 'On Ground 0ft, Flying 20ft',
      descrip: 'A Spectator is a lesser Beholder that is summoned from another plane of existence by a magical ritual, the components of which include four beholder eyestalks that are consumed by the rituals magic. Appropriately, a Spectator has four eye stalks, two on each side of the wide eye at the center of its four-foot diameter body.', 
      info: 'Though it can speak, a Spectator communicates primarily by way of telepathy. It is civil while on guard, openly discussing its orders and its summoner. However, even a brief conversation with a spectator is enough to reveal quirks in its personality brought on by its years of isolation. It might invent imaginary enemies, refer to itself in the third person, or try to adopt the voice of its summoner.',
      img_url: 'https://www.dndbeyond.com/avatars/thumbnails/30761/998/1000/1000/638061102728373114.png'
    },
    {
      size: 'Small',
      speed: 'On Ground 20ft',
      descrip: 'Twig Blights can root in soil, which they do when living prey are scarce. While rooted, they resemble woody shrubs. When it pulls its roots free of the ground to move, a twig blights branches twist together to form a humanoid-looking body with a head and limbs.',
      info: 'Twig Blights seek out campsites and watering holes, rooting there to set up ambushes for potential victims coming to drink or rest. Huddled together in groups, Twig Blights blend in with an areas natural vegetation or with piles of debris or firewood.', 
      img_url: 'https://www.dndbeyond.com/avatars/thumbnails/16/464/1000/1000/636376286997771487.png'
    },
    {
      size: 'Medium',
      speed: 'On Ground 10ft', 
      descrip: 'Appearing as masses of slithering creepers, Vine Blights hide in undergrowth and wait for prey to draw near. By animating the plants around them, Vine Blights entangle and hinder their foes before attacking.',
      info: 'Vine Blights are the only blights capable of speech. Through its connection to the evil spirit of the Gulthias tree it serves, a Vine Blight speaks in a fractured version of its dead masters voice, taunting victims or bargaining with powerful foes',
      img_url: 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/466/1000/1000/636376287271000215.png'
    },
    {
      size: 'Medium',
      speed: 'On Ground 30ft',
      descrip: 'In the shadows of a forest, Needle Blights might be taken at a distance for shuffling, hunched humanoids. Up close, these creatures reveal themselves as horrid plants whose conifer-like needles grow across their bodies in quivering clumps.',
      info: 'When Needle Blights detect a threat, they lose a pollen that the wind carries to other Needle Blights throughout the forest. Alerted to their foes location, Needle Blights converge from all sides to drench their roots in blood.', 
      img_url: 'https://angrygolem-games.com/wp-content/uploads/2021/04/needle-blight.jpg'
    },
    {
      size: 'Medium',
      speed: 'On Ground 30ft',
      descrip: 'Bugbears resemble hairy, feral goblins standing seven feet tall. They take their name from their noses and claws, which are similar to those of bears.',
      info: 'Bugbears are born for battle and mayhem. Surviving by raiding and hunting, they bully the weak and despise being bossed around, but their love of carnage means they will fight for powerful masters if bloodshed and treasure a reassured.',
      img_url: 'https://www.dndbeyond.com/avatars/thumbnails/31312/871/1000/1000/638084425511165687.png'
    },
    {
      size: 'Medium',
      speed: 'On Ground 30ft',
      descrip: 'Bugbears resemble hairy, feral goblins standing seven feet tall. They take their name from their noses and claws, which are similar to those of bears.',
      info: 'In the absence of their goblinoid kin, bugbears form loose war bands, each one led by its fiercest member. Bugbears believe that when they die, their spirits have a chance to fight at Hruggeks side.', 
      img_url: 'http://www.worldanvil.com/media/cache/cover/uploads/images/497a2de99d5cfb07107d77c61f65f082.jpg' 
    },
    {
      size: 'Large',
      speed: 'On Ground 40ft, Burrowing 40ft',
      descrip: 'Around the head and rear, this armor was a blue-brown color, while in-between the hue might range from gray-blue to blue-green. Areas around the eyes were slightly darkened, with the eyes themselves being a yellow color with blue-green pupils. A Bulettes body was covered in thick, layered plates. Its head is bullet-shaped, similar to that of a shark, with a massive mouth. It has stumpy but powerful legs.',
      info: 'A Bulette is a massive predator that terrorizes any lands it inhabits. Also called a land shark, it lives only to feed. Irascible and rapacious, Bulettes fear no other creature, and they attack with no regard for superior numbers or strength.',
      img_url: 'https://www.dndbeyond.com/avatars/thumbnails/30762/8/1000/1000/638061103017271419.png'
    },
    {
      size: 'Medium',
      speed: ' Swimming 40ft',
      descrip: 'Bullywugs have green, gray, or mottled yellow skin that shifts through shades of gray, green, and brown, allowing them to blend in with their surroundings.',
      info: 'Life as a Bullywug is nasty, brutish, and wet. These frog headed amphibious humanoids must stay constantly moist, dwelling in rainy forests, marshes, and damp caves. Always hungry and thoroughly evil.',
      img_url: 'https://www.aidedd.org/dnd/images/bullywug.jpg'
    },
    {
      size: 'Medium',
      speed: 'On Ground 30ft, Flying 60ft', 
      descrip: 'A Cambion is the offspring of a fiend (usually a succubus or incubus) and a humanoid (usually a human). Cambions inherit aspects of both parents, but their horns, leathery wings, and sinewy tails are hallmarks of their otherworldly parentage.',
      info: 'Cambions grow into ruthless adults whose wickedness and perversion horrifies even the most devoted mortal parent. Even as a youth, a Cambion identifies its rightful place as an overlord of mortals.',
      img_url: 'https://www.aidedd.org/dnd/images/cambion.jpg'
    },
    {
      size: 'Large',
      speed: 'On Ground 30ft, Climbing 30ft',
      descrip: 'Carrion Crawlers were large, pale yellow, and greenish aberrations whose appearance was akin to a three- to four-foot-long centipede. Crawlers possessed eight long tentacles protruding from the sides of their heads, allowing them to stun prey. Carrion crawlers also had two eye stalks, through which they could perceive their surroundings even in the darkest caverns. Additionally, carrion crawlers had a highly developed sense of smell.',
      info: 'Carrion Crawlers scour putrid flesh from carcasses and gobble the slimy bones that remain. They aggressively attack any creature that trespasses on their territory or disturbs their feasting.',
      img_url: 'https://www.aidedd.org/dnd/images/carrion-crawler.jpg'
    },
    {
      size: 'Large',
      speed: 'On Ground 50ft',
      descrip: 'A Centaur has the body of a great horse topped by a humanoid torso, head, and arms.', 
      info: 'Reclusive wanderers and omen-readers of the wild, Centaurs avoid conflict but fight fiercely when pressed. They roam the vast wilderness, keeping far from borders, laws, and the company of other creatures.',
      img_url: 'https://www.dndbeyond.com/avatars/thumbnails/30762/233/1000/1000/638061114013567234.png'
    },
    {
      size: 'Large',
      speed: 'On Ground 30ft Flying 60ft',
      descrip: 'A typical specimen has the hindquarters of a large goat, the forequarters of a lion, and the leathery wings of a dragon, along with the heads of all three of those creatures. The monster likes to surprise its victims, swooping down from the sky arid engulfing prey with its fiery breath before landing.',
      info: 'Chimeras were created after mortals summoned Demogorgon to the world. The Prince of Demons, unimpressed with the creatures that surrounded it, transformed them into horrific, multi-headed monstrosities. This act gave rise to the first chimeras.',
      img_url: 'https://www.dndbeyond.com/avatars/thumbnails/30762/236/1000/1000/638061114170787382.png'
    },
    {
      size: 'Large',
      speed: 'On Ground 30ft Swimming 30ft',
      descrip: 'Chuuls have been described as a horrible mix of crustacean, insect, and serpent, but most closely resembled an 8 feet tall yellow-green lobster, weighing around 650 pounds with four long legs, two large claws, a strong protective exoskeleton, a fan-like tail, and a mass of paralysis-causing tentacles around its mouth',
      info: 'Survivors of the ancient Aboleth empire, Chuuls are crustaceans the Aboleths modified and endowed with sentience. They follow the ingrained directives of their creators, as they have done since the dawn of time.',
      img_url: 'https://www.dndbeyond.com/avatars/thumbnails/30762/240/1000/1000/638061114295167448.png'
    },
    {
      size: 'Large',
      speed: 'On Ground 10ft Flying 40ft',
      descrip: `Like a stingray, a cloaker's body is composed of cartilage and muscle. With its tail and fins unfurled, it flies through darkness and lurks among the shadows of caverns the same way a stingray glides through water and hides on the ocean floor. Parallel rows of round, black eyes pots run along its back like buttons, and the ivory-colored claws on its cowl resemble bone clasps.`,
      info: `Cloakers strike quickly and consume their meals as swiftly as possible, enveloping and devouring their victims. While it feeds, a cloaker uses its swift, whiplike tail for defense, although it rarely takes a stand against dangerous foes or groups of creatures. As an added defense, cloakers can create illusory duplicates of themselves.`,
      img_url: 'https://www.dndbeyond.com/avatars/thumbnails/30767/348/1000/1000/638061293461506894.png'
    },
    {
      size: 'Small',
      speed: 'On Ground 20ft Flying 40ft',
      descrip: `The cockatrice looks like a hideous hybrid of lizard, bird, and bat, and it is infamous for its ability to turn flesh to stone. The smallest scratch from a cockatrice's beak can spell doom as its victim slowly turns to stone from the injury.`,
      info: `These omnivores have a diet that consists of berries, nuts, flowers, and small animals such as insects, mice, and frogs- things they can swallow whole. They would be no threat to anything else if not for their fierce and frenzied response to even a hint of danger. A cockatrice flies into the face of any threat, squawking and madly beating its wings as its head darts out to peck.`,
      img_url: 'https://www.dndbeyond.com/avatars/thumbnails/30762/246/1000/1000/638061114558227584.png'
    },
    {
      size: 'Medium',
      speed: 'On Ground 30ft Flying 90ft',
      descrip: `A couatl resembles a long, feathered serpent with a pair of rainbow-feathered wings that allowed it to fly.`,
      info: `Couatls are benevolent serpentine beings of great intellect and insight. Their brilliantly colored wings and gentle manner speak to their celestial origins.`,
      img_url: 'https://www.dndbeyond.com/avatars/thumbnails/30763/227/1000/1000/638061153443493893.png'
    },
    {
      size: 'Tiny',
      speed: 'On Ground 20ft Climbing 290ft',
      descrip: `Crawling claws are the severed hands of murderers animated by dark magic so that they can go on killing. Wizards and warlocks of a dark bent use crawling claws as extra hands in their labors.`,
      info: `Through dark necromantic rituals, the life force of a murderer is bound to its severed hand, haunting and animating it. If a dead murderer's spirit already manifests as another undead creature, if the murderer is raised from death, or if the spirit has long passed on to another plane, the ritual fails.`,
      img_url: 'https://www.aidedd.org/dnd/images/crawling-claw.jpg'
    },
    {
      size: 'Medium',
      speed: 'On Ground 30ft, Flying 90ft',
      descrip: 'Devas are angels that act as divine messengers or agents to the Material Plane, the Shadowfell, and the Feywild and that can assume a form appropriate to the realm they are sent to. A Deva can take any shape, although it prefers to appear to mortals as an innocuous humanoid or animal. When circumstances require that it cast off its guise, a deva is a beautiful humanoid-like creature with silvery skin. Its hair and eyes gleam with an unearthly luster, and large feathery wings unfurl from its shoulder blades.',
      info: 'Damage Resistances radiant; bludgeoning, piercing, and slashing from non-magical weapons. Condition Immunities charmed, exhaustion, frightened. Senses darkvision 120ft, passive Perception 19. Languages all, telepathy 120ft',
      img_url: 'https://www.dndbeyond.com/avatars/thumbnails/30761/784/1000/1000/638061093601900776.png'
    },
    {
      size: 'Large',
      speed: 'On Ground 30ft, Flying 90ft',
      descrip: 'Planetars are muscular and hairless and have opalescent green skin and white-feathered wings. They tower over most humanoids, brandishing immense swords with grace.',
      info: 'Planetars act as the weapons of the gods they serve, presenting a tangible representation of their deities might. A Planetar can call down rain to relieve a drought or can lose an insect plague to devour crops. A Planetars celestial ears detect every falsehood, and its radiant eyes see through every deception.',
      img_url: 'https://www.dndbeyond.com/avatars/thumbnails/30761/799/1000/1000/638061094132481081.png'
    },
    {
      size: 'Large',
      speed: 'On Ground 50ft, Flying 150ft', 
      descrip: 'The Solar resembles a towering, powerfully built human with brilliant topaz eyes, silvery (or golden) skin, and gleaming white wings.',
      info: 'A Solar is godlike in its glory and power. On the battlefield, the Solars sword flies into the fray on its own, and a single arrow from a Solars bow can strike a target dead on contact. So great is a Solars celestial might that even demon princes shrink at its resonant commands.',
      img_url:'https://www.dndbeyond.com/avatars/thumbnails/30761/809/1000/1000/638061094428241214.png'
    },
  ])
  
}