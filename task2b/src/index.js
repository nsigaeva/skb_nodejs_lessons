import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/task2B', (req, res) => {
  var fullname = req.query.fullname.trim();

if (fullname.replace(' ','') == '')
  result='Invalid fullname';
else {
  const lst = fullname.split(/\s+/);

  console.log(lst);
  var result;
  switch (lst.length) {
    case 3:
      result = lst[2] + ' ' + lst[0][0] + '. ' + lst[1][0] + '.';
      break;
    case 2:
      result = lst[1] + ' ' + lst[0][0] + '.';
      break;
    case 1:
      result = lst[0];
      break;
    default:
      result = 'Invalid fullname';
  }
}
  res.send(result.toString());
});


app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});

