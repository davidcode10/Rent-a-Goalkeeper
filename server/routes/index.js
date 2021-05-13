module.exports = app => {

    app.use('/api/convocations', require('./convocation.routes.js'))
    app.use('/api/auth', require('./auth.routes.js'))
    app.use('/api/uploads', require('./uploads.routes.js'))
}