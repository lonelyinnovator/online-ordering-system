module.exports = {
        // 部署到gitee page/github page必备
        publicPath: process.env.NODE_ENV === 'production'
                ? '/online-ordering-system'
                : '/'
}
