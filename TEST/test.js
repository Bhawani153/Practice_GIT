//console.log('fgdsjhfgdhsfb');
//console.log(module);
const fs = require('fs');
const os = require('os');
const lodash=require('lodash');
// the dependency modules are being required for the further use of the function in the file.
const notes = require('./module.js');
 // ./ represents the path of the file placed;;;; whereas the . representscurrent directory


console.log(lodash.isString('Soni!!')); // provides the boolean value(true) if the passed value is string.
console.log(lodash.isString(1234));

console.log(lodash.uniq([9,8,8,9,8,8,0,0,9,8])); // removes all the duplicate values in an array.

var result = notes.add(1,21);
// here, add() function decribed in module.js and being called through notes which requires the module file. 
// It takes the parameter defined, perform the operaton and produces response in console of log.

console.log(result+'*************************');
//var user=os.userInfo();
//fs.appendFile('addedFile.txt','Hello!!'+user.username);
//  **************************************************************************************

var command= process.argv[2]; // need to pass an argument while executing the project(node projectjs remove)
console.log('Command',command);
//console.log(process.argv);

if (command === 'add'){
    console.log('Adding Note');
}else if(command==='write'){
    console.log('Edit Some Notes');
}else if(command === 'read'){
    console.log('Notes Read only');
}else if(command === 'remove'){
    console.log('Remove the notes');
}else{
    console.log('Command not recognized');
}