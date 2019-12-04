/* Для отзывов в Google Play Console */
 
function collectReviews() {
    collectElems = document.querySelectorAll('*[aria-label^="Отзыв"]');
    reviewsArr = {};
    reviewsAuthorsArr = [];
    reviewsRatesArr = [];
    reviewsTextsArr = [];
    reviewsAnswersArr = [];
    result = "";
    for (k = 0, i = 0; i < collectElems.length; i++) {
        if (collectElems[i].tagName == "LI") {
            continue;
        } else {
            reviewsArr[k] = collectElems[i];
            reviewsAuthorsArr[k] = reviewsArr[k].querySelectorAll("h2 > span > strong");
            reviewsRatesArr[k] = reviewsArr[k].querySelectorAll("h2 + p > div");
            reviewsTextsArr[k] = reviewsArr[k].querySelectorAll("fox-review-history + div > pre > span");
            reviewsAnswersArr[k] = reviewsArr[k].querySelectorAll("div > div > div > span + pre");
            k++;
        }
    } for (j = 0; j < reviewsRatesArr.length; j++) {
        result += reviewsAuthorsArr[j][0].innerText + "\t" + reviewsRatesArr[j][0].title[0] + "\t" + reviewsTextsArr[j][0].innerText + "\t\t" + reviewsAnswersArr[j][0].innerText + "\n";
    } console.log(result);
}
 
collectReviews();
