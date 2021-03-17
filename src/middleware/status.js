const {body, validationResult} = require('express-validator')
const {isGuid} = require('check-guid')

exports.validateOrdersBody = [
    body('*.order_id').not().isEmpty(),
    body('*.status', 'Status is empty').not().isEmpty(),
    body('*.status', 'Status is not have enum value').isIn([
        'CREATED',
        'RECEIVED',
        'RESERVED',
        'DELIVERED',
        'READY',
        'SOLD',
        'REJECTED',
        'CANCELED',
        'TORETURN',
        'RETURNED'
    ]),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(422).json({errors: errors.array()});
        next()
    }
]

exports.validateOrdersGuid = [
    (req, res, next) => {
        const json_entities = req.body
        json_entities.forEach(function (entity) {
            const isValueGuid = isGuid(entity.order_id)
            if (!isValueGuid) {
                return res.status(400).json({
                    msg: 'Order_id has not valid guid',
                    guid: entity.order_id
                })
            }
        })
        next()
    }
]

