'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var express = _interopDefault(require('express'));
var cors = _interopDefault(require('cors'));

var app = express();
app.use(cors());

app.get('/task2B', function (req, res) {
  var fullname = req.query.fullname.trim();

  if (fullname.replace(' ', '') == '') result = 'Invalid fullname';else {
    var lst = fullname.split(/\s+/);

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

app.listen(3000, function () {
  console.log('Your app listening on port 3000!');
});
//# sourceMappingURL=index.js.map
