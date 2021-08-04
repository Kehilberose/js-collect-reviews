/* Для отзывов в Google Play Console */   

function collectReviews() {
    collectElems = document.querySelectorAll('review');
    reviewsArr = {};
    reviewsAuthorsArr = [];
    reviewsRatesArr = [];
    reviewsTextsArr = [];
    reviewsAnswersArr = [];
    result = "";
  
    for (k = 0, i = 0; i < collectElems.length; i++, k++) {
        if (collectElems[i].tagName == "LI") {
            continue;
        } else {
            reviewsArr[k] = collectElems[i];
            reviewsAuthorsArr[k] = reviewsArr[k].querySelectorAll(".author-display-name");
            reviewsRatesArr[k] = reviewsArr[k].querySelectorAll("star-rating > div:first-child");
            reviewsTextsArr[k] = reviewsArr[k].querySelectorAll(".review-text");
            reviewsAnswersArr[k] = reviewsArr[k].querySelectorAll(".reply-text");
        }
    }
  
    for (j = 0; j < reviewsRatesArr.length; j++) {
 
        let review = ""
        let answer = ""
         
        if(reviewsTextsArr[j][0]) {
            review = reviewsTextsArr[j][0].innerText.replace('\n', ' ');
        }
 
        if(reviewsAnswersArr[j][0]) {
            answer = reviewsAnswersArr[j][0].innerText.replace('\n', ' ');
        }
          
        result += reviewsAuthorsArr[j][0].innerText + "\t"
            + reviewsRatesArr[j][0].attributes[3].nodeValue[0] + "\t"
            + review + "\t\t"
            + answer + "\n";
         
    }
  
    console.log(result);
}
    
collectReviews();
