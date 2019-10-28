const aws = require('./awsKeys');
const prod = require('./prod');
const ci = require('./ci');
const dev = require('./dev');

let keys;
if (process.env.NODE_ENV === 'production') {
  keys = prod;
}
else if (process.env.NODE_ENV === 'ci') {
  keys = ci;
}
else {
  keys = dev;
}

module.exports = Object.assign(keys, aws);
