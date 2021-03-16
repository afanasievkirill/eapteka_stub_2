const express = require('express');
const router = express.Router();
const token = require('../../../../middleware/token')

const {body, validationResult} = require('express-validator')

// @route    POST /partners_api_2/order_status
// @desc     Update order status
// @access   Private
router.post('/',
    [
        token,
        [
            body('*.status', 'Status is not numeric').not().isEmpty(),
            body('*.status', 'Status is not numeric').isLength({min: 1, max:2})
        ]
    ],
    (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()})
        }

        const json_entities = req.body
        console.log(json_entities)
        const ids = []
        json_entities.forEach(function (entity) {
            ids.push(entity.order_id)
        })
        console.log(ids)
        const orders = {
            accepted: ids
        }
        return res.status(200).json(orders)
    })

module.exports = router