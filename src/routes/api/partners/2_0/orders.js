const express = require('express');
const router = express.Router();

// @route    POST /partners_api_2/orders
// @desc     Create orders
// @access   Public
router.post('/', (req,res) => {
    const json_entities = req.body.orders
    const ids = []
    json_entities.forEach( function(entity) {
        ids.push(entity.id)
    })
    console.log(ids)
    const orders = {
        accepted: ids
    }
    return res.status(200).json(orders)
})

module.exports = router