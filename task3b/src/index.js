import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

function findMatch(url){
  const re = new RegExp('@?(https?:)?(\/\/)?((www|[A-Z]|telegr|vk|vkontakte|twitter|github)[^\/]*\/)?([a-zA-Z0-9]*)');
  const result = url.match(re);
  console.log(result);
  return result;
}
 app.get('/task3B', (req, res) => {
    const username = findMatch(req.query.username);
    res.send('@'+username[5]);
 });


 app.listen(3000, () => {
 console.log('Your app listening on port 3000!');
 });

