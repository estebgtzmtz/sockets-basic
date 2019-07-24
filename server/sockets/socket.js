const { io } = require('../server');

//This is the backend communication
io.on('connection', (client) => {
    console.log('User connected');

    client.on('disconnect', () => {
        console.log('User disconnected');
    });

    client.on('sendUserInfo', (userInfo, callback) => {
        console.log(userInfo);
        client.broadcast.emit('sendMessage', { userInfo });

        /*if (userInfo.user && userInfo.message) {
            callback({ message: 'Everything it is ok' });
        } else {
            callback({ message: 'Something wrong !!!!!!' });
        }*/
    });

    client.emit('sendMessage', {
        user: 'administrator',
        message: 'Welcome to this web aplication'
    })
});