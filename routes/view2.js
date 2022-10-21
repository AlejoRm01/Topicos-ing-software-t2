var express = require('express');
var router = express.Router();

var dictPokeNea = [
  {   
    'id':'0',
    'Name':'Alejandro',
    'Tall':'1.70',
    'Skill':'Sleep',
    'Image':'',
    'Phrase':'Que chimba so'
  },
  {   
    'id':'1',
    'Name':'Felipe',
    'Tall':'1.80',
    'Skill':'Eat',
    'Image':'',
    'Phrase':'Pa delante es pa allá' 
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
const number = Math.floor(Math.random() * Object.keys(dictPokeNea).length);
res.render('view2', { title: 'Taller 2', 'id':number, 'pokeNea':  dictPokeNea[number]})
});

module.exports = router;