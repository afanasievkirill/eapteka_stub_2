module.exports = function (req, res, next) {
    const token = req.header('api_key')
    if(!token){
        return res.status(401).json({msg: 'No token, authorization denied'})
    }
    if(token !== 'test_api'){
        return res.status(401).json({msg: 'Token is not valid'})
    }
    next()
}