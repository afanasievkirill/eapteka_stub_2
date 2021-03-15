const express = require('express');
const router = express.Router();

const token = require('../../../../middleware/token')

// @route    POST /partners_api_2/invoice/list
// @desc     Create invoices list
// @access   Private
router.post('/list', token, (req,res) => {
    const json_entities = req.body.invoices
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