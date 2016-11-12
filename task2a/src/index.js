import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/task2A', (req, res) => {
  const num_a = isNaN( (+req.query.a)) ? 0:(+req.query.a);
  const num_b = isNaN( (+req.query.b)) ? 0:(+req.query.b);
  const summ = num_a + num_b;
  res.send(summ.toString());
});


app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
