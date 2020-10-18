//JS FOR LOCAL STORAGE AND END PAGE//



//VARIABLES FOR LOCAL STORAGE//
let username = document.getElementById("username");
var finalScore = document.getElementById("finalscore");
var mostRecentScore = localStorage.getItem("mostRecentScore");
var userHighScore = JSON.parse(localStorage.getItem("userHighScore")) || [];
finalScore.innerHTML = mostRecentScore;

 
username.addEventListener("keyup",() => {
  console.log(username.value);
});


 //USER SCORE AND INITIAL FORM//
saveInfoScore = (e) => {
  e.preventDefault();

  let score = {
      score: mostRecentScore,
      name: username.value
  };
  userHighScore.push(score);

  userHighScore.sort( (a,b) => {
      return b.score - a.score; // if b score is higher than a, place the new b score above a
  })

  //To Print Score Results to Page//

  let hsTable = document.getElementById('hSList');
  window.localStorage.setItem("hSList", JSON.stringify(userHighScore));

  let retrievedScores = JSON.parse(window.localStorage.getItem('hSList'))

  for(i = 0; i < 5; i++){
    hsTable.innerHTML += '<tr><td>' + retrievedScores[i].name + '</td><td>' + retrievedScores[i].score + '</td></tr>';
  }
}
