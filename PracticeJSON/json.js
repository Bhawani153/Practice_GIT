//  var object = {
//  name : 'Sandy'
// };
// var object2 = JSON.stringify(object); //Converts Javascript Objects to String...
// console.log(typeof object2);
// console.log(object2);


// var person= '{"name":"Sandy", "age":20}';
// var person2= JSON.parse(person); // Converts the JSON String to Object..
// console.log(typeof person2);
// console.log(person2);

const fs= require('fs');

var note={
    title :"Json Practice",
    body:"Learning from Udemy"
};
var OriginalNote = JSON.stringify(note);
fs.writeFileSync("notes.json",OriginalNote); 
//it creates a new file notes.json and stores the value of OriginalNote
console.log(typeof OriginalNote);
console.log(OriginalNote);

var read = fs.readFileSync("notes.json");
//reads the file contents and stores the value in read then it is being parsed.//such to convet it back to Object.
var notezz=JSON.parse(read);
console.log(typeof notezz);
console.log(notezz);