🧠 Difference Between .emit() and .broadcast.emit()
Method	                           Sends To
namespace.emit()   ---------->	    All clients in the namespace
socket.broadcast.emit()  ----->	     All except the sender
socket.emit()	    ------->         Only the sender