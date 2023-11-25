var express = require('express');
var router = express.Router();
const pool = require("../db/db");

router.get('/', async (req, res) => {
  try {
    // const query = await pool.query("select * from member");
    // console.log(query[0][0].id);
    // res.render('login', { 
    //   title: 'coffeestore', });
  } catch (error) {
    console.log(error);
  } 
});

router.post('/access', async (req, res) => {
    const temp = req.body;
    console.log("!!!", temp.id, temp.pw);
    const query = await pool.query("select * from member");
    console.log("###", query[0][1].pw);
    console.log("@@@", query[0].length);
    for (i=0; i<query[0].length; i++){
        if (temp.id == query[0][i].id) {
            console.log("!!!");
            if (temp.pw == query[0][i].pw) {
                console.log("@@@@@");
                res.render("login", {
                    name : query[0][0].name
                })
            }
        }
    }
});

module.exports = router;