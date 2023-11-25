var express = require('express');
var router = express.Router();
const pool = require("../db/db");


router.post('/click', async (req, res) => {
    const temp = req.body;
    const query = await pool.query("select * from menu");
    console.log("###", query[0]);
    console.log('1245', query[0][0].menuname);
    console.log("@@@", query[0].length);
    res.render("menu", {
        menuname : query[0][0].menuname,
        menuprice : query[0][0][0].menuprice,
        menulen : query[0].length
    }) 
});


module.exports = router;
