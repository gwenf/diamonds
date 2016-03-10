var alphabet = ['A','B','C','D','E','F','G','H','I','J','K',
'L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

function createDiamond(letter){
	var len = alphabet.indexOf(letter),
			newLine = '',
			letterIterate = 0,
			spacesBeg = len,
			spacesMiddle = 0;

	//test for 'A', if true return
	if (letter==='A') {
		return $('#results1').text(letter);
	}
	
	//increasing loop
	for (var a=0;a<=len;a++){
		
		//adds spaces to beginning
		for (var b=0;b<spacesBeg;b++){
			newLine = ' ' + newLine;
		}
		
		//adds first letter, or only letter to line
		newLine += alphabet[letterIterate];
		
		//adds middle spaces
		for (var c=0;c<spacesMiddle;c++){
			newLine += ' ';
		}
		
		//adds second letter if not 'A'
		if (letterIterate>0){
			newLine += alphabet[letterIterate];
		}

		//write as preformatted text to preserve spaces
		document.write('<p><pre>'+newLine+'</pre></p>');
		
		//reset newLine, ready for next line
		newLine = '';
		
		//increment and decrement variables
		letterIterate = (letterIterate===len) ? letterIterate - 1 : letterIterate + 1;
		spacesBeg--;
		if (spacesMiddle===0){
			spacesMiddle++;
		} else {
			spacesMiddle += 2;
		}
	}
	
	//resetting variables in between loops
	spacesBeg += 2;
	spacesMiddle -= 4;
	
	//decreasing loop
	for (var i=0;i<len;i++) {
		
		//add spaces to beginning
		for (var j=0;j<spacesBeg;j++){
			newLine = ' ' + newLine;
		}
		
		//adds first letter
		newLine += alphabet[letterIterate];
		for (var k=0;k<spacesMiddle;k++){
			newLine += ' ';
		}
		
		//adds second letter if necessary
		if (letterIterate!==0) {
			newLine += alphabet[letterIterate];
		}
		
		//preformatted text
		document.write('<p><pre>'+newLine+'</pre></p>');
		
		//variable increment and decrement
		newLine = '';
		spacesBeg++;
		spacesMiddle -= 2;
		letterIterate--;
	}
}


createDiamond('C');
createDiamond('E');