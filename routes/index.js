var express = require('express');
var router = express.Router();
const pool = require("../db/db");

/* GET home page. */
router.get('/', async (req, res) => {
  try {
    const query = await pool.query("select * from member");
    console.log(query[0][0].id);
    res.render('index', { 
      title: 'coffeestore', });
  } catch (error) {
    console.log(error);
  } 
});

module.exports = router;
