const dataStore = [
    {
    question: "How much of global primary production does phytoplankton account for?" ,
    options: [	
    '~ 10%', 
    '~ 25%',
    '~ 50%',
    '~ 75%'],
    answer: '~ 50%',
    answerPopUp: 'Phytoplankton account for about half of global primary production!'
  },
  {
    question: 'Which is NOT a type of phytoplankton?' ,
    options: [
    'Dinoflagellate', 
    'Coccolithophores',  
    'Diatoms',
    'Copepods'],

    answer: 'Copepods',
    answerPopUp: 'Copepods are actually a type of zooplankton!', 
  },
  {
    question: 'Which kind of phytoplankton have the most toxic species?' , 
    options: [
      'Dinoflagellate',
      'Coccolithophores',  
      'Diatoms',
      'Ciliates'],

    answer: 'Dinoflagellate',
    answerPopUp: 'There are ~ 87 known species of toxic dinoflagellates!',
  },
  {
    question: 'Diatoms have a cell wall made out of what?',
    options: [
    'Calcium',
    'Silica', 
    'Peptidoglycan',
    'Cellulose'],

    answer: 'Silica',
    answerPopUp: 'They have a silica wall called a frustule',
  },
   {
    question: 'Ciguatera Fish Poisoning is caused by what kind of phytoplankton?',
    options: [
    'Cyanobacteria',
    'Coccolithophores',
    'Diatom',
    'Dinoflagellate'],
    
    answer: 'Dinoflagellate',
    answerPopUp: 'It is caused by the dinoflagellate Gambierdiscus sp. which produces Ciguatoxin.',
   },

   {
    question: 'Which is NOT considered to be part of “The Big 4” to identify phytoplankton species?',
    options: [
    'Cell wall',
    'Flagella',
    'Pigments',
    'Shape'],

    answer: 'Shape',
    answerPopUp: 'The big 4 include: cell wall, flagella pigments & storage products.',
  },
   {
    question: 'How much energy is transferred when a Zooplankton consumes a phytoplankton?',
    options: [
      '~ 10%',
      '~ 50%',
      '~ 75%', 
      '~ 99%'],

    answer: '~10%',
    answerPopUp: 'The amount of energy transferred at each step in a food chain varies but averages about 10%; <br> 90% of carbon and energy is lost at each step of trophic pyramid.',
  },
   {
    question: 'Which of the following is NOT a type of algal bloom phytoplankton can cause?',
    options: [
    'Red Tide',
    'Blue Tide',
    'Brown Tide',
    'Green Tide'],

    answer: 'Blue Tide',
    answerPopUp: 'Blue tide is NOT a type of algal bloom they can cause. <br> Brown tide, red tide & green tide are all algal blooms caused by phytoplankton.',
  },
   {
    question: 'There are more nutrients for phytoplankton…:',
    options: [
    'Towards the equator',
    'Towards the open ocean',
    'Towards the poles',
    'Towards clearer water'],

    answer: 'Towards the poles',
    answerPopUp: 'Towards the poles! This is because of mixing & upwelling of the water. <br> There are always more nutrients towards the coast as well; more turbid water = higher nutrients!',
  },
    {
     question: 'The word plankton comes from a Greek origin; this word means: ',
     options: [
       'Tiny or small', 
       'Plants',
       'Drifting or wandering', 
       'Water-loving'],
    answer: 'Drifting or wandering',
    answerPopUp: 'Drifting or wandering – because planktonic organisms drift with the water movement.',
   },
];

let qNum = 0;
let score = 0;

