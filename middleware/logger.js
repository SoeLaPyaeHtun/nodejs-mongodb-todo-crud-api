const log = (req, res, next) => {
    console.log("nothing -- > "+req.path)
    next()
}

const auth = (req, res, next) => {
    console.log("nothing -- > "+req.path)

    req.user = {
        id : 3,
        name: "nothing"
    }

    if(req.path.startsWith('/admin')){
        res.status(401).json({
            messgage : "not auth"
        })
    }else{
        next();
    }
}

module.exports = {
    log,
    auth
}