module.exports = (io) => {

    io.on('connection', socket => {
        alert('starting socket')

        console.log('new connection'); 
        
		socket.on('disconnect', () => console.log('disconnected')); 
		
	})
}