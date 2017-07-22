
const {Vamoot} = require('../index');

var o = new Vamoot();

o.set('foo', 5);
o.set('foo', 6);

console.error(o.get('foo'));
console.error(o.get('foo'));
console.error(o.get('foo'));
