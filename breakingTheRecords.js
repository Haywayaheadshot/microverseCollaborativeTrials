function breakingRecords(scores) {
    // Write your code here
   var lowestScores, highestScores,finalResult,minCount,maxCount;
 
   lowestScores = scores[0];
   highestScores = scores[0];
   finalResult = [];
   minCount = 0;
   maxCount = 0;
   
  for(let i=0; i<scores.length;i++){
       if (scores[i]< lowestScores){
         lowestScores = scores[i];
      minCount++
    }
    
    else if(scores[i] > highestScores){
      highestScores = scores[i];
      maxCount++
    }
    
  }
