const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'jade');
app.set('views', './views');
app.use(express.static('public'));

app.locals.pretty = true;

app.get('/topic/:id', (req, res) => {
	res.send(req.params.id);
});

app.get('/', (req, res) => {
	res.send('<h1>Hello World</h1>');
});

app.get('/template', (req, res) => {
	res.render('temp', { time: Date() });
});

app.get('/dynamic', (req, res) => {
	let list = '';
	for (let i = 0; i < 5; i++) {
		list += '<li>test</li>';
	}
	let date = Date();
	let output = `
	<html>
		<head>
			<title>TEST</title>
		</head>
		<body>
			<h1>Hello</h1>
			${date}
			<ul>
				${list}
			</ul>
		</body>
	</html>`;
	res.send(output);
});

app.get('/login', (req, res) => {
	res.send('login please');
});

app.get('/cat', (req, res) => {
	res.send('<img src="/cat.jpg">');
});

app.listen(port, () => {
	console.log(`Connected ${port} port!`);
});
