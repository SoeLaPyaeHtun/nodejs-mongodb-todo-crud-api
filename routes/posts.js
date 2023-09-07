var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.json({
    name : "post",
    age : 45
  })
});


router.get("/about", (req, res, next) => {
  res.json({
    name : "sub route",
    id : "3"
  })
})
module.exports = router;
