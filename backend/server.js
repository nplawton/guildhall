const express = require('express');
const app = express();

const knexConfig = require('./knexfile.js');
const db = require('knex')(knexConfig.development);

const cors = require('cors');
require('dotenv').config();


const PORT = process.env.PORT || 5000;

//Middleware
app.use(cors());
app.use(express.json()); //Parses incoming JSON requests

//Test Route
app.get('/api/health', (req, res) => {
    res.json({ status: "up", message: "Guildhall backend is running smoothly!" });
});

//Get all Alignments
app.get('/api/alignment', async (req, res) =>{
    try{
        const data = await db('alignment').select('*');
        res.json(data);
    }
    catch(error) {
        console.error(error);
        res.status(500).json({error: 'Failed to fetch alignment types'});
    }
});

//Get all monster Types
app.get('/api/montype', async (req, res) =>{
   try{
        const data = await db('montype').select('*');
        res.json(data);
   }
   catch(error) {
        console.error(error);
        res.status(500).json({error: 'Failed to fetch monster types'});
   }
});

//Get all momnster Descriptions
app.get('/api/mondescrip', async (req, res) =>{
    try{
        const data = await db('mondescrip').select('*');
        res.json(data);
    }
    catch(error) {
        console.error(error);
        res.status(500).json({error: 'Failed to fetch monster descriptions'});
    }
});

//Get all monster Stat data
app.get('/api/stats', async (req, res) => {
    try{
        const data = await db('stats').select('*');
        res.json(data);
    }
    catch(error) {
        console.error(error);
        res.status(500).json({error: 'Failed to fetch monster stats'});
    }
});

//Get the creatures attack information
app.get('/api/monattack', async (req, res) => {
    try{
        const data = await db('monattack').select('*');
        res.json(data);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({error: 'Failed to fetch monsters attacks'});
    }
});

//Get the creatures vitals and rewards information
app.get('/api/vitals', async (req, res) => {
    try{
        const data = await db('vitals').select('*');
        res.json(data);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({error: 'Failed to fetch monsters vitals and rewards'});
    }
});

//Check to see if foreign keys are connecting properly
app.get('/api/monsters', async (req, res) => {
    try{
        const data = await db('monsters').select('*');
        res.json(data);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({error: `Failed to fetch the monster's build from the table`});
    }
});

//Get all monsters with their full relational detail joined
app.get('/api/monsters/full', async (req, res) => {
    
    try {
        const fullMonsters = await db('monsters')
            .join("alignment", "monsters.align_id", "alignment.align_id")
            .join("montype", "monsters.type_id", "montype.type_id")
            .join("mondescrip", "monsters.descrip_id", "mondescrip.descrip_id")
            .join("stats", "monsters.stats_id", "stats.stats_id")
            .join("monattack", "monsters.atk_id", "monattack.atk_id")
            .join("vitals", "monsters.vit_id", "vitals.vit_id")
            .select(
                //Core Identity
                'monsters.id',
                'monsters.name',
                'alignment.a_type as alignment',
                'montype.t_name as type',

                //Lore & Description
                'montype.t_descrip',
                'alignment.a_descrip',
                'mondescrip.descrip',
                'mondescrip.img_url',
                'mondescrip.size',
                'mondescrip.info',

                //Vitals Block
                'stats.armor as armor_class',
                'vitals.hp as hit_points',
                'mondescrip.speed',
                'vitals.xp as experience_points',
                'vitals.cr as challenge_rating',
                
                //Abitlity Stats
                'stats.str',
                'stats.dex',
                'stats.cons as con',
                'stats.intel as int',
                'stats.wis',
                'stats.cha',

                //Attacks & Specil Ability Block
                'monattack.atk1_name',
                'monattack.atk1_descrip',
                'monattack.atk2_name',
                'monattack.atk2_descrip',
                'monattack.atk3_name',
                'monattack.atk3_descrip',
                'monattack.atk4_name',
                'monattack.atk4_descrip',
                'monattack.spatk1_name',
                'monattack.spatk1_descrip',
                'monattack.spatk2_name',
                'monattack.spatk2_descrip',
                'monattack.spatk3_name',
                'monattack.spatk3_descrip',
                'monattack.spatk4_name',
                'monattack.spatk4_descrip',

            );

        res.json(fullMonsters);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({error: `Failed to fetch all details of the monster's data`});''
    }
    
});

//Start Server
app.listen(PORT, () => {
    console.log(`Backend server swallowing data on port ${PORT}`);
});