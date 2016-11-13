(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('express'), require('cors')) :
  typeof define === 'function' && define.amd ? define(['express', 'cors'], factory) :
  (factory(global.express,global.cors));
}(this, (function (express,cors) { 'use strict';

express = 'default' in express ? express['default'] : express;
cors = 'default' in cors ? cors['default'] : cors;

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

})));
//# sourceMappingURL=index.umd.js.map
