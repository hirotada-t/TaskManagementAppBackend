import * as dotenv from 'dotenv';
dotenv.config()
import express from 'express';

const app: express.Express = express();
const PORT = 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
	console.log('http://localhost:' + PORT);
});


const users = 111;

//一覧取得
app.get('/users', (res: express.Response) => {
	res.send(JSON.stringify(users));
});
