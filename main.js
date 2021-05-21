function square(x) {
  return x * x;
}
function cube(x){
	return x*x*x;
}
​
function fullname(name, lastname){
	var lastnam = lastname
	return name + ' ' + lastnam + ' rbk'  + 1;
}
 fullname('hh','kk');
 
function average(a,b){
	return (a+b)/2 ;
}
function greeter(name){
	return `hello`+ ` ` +name;
}
function squarearea(S){
	return square(S);
}
function squareperimeter(S) {
	return 4*S;
}
function rectanglearea(l,w){
	return l*w ;
}
function rectangleperimeter(l,w){
	return 2*l+2*w;
}
function parallelogramarea(l,h){
return l*h;
}
function parallelogramperimeter(l,w){
	return 2*l+2*w;
}
​
//day2
function max(x,y){
	if (x>y){
		return x;
	}
	else if (x===y){
		return 'both are equal'
	}
	else {return y;
	}
}
function min(a,b){
	if (a>b){
		return b;
	}
	else if (a===b){
		return 'both are equal'}
​
		else {return a;
		}
	}
	function largerandsmaller (a,b) {
		if (a.length>=b.length){
			return a +" "+ b;}
			return b +" "+ a;
​
		}
function even(x){
	if (x % 2===0){
		return 'true';
	}
		return 'false';
	}
	function odd(x){
	if (x % 2===0){
		return 'false';
	}
		return 'true';
	}
	function positive(x){
		if(x>=0){
			return 'true';}
			return 'false';
		
	}
​
	function negative(x){
		if(x>=0){
			return 'false';}
			return 'true';
		
	}
	//day 3
​
	function weather (str){
		if (str==='warm'||str==='cold'){
			return 'the weather is'+ str;
		}
​
		return 'is not the weather ';
	};
​
	function dogtype (str){
		if (str==='french bulldog'||str==='boston terrier'){
			return 'the dog is'+ str;
		}
		
		return 'is not the dog type ';
	};
​
	function weather2(string1,string2){
		if(string1==='cold'&&string2==='raining'){
			return 'it is cold and raining outside';
​
		}
		return 'nice day for jogging';
	};
	function cat(string1,string2){
		if(string1==='hissing'&&string2==='growling'){
			return 'That cat is hissing and growling';
​
		}
		return 'the cat stay calm';
	};
​
	function carRental(name,age){
		// if (name!=='joe'&& age>=21){
		// 	return 'you are allowed to rent'
		// }
		// else if (name==='joe'){
		// 	return 'you are banned'
		// }
		// return ' you are not allowed'
		if(age >= 21){
			return 'here are the keys mr  ' + name;
		}else if(name ==='joe'){
			return 'you are banned'
		}
		else{return 'you are underage';}
​
	}
	function scoreToGrade(score){
		if(score = 95){
			return 'A';}
		if (score=72)
			return 'C'
		
	}
	var x=5;
	function counter(){
	x++;
    return x;
	}
	 function guessMyNumber(n) { 
 if (n > 5) { 
 return 'Out of bounds! Please try a number between 0 and 5.'; 
 } else if (n === randInt(5)) { 
 return 'You guessed my number!'; 
 } 
 return "Nope! That wasn't it!"
​
 ; 
 } 
​
function randInt(n) { 
 return Math.floor(Math.random() * (n + 1)) 
 }