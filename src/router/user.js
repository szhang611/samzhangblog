const handleUserRouter = (req, res) => {
    const method = req.method;

    // Get blog list
    if (method === 'POST' && req.path === '/api/user/login') {
        return {
            msg: '这是登陆的接口'
        }
    }
};

module.exports = handleUserRouter;
