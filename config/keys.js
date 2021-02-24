module.exports = {
    mongoURI: 'mongodb+srv://user:5J6jBX4TH5EijiJi@cluster0.ckui1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    secretOrKey: 'Wa07GzRuKj'
}
if (process.env.NODE_ENV === 'production') {
    module.exports = require('./keys_prod');
} else {
    module.exports = require('./keys_dev');
}