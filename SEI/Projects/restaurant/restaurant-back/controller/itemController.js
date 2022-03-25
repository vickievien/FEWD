

// DONT NEED NEW AND EDIT ROUTE BC REACT TAKES PLACE OF THOSE ROUTES


// INDEX
router.get('/', async (req,res) => {

})


router.post('/', async (req,res) => {
    try {
        const newItem = await Item.create(req.body);
        res.send({
            success: true,
            data: newItem
        })
    }catch(err) {
        res.send ({
            success:false,
            data:err
        })
    }
})

// SHOW
router.get('/:id', async (req,res) => {
    try {
        const item = Item.findByID(req.params.id);
        if(!item) {
            throw new Error("no item by that id here")
        }
        res.send({
            succes:true,
            data: item
        })
    }catch(err){
        res.send({
            success: false,
            data:err.message
        })

    }
})

// EDIT
router.put('/', async (req,res) => {
    try {
        const newItem = await Item.create(req.body);
        res.send({
            success: true,
            data: newItem
        })
    }catch(err) {
        res.send ({
            success:false,
            data:err
        })
    }
})

// DELETE
router.delete('/', async (req,res) => {
    try {
        const newItem = await Item.create(req.body);
        res.send({
            success: true,
            data: newItem
        })
    }catch(err) {
        res.send ({
            success:false,
            data:err
        })
    }
})

module.exports = router;