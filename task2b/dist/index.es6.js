import express from 'express';
import cors from 'cors';

var app = express();
app.use(cors());

app.get('/task2A', function (req, res) {
  var num_a = isNaN(+req.query.a) ? 0 : +req.query.a;
  var num_b = isNaN(+req.query.b) ? 0 : +req.query.b;
  var summ = num_a + num_b;
  res.send(summ.toString());
});

app.listen(3000, function () {
  console.log('Your app listening on port 3000!');
});
//# sourceMappingURL=index.es6.js.map
