const express = require('express');
const router = express.Router();

// @route    POST /partners_api_2/orders
// @desc     Create order
// @access   Public

router.post('/', (req,res) => {
    const guid = req.body.orders[0].id
    const orders = {
        accepted: [
            guid
        ]

    }
    console.log(guid)
    return res.status(200).json(orders)
})

module.exports = router