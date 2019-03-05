const {override,addBabelPlugin}  = require('customize-cra')
module.exports = override(addBabelPlugin('styled-jsx/babel'))
// function override(config,env){
//     config = injectBabelPlugin(['styled-jsx/babel'],config)
//     return
// }