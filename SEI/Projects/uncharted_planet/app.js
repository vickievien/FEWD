const express = require('express');
const app = express();
const port = 3000;

// ATTACHES REQ.BODY (INFO THAT WE EDIT/NEW FROM FORM)
app.use(express.urlencoded({extended:false}));

let scientists = [
    // {
    //     name: "Einstein",
    //     description: "Scientist"
    //     },
        
];

// USE METHOD-OVERRIDE TO POST TO PUT
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
  
// INDEX: SHOW ALL: GET
app.get('/scientists', (req,res) => {
    res.render('index.ejs', {
      scientists: scientists
    })
})

// NEW: SHOW NEW FORM: GET
app.get('/scientists/new', (req,res) => {
    res.render('new.ejs')
})

// SHOW: SHOW ONE THING: GET
app.get('/scientists/:id', (req,res) => {
    res.render('show.ejs', {
        scientist: scientists[req.params.id],
        index: req.params.id
    })
})

// CREATE: APPEND NEW THING FROM NEW FORM: POST
app.post('/scientists', (req,res) => {
    scientists.push(req.body);
    res.redirect('/scientists');
})
// FOR THE FUTURE WHEN USING MODELS: const newCat = await cat.create(req.body) then res.redirect('/cats/${newCat._id}) ALSO NEED "ASYNC" BEFORE (REQ, RES) in line 46 (or start of this function)



// EDIT: SHOW FORM TO EDIT ONE THING: GET
app.get('/scientists/:id/edit', (req, res) => {
    res.render('edit.ejs', {
        scientist: scientists[req.params.id],
        index: req.params.id
    })
})



// UPDATE: APPEND UPDATES FROM EDIT FORM: PUT
app.put('/scientists/:id', (req,res) => {
    scientists[req.params.id] = req.body;
    res.redirect(`/scientists/${req.params.id}`)
//     // FOR THE FUTURE WHEN USING MODELS: 
//     // cat.findbyIdAndUpdate(req.params.id, req.body)<-- it may be CAPITAL C for Cat.
})


// DELETE: REMOVE ONE THING: DELETE
app.delete('/scientists/:id', (req,res) => {
    scientists.splice(req.params.id, 1);
    res.redirect('/scientists');
})


// DELETE: REMOVE ALL THING: DELETE
app.delete('/scientists', (req,res) => {
    scientists.splice(0, scientists.length);
    res.redirect('/scientists');
})
  
app.listen(port, ()=> {
  console.log('app is listening')
})











// INDEX: SHOW ALL: GET
// NEW: SHOW NEW FORM: GET
// SHOW: SHOW ONE THING: GET
// CREATE: APPEND NEW THING FROM NEW FORM: POST
// EDIT: SHOW FORM TO EDIT ONE THING: GET
// UPDATE: APPEND UPDATES FROM EDIT FORM: PUT
// DELETE: REMOVE ONE THING: DELETE