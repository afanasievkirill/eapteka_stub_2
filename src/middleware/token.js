module.exports = function (req, res, next) {
    const token = req.header('api_key')
    console.log(token)
    if(!token){
        return res.status(401).json({msg: 'No api key, authorization denied'})
    }
    if(token !== 'test_api'){
        return res.status(401).json({msg: 'Api key is not valid'})
    }
    next()
}