const {body, validationResult} = require('express-validator')

exports.validate = [
    body('*.status', 'Status is not numeric').not().isEmpty(),
    body('*.status', 'Status is not numeric').isLength({min: 1, max: 2}),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(422).json({errors: errors.array()});
        next();
    }
]

