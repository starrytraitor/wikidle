
export function findInputInArticle(input, article){
	//returns a list of indexes. The input is found at each index
	//returns -1 if the word is not in the article
	//returns -2 if the word is the title
	input=input.toLowerCase();
	let title=article.title.toLowerCase();
	let body=article.body.toLowerCase();
	if(input==title){
		return [-2];
	}
	let isDone = false;
	let wordLocations = [];
	let currentIndex=0;
	while(!isDone){
		inputIndex=body.indexOf(input,currentIndex);
		if(inputIndex!=-1){
			// if(body.charAt(inputIndex-2)=='='){
			// }
			if()
				wordLocations.push(inputIndex);
				currentIndex=inputIndex+input.length;
		} else{isDone=true}
	}
	return wordLocations;
}
const article= getArticle(/*articleTitle*/);
const userInput = getUserInput();
findInputInArticle(userInput,article)

