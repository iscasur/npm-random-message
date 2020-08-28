const messages = [
	"Kim",
	"Israel",
	"Jacobo",
	"Fany",
	"Alondra",
	"Otilia",
	"Salomon",
];

const randomMsg = () => {
	const message = messages[Math.floor(Math.random() * messages.length)];
	console.log(message);
};

module.exports = { randomMsg }