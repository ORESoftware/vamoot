
const {Vamoot} = require('../index');

const v = Object.create({foo: {bar: 'dog'}});

v.foo.bar = 3;

console.log(v);