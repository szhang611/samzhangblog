const { getList } = require('../controller/blog');
const { SuccessModel, ErrorModel } = require('../model/resModel');

const handleBlogRouter = (req, res) => {
    const method = req.method;

    // Get blog list
    if (method === 'GET' && req.path === '/api/blog/list') {
        const author = req.query.author || '';
        const keyword = req.query.keyword || '';
        const listData = getList(author, keyword);
        // console.log(listData);
        return new SuccessModel(listData);
    }
    
    // Get blog detail
    if (method === 'GET' && req.path === '/api/blog/detail') {
        return {
            msg: '这是获取博客详情的接口'
        }
    }
    
    // create new blog
    if (method === 'POST' && req.path === '/api/blog/new') {
        return {
            msg: '这是新建博客的接口'
        }
    }
    
    // update new blog
    if (method === 'POST' && req.path === '/api/blog/update') {
        return {
            msg: '这是更新博客的接口'
        }
    }
    
    // delete new blog
    if (method === 'DELETE' && req.path === '/api/blog/delete') {
        return {
            msg: '这是删除博客的接口'
        }
    }
};

module.exports = handleBlogRouter;
