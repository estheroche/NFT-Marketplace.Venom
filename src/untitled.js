function StringChallenge(str) { 
    let challengeToken  = "j83wizxl50";
    let finalReturnStr = "";
  
    let reversedStr = "";
    for (let i=str.length - 1; i>=0;i--){
      reversedStr+=str[i]
    }
    let count = 0
    for(let i=0; i < reversedStr.length; i++){
  
      if(i!= 0 && count < challengeToken.length){
        finalReturnStr +=challengeToken[count];
        count+=1
        // finalReturnStr += reversedStr[i]
      }
      finalReturnStr += reversedStr[i]
      
    }
    // code goes here  
    if(count != challengeToken.length - 1){
      // let loopCount = (challengeToken.length -1) - count;
      for(let i = count; i< challengeToken.length; i++){
        finalReturnStr += challengeToken[i];
      }
    }
    return finalReturnStr; 
  
  }
     
  // keep this function call here 
  console.log(StringChallenge(readline()));