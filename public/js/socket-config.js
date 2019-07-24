const socket = io();

// 'on' is to hear information 
//'emit' is to send information
socket.on('connect', () => {
    console.log('Server connect');
});

socket.on('disconnect', () => {
    console.log('Server disconnect');
})

socket.emit('sendUserInfo', {
    user: 'Esteban',
    message: 'Hello World'
}, (serverResponse) => {
    console.log('Server response', serverResponse);
});

socket.on('sendMessage', (message) => {
    console.log('Server information:', message);
});