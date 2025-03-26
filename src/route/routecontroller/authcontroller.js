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
    
    getUserById = (req, res, next)=>{
        const params = req.params;
        res.json({
            data: {
                id: params
            },
            message: 'User fetched successfully',
            status: 200
        })
    }

    search = (req, res, next) => {
        const query = req.query;
        res.json({
            data: {
                query: query
            },
            message: 'User fetched successfully',
            status: 200
        })
    }

    headerParams = (req, res, next) => {
        const headers = req.headers;
        res.json({
            data: {
                headers: headers
            },
            message: 'User fetched successfully',
            status: 200
        })
    }

    bodyparam = (req, res, next) => {
        const payload = req.body;
        res.json({
            data: {
                body: payload
            },
            message: 'User fetched successfully',
            status: 200
        })
    }
}

const routes = new Routes();
module.exports = routes;