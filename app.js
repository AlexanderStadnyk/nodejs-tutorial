// npm - global command, comes with node
// npm --version

// local dependency - use it only in particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (Mac)

// package.json - manifest file (store important info about project/package):
// - manual approach (create package.json in the root, create properties etc)
// - npm init (step by step, press enter to skip)
// - npm init -y (everything default)

// why do we need package.json?
// we need to provide an information about our project

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)