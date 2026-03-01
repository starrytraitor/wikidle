/**
 * 
 * @param {string} input the user's input
 * @param {Object} article the wikipedia article
 * @returns array containing the indices of each occurence of the input. [-1] if the input is not in the article, [-2] if the input is the title of the article
 */
function findInArticle(input, article){
	//returns a list of indexes. The input is found at each index
	//returns -1 if the word is not in the article
	//returns -2 if the word is the title
	input=input.toLowerCase();
	let title=article.title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
	let body=article.body.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
	if(input==title){
		return [-2];
	}
	let isDone = false;
	let wordLocations = [];
	let currentIndex=0;
	while(!isDone){
		inputIndex=body.indexOf(input,currentIndex);
		if(inputIndex!=-1){
			if(!body[inputIndex-1].match(/\w/) && !body[inputIndex+input.length].match(/\w/)){
				wordLocations.push(inputIndex);
			}
			currentIndex=inputIndex+input.length;
		} else{isDone=true}
	}
	return wordLocations;
}

