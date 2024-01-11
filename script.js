function convertToRoman(num) {
  	let standard = {
	   [ "I" , 1] ,
		["IV", 4],
		["V", 5],
		["IX", 9],
		["X", 10],
		["XL", 40],
		["L", 50],
		["XC", 90],
		["C", 100],
		["CD", 400],
		["D", 500],
		["CM", 900],
		["M", 1000]
    }

  //your code here
	
	for(let i = 0 ; i < standard.length; i++){
		let currentVal = standard[i][1];
		if( currentVal === n){
			return standard[i][0];
		}
		if(currentVal > n){
			return standard[i-1][0];
		}
	}
	return "M";
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