function questionUpdate () {
  if (qNum < dataStore.length) {
    return `<div class="question-${qNum}">
    <h2>${dataStore[qNum].question} </h2>
   
    <form>
    <fieldset>
    <label class="answerChoice">
    <input type="radio" value="${dataStore[qNum].options[0]}" name="answer" required>
    <span>${dataStore[qNum].options[0]} </span>
    </label>

    <label class="answerChoice">
    <input type="radio" value="${dataStore[qNum].options[1]}" name="answer" required>
    <span>${dataStore[qNum].options[1]}</span>
    </label>

    <label class="answerChoice">
    <input type="radio" value="${dataStore[qNum].options[2]}" name="answer" required>
    <span>${dataStore[qNum].options[2]} </span>
    </label>

    <label class="answerChoice">
    <input type="radio" value="${dataStore[qNum].options[3]}" name="answer" required>
    <span> ${dataStore[qNum].options[3]} </span>
    </label>
    <br>

    <button type="submit" class="submitButton"> Submit </button>
    </fieldset>
    </form>
    </div>`;

} else {
    getResults();
    restart();
    $('.qNum').text(10)
  }
}

function startQuiz () {
  $('.opening').on('click', '.start', function(event) {
    $('.opening').remove();
    $('.questionForm').css('display', 'inline-block');
    $('.questionScore').css('display', 'inline');
    $('.qNum').text(1);
});
}

function getQuestion () {
  $('.questionForm').html(questionUpdate());
}

function scoreUpdate () {
  score ++;
}
function updateScore () {
  scoreUpdate();
  $('.score').text(score);
}
 
function changeQuestion() {
   qNum ++;
  $('.qNum').text(qNum+1);
}

function selectAnswer() {
  $('form').on('submit', function (event) {
    event.preventDefault();
    let selected = $('input:checked');
    let chosenAnswer = selected.val();
    let rightAnswer = `${dataStore[qNum].answer}`;
    if (chosenAnswer === rightAnswer) {
      selected.parent().addClass('correct');
      ifCorrect();
    } else {
      selected.parent().addClass('wrong');
      ifWrong();
    }
  });
}

let images = [
"https://i.imgur.com/Y0FugZj.jpg",
"https://i.imgur.com/n8ilkZk.jpg",
"https://i.imgur.com/Ye80pn8.jpg", "https://i.imgur.com/ljXAVt7.jpg", "https://i.imgur.com/iUULtCo.jpg"];


function getImageNow () {
  let randomImage = Math.floor(Math.random() * images.length);
  let img = images[randomImage];
  return img}

function ifCorrect () {
  let popUp = `${dataStore[qNum].answerPopUp}`;
  $('.questionForm').html(`<div class="feedback">
  <h3> <b>Correct! </b> </h3>
  <img src="${getImageNow()}" alt="random phytoplankton picture" id="popUpPics" />
  <p> ${popUp} </p>

  <button type=button class="nextButton"> Next</button></div>`);
  
  updateScore();
}

function ifWrong () {
  let popUp = `${dataStore[qNum].answerPopUp}`;
  $('.questionForm').html(`<div class="feedback"> 
  <h3> <b>Incorrect!</b> </h3>
  <img src="${getImageNow()}" alt="random phytoplankton picture" id="popUpPics"/>
  <p> ${popUp}</p>
  <button type=button class="nextButton"> Next</button>
  </div>`);
}

function goToNext () {
  $('main').on('click', '.nextButton', function (event) {
    changeQuestion();
    getQuestion();
    selectAnswer();
  });
}

function getResults () {
  $('.questionScore').css('display', 'none');
  if (score >= 6) {
    $('.questionForm').html(`<div class="resultsfeedback"> 
    <p>Your score is: ${score} /10 </p>
    <p>You passsed! You really know your phycology! </p>
    <img src="https://i.imgur.com/E05RN6G.jpg" alt="black and white plankton"/>
    
    <button class="restartButton">Restart Quiz</button></div>`);
  } else {
    $('.questionForm').html(`<div class="resultsfeedback">
    <p>Your score is: ${score} /10 </p>
    <p> You fail - you have a bit more to learn! </p>
    <img src="https://i.imgur.com/E05RN6G.jpg" alt="black and white plankton"/>
    
    <button class="restartButton">Restart Quiz</button></div>`);
  }
}

function restart () {
  $('main').on('click', '.restartButton', function (event) {
    location.reload();
  });
}

function quiz () {
  startQuiz();
  getQuestion();
  selectAnswer();
  goToNext();
}

$(quiz);  