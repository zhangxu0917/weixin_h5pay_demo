const express = require('express');
const app = express();

app.get('/pay', (req, res) => {
	return res.json(res.body);
});

app.listen(3000, () => {
	console.log('app is running on 3000')
});
