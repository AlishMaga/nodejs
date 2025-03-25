class Routes {
    register = (req, res, next)=>{
        res.json({
            data: null,
            message: 'User registered successfully',
            status: 200
        })
    }
    
    login = (req, res, next)=>{
        res.json({
            data: null,
            message: 'User logged in successfully',
            status: 200
        })
    }
}

const routes = new Routes();
module.exports = routes;