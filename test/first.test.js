
const {VamootProxy} = require('../index');

var o = new VamootProxy();

o.set('foo', {a: 'c'});


const x = o.get('foo');

x.y = 5;
x.y = 6;
