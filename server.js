import express from 'express';

const app = express();
const PORT = 5556;

const info = {
	message: "this is a test api 222",
};

app.get('/', (req, res) => {
	res.json(info);
});

app.listen(PORT, () => {
		console.log(`test API is listening on PORT ${PORT}`);
});
