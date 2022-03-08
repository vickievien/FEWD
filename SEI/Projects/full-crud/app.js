const express = require('express');
const res = require('express/lib/response');
const app = express();
const port = 3000;

app.use(express.urlencoded({extended:false}));

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

const thingArray = [
    {blah: blah},
    {},
    {},
    {},
    {},
];

// INDEX: SHOW ALL: GET
app.get('/things', (req,res) => {
    res.render('index.ejs', {
        things: things
    })
})


// NEW: SHOW NEW FORM: GET
app.get('/things/new', (req,res) => {
    res.render('new.ejs')
})


// SHOW: SHOW ONE THING: GET
app.get('/things/:id', (req,res) => {
    res.render('show.ejs', {
        thing: things[Number(req.params.id)],
        index: req.params.id
    })
})


// CREATE: APPEND NEW THING FROM NEW FORM: POST
app.post('/things', (req,res) => {
    things.push(req.body);
    res.redirect('/things');
})


// EDIT: SHOW FORM TO EDIT ONE THING: GET
app.get('/things/:id/edit', (req,res) => {
    res.render('edit.ejs', {
        thing: things[Number(req.params.id)],
        index: req.params.id
    })
})


// UPDATE: APPEND UPDATES FROM EDIT FORM: PUT
app.put('/things/:id', (req,res) => {
    cats[req.params.id] = req.body;
    res.redirect(`/cats/${req.params.id}`)
})


// DELETE: REMOVE ONE THING: DELETE
app.delete('/things/:id', (req, res) => {
    things.splice(req.params.id, 1);
    res.redirect('/things');
})
