const { franc } = require('franc');
const langs = require('langs');
const colors = require('colors');
const input = process.argv[2];
const langCode = (franc(input));
if(langCode == 'und'){
  console.log("Apologies ! The arguement is too short to figure out the language . Try again .".red)  
}
else{
const langName = langs.where("3",langCode);
console.log(`System guesses it to be : ${langName.name}`.green);
}