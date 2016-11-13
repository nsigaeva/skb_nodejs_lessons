'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var express = _interopDefault(require('express'));
var cors = _interopDefault(require('cors'));

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
//# sourceMappingURL=index.js.map
