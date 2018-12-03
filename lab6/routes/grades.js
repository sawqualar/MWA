const express = require(`express`);
const router = express.Router();
const {from} = require(`rxjs`);
const {map, filter} = require(`rxjs/operators`);
const urlencodedParser = express.urlencoded({extended: false});
const { check, validationResult  } = require('express-validator/check')



const grades = [];
grades.push(new Grade(1,"Assad" , "CS527", 95));
grades.push(new Grade(2,"Qua Lar" , "CS327", 100));
grades.push(new Grade(3,"Qua Lar Lar" , "CS327", 100));

function Grade(id, name, course, grade){
    this.id = id;
    this.name = name;
    this.course = course;
    this.grade = grade;
}


/* GET home page. */
router.get('/', function(req, res, next) {
    res.json(grades);
  });
 
 /* GET with id  */ 
router.get('/:id', function(req, res, next) {
   
   let id = req.params.id;
   let result;
   from(grades)
   .pipe(
    filter( n => n.id = id),
    map(n => n)
   )
   .subscribe( (x) => result = x)   
   console.log(id);
   res.json(result);
  }); 

router.post('/',[
    check('id',).isInt(),
    check('name').isString(),
    check('course').isString(),
    check('grade').isNumeric()
  ],urlencodedParser, function(req, res) {
 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    console.log(req.body.name); 
    grades.push(new Grade(req.body.id, req.body.name, req.body.course, req.body.grade));
    res.json(grades);
    
});
router.put('/:id',[
    check('id',).isInt(),
    check('name').isString(),
    check('course').isString(),
    check('grade').isInt()
   ],urlencodedParser, function(req, res, next) {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    let gradeId = req.params.id;
    console.log(`gradeid ${gradeId}`);

    let obj = grades.find(n => n.id == gradeId);
    let index = grades.indexOf(obj);
    grades[index].name = req.body.name;
    grades[index].grade = req.body.grade;
    grades[index].course = req.body.course;
       
     res.json(grades);
});   
 

router.delete('/:id', function(req, res, next){
    let gradeId = req.params.id;
    console.log(`gradeid ${gradeId}`);
   
    let obj = grades.find(n => n.id == gradeId);
    let removeIndex = grades.indexOf(obj);
   // var removeIndex = grades.map(function(item) { return item.id; }).indexOf(gradeId);

     console.log(`index ${removeIndex}`);
     grades.splice(removeIndex,1);
     res.json(grades);

});

  

module.exports = router;
