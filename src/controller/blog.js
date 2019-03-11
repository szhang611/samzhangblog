const getList = (author, keyword) => {
    return [
        {
            id: 1,
            title: '标题A',
            content: '内容A',
            createTime: 1552294255400,
            author,
            keyword
        },
        {
            id: 2,
            title: '标题B',
            content: '内容B',
            createTime: 1552294255400,
            author,
            keyword
        }
    ]
};

module.exports = {
    getList
};