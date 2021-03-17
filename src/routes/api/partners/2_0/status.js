const express = require('express');
const router = express.Router();

const validateApiKey = require('../../../../middleware/token')
const {validateOrdersBody, validateOrdersGuid} = require('../../../../middleware/status')

// @route    POST /partners_api_2/order_status
// @desc     Update order status
// @access   Private
router.post('/',
    [
        validateApiKey,
        validateOrdersBody,
        validateOrdersGuid
    ],
    (req, res) => {
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