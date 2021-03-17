const {body, validationResult} = require('express-validator')

exports.validate = [
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
        next();
    }
]

