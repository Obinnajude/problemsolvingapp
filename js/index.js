/*
======================================================================================================================
Author: Obinna Jude

Phone: 08039648575

Git Repo:https://github.com/Obinnajude/problemsolvingapp

Note:This app works well with the Chrome Browser, FireFox and Microsoft Edge.
use to have issue with old version of internet explorer.
=======================================================================================================================
*/


const inputStatus = {};
const scoreStatus = {};
let excelData = [['Stage', 'Stage Activity', 'Activity Score or Answer', 'Total Time For The Test', 'Time Remaining(in Minutes)', 'Time Remaining (in Seconds)']];
console.log(excelData);


//============================================================================================
//Activity and stage instruction display functions
//==================================================================================================

const activityInstructionOne = () => {
    const welcomeOne = "Welcome <b>" + inputStatus.name.toUpperCase() + "</b> to Activity One of this test. <b>Have Fun as You Take the Test</b> <br> <b>Time:</b> 7(Seven) minutes. ";
    const oneActOne = "From the Four(4) images below, state the similarity among the images using one word.";
    let activityTwoIntroduction = document.querySelector('#activity');
    document.getElementById('myfocus').innerHTML = "STAGE I: ASSOCIATION PROBLEM SOLVING STRATEGY";
    let activityTwoInstruction = document.querySelector('#activityinst');
    activityTwoIntroduction.innerHTML = welcomeOne;
    activityTwoInstruction.textContent = oneActOne;
};


const activityInstructionTwo = () => {
    const welcomeTwo = "<b>" + inputStatus.name.toUpperCase() + " This is a great Way to Start </b> Welcome to Activity two of this test.<br> <b>Time:</b> 7(Seven) minutes. ";
    const oneActTwo = "From the list of words in the options blow, select the odd word by clicking the small circle by the side of the  option and click on the Submit button to save your answer and move to the Next question";
    let activityTwoIntroduction = document.querySelector('#activity');
    let activityTwoInstruction = document.querySelector('#activityinst');
    document.getElementById('myfocus').innerHTML = "STAGE I: ASSOCIATION PROBLEM SOLVING STRATEGY";
    activityTwoIntroduction.innerHTML = welcomeTwo;
    activityTwoInstruction.textContent = oneActTwo;
};

const stageTwoActivityInstruction = () => {
    console.log(inputStatus.name);
    const welcomeOne = "<b>Great Job You are doing" + inputStatus.name.toUpperCase() + "!!!</b> Welcome to Stage Two of the test. <br> <b>Time: </b> 7(Seven) minutes.";
    const oneActOne = "Read the riddle below the pictures and type in your solution in the box provided";
    let activityTwoIntroduction = document.querySelector('#activity');
    let activityTwoInstruction = document.querySelector('#activityinst');
    document.getElementById('myfocus').innerHTML = "STAGE II: ANALYTICAL THINKING PROBLEM SOLVING STRATEGY";
    activityTwoIntroduction.innerHTML = welcomeOne;
    activityTwoInstruction.textContent = oneActOne;
};

const stageThreeActivityOneInstruction = () => {
    console.log(inputStatus.name);
    const welcomeOne = "<b> Keep the pace. Good Job!! </b>Welcome to Stage Three Activity One. <br> <b>Time: </b> 7(Seven) minutes.";
    const oneActOne = "State ten uses of the Word in Red";
    let activityTwoIntroduction = document.querySelector('#activity');
    let activityTwoInstruction = document.querySelector('#activityinst');
    document.getElementById('myfocus').innerHTML = "STAGE III: BRAINSTORMING PROBLEM SOLVING STRATEGY";
    activityTwoIntroduction.innerHTML = welcomeOne;
    activityTwoIntroduction.focus();
    activityTwoInstruction.textContent = oneActOne;
};

const stageThreeActivityTwoInstruction = () => {
    console.log(inputStatus.name);
    const welcomeOne = "<b>Just Two More Stage to Go " + inputStatus.name.toUpperCase() + "</b> Welcome to Stage Three Activity Two. <br> <b>Time: </b> 7(Seven) minutes .";
    const oneActOne = "Type Five different words the Word in blue can stand for";
    let activityTwoIntroduction = document.querySelector('#activity');
    let activityTwoInstruction = document.querySelector('#activityinst');
    document.getElementById('myfocus').innerHTML = "STAGE III: BRAINSTORMING PROBLEM SOLVING STRATEGY";
    activityTwoIntroduction.innerHTML = welcomeOne;
    activityTwoIntroduction.focus();
    activityTwoInstruction.textContent = oneActOne;
};

const stageFourActivityInstruction = () => {
    const welcomeOne = "<b>Hurray!!!!! " + inputStatus.name.toUpperCase() + "</b> You Rock!!!: Welcome to Stage Four Activity. One more Stage and you are done <br> <b>Time:</b>7(Seven) minutes.";
    const oneActOne = "Below is a tree with many Faces, Identify the Number of faces on the Tree and Type the number in the box provided";
    let activityTwoIntroduction = document.querySelector('#activity');
    let activityTwoInstruction = document.querySelector('#activityinst');
    document.getElementById('myfocus').innerHTML = "STAGE IV: INTUITION PROBLEM SOLVING STRATEGY";
    activityTwoIntroduction.innerHTML = welcomeOne;
    activityTwoInstruction.textContent = oneActOne;
};

const stageFiveActivityInstruction = () => {
    const welcomeOne = "<b>Congratulations " + inputStatus.name.toUpperCase() + "!!!</b> You Made it to the Final Stage<br> <b>Time:</b>7(Seven) minutes.";
    const oneActOne = "Type a word that is related to the word in the left side of the arrow as the first set of words";
    let activityTwoIntroduction = document.querySelector('#activity');
    let activityTwoInstruction = document.querySelector('#activityinst');
    document.getElementById('myfocus').innerHTML = "STAGE V: ANALOGY PROBLEM SOLVING STRATEGY";
    activityTwoIntroduction.innerHTML = welcomeOne;
    activityTwoInstruction.textContent = oneActOne;
};

const testEnd = () => {
    const welcomeOne = "<b>Hurraaay " + inputStatus.name.toUpperCase() + " !!!</b> THANKS FOR TAKING THE TEST. <br><br> Please Call the examiner Once you are seeing this screen.";
    const oneActOne = "<img src='img/gify.gif' width='600' height='500'>";
    let activityTwoIntroduction = document.querySelector('#activity');
    activityTwoIntroduction.style.textAlign = 'center';
    let activityTwoInstruction = document.querySelector('#activityinst');
    activityTwoInstruction.style.textAlign = 'center';
    document.getElementById('myfocus').innerHTML = "THIS IS THE END......";
    activityTwoIntroduction.innerHTML = welcomeOne;
    activityTwoInstruction.innerHTML = oneActOne;
    document.querySelector('#question').style.display = 'none';
    document.querySelector('#stageFive').style.display = 'none';
    document.querySelector('#word').innerHTML = "Good Luck!!!";
    document.querySelector('#option').innerHTML = "<button id='button-a' class='btn-primary' style='cursor:pointer'>Dont Click For Admin Use Only</button>";


}

let stageOne = [
    ["pants", "singlet", "socks", "Tie", "Tie"],
    ["sing", "cluck", "crow", "bleat", "bleat"],
    ["mirror", "chair ", "table", "mattress", "mirror"],
    [" football ", "long jump ", "shot put ", "race", "race"],
    ["sing", "cluck", "crow", "bleat", "bleat"]
];

let stageOneOne = [
    ['img/one1.jpg', 'img/one2.jpg', 'img/one3.jpg', 'img/one4.jpg', 'white'],
    ['img/two1.jpg', 'img/two2.jpg', 'img/two3.jpg', 'img/two4.jpg', 'grip'],
    ['img/three1.jpg', 'img/three2.jpg', 'img/three3.jpg', 'img/three4.jpg', 'green'],
    ['img/four1.jpg', 'img/four2.jpg', 'img/four3.jpg', 'img/four4.jpg', 'pull'],
    ['img/five1.jpg', 'img/five2.jpg', 'img/five3.jpg', 'img/five4.jpg', 'stack']
];

let stageThreeActivityOne = [
    ["Plastic"],
    ["Head scurf"],
    ["Hair brush"],
    ["Bath towel"],
    ["ruler"],
    ["elastic band"],
    ["tooth brush"],
    ["stool"],
    ["note book"],
    ["pair of glasses"]
];

let stageThreeActivityTwo = [
    ["Smile"],
    ["tired"],
    ["obedient"],
    ["attack"],
    ["external"]
]

let stageFiveActivity = [
    ["Vegetable", "brucolli", "Plygin", ""],
    ["Ship", "captain", "City", "manager"],
    ["Apple", " lemon", "higher", ""],
    ["Sour", "lemon", "Soft", "dawn"],
    ["Flock", "bird", "soldier", "army"]
]

const instructionView = () => {
    if (inputStatus.name && inputStatus.age && inputStatus.gender != 'choose Your Gender') {
        const formDisplay = document.getElementById('log');
        const instructionDisplay = document.getElementById('instruction');
        formDisplay.style.display = 'none';
        instructionDisplay.style.display = 'block';

    } else if (inputStatus.gender != 'choose Your Gender' && !inputStatus.name && inputStatus.age) {
        document.getElementById('nameerror').textContent = 'Please enter your name';
        document.getElementById('ageerror').textContent = ' ';
        document.getElementById('gendererror').textContent = '';
    } else if (inputStatus.name && !inputStatus.age && inputStatus.gender != 'choose Your Gender') {
        document.getElementById('ageerror').textContent = 'Please enter your age';
        document.getElementById('nameerror').textContent = '';
        document.getElementById('gendererror').textContent = '';
    } else if (inputStatus.name && inputStatus.gender === 'choose Your Gender' && inputStatus.age) {
        document.getElementById('gendererror').textContent = 'Please enter your gender';
        document.getElementById('nameerror').textContent = '';
        document.getElementById('ageerror').textContent = ' ';
    } else if (!inputStatus.name && !inputStatus.age && inputStatus.gender === 'choose Your Gender') {
        document.getElementById('nameerror').textContent = 'Please enter your name';
        document.getElementById('ageerror').textContent = 'Please enter your age';
        document.getElementById('gendererror').textContent = 'Please enter your gender';
    } else {
        document.getElementById('nameerror').textContent = '';
        document.getElementById('gendererror').textContent = '';
        document.getElementById('ageerror').textContent = ' ';
    }
}

const collectLogInput = () => {
    let name = document.getElementById('name').value;
    let gender = document.getElementById('gender').value;
    let age = document.getElementById('age').value;
    inputStatus.name = name;
    inputStatus.age = age;
    inputStatus.gender = gender;
    excelData.unshift(['Name:', name, 'Gender:', gender, 'Age', age])
    instructionView();

};

let pos = 0, score = 0, sec = 00, m = 1, q, answer = "", answer2 = "", scores = '', choice3;

//=======================================================
//activity one of stage one
//================================================================
const stageOneActicityOne = () => {
    let imageDisplayPanel = document.getElementById("question");
    let answerPanel = document.getElementById("option");
    let btn = document.querySelector('#btnst');
    if (pos >= stageOneOne.length) {
        clearTimeout(q);
        excelData.push(['Stage One', 'activity one', score, 7, m, sec])
        scoreStatus.activityOneScore = score;
        scoreStatus.activityOneTime = m + ':' + sec;
        scoreStatus.activityOne = 'Stage One';
        scoreStatus.name = inputStatus.name;
        scoreStatus.age = inputStatus.age;
        scoreStatus.gender = inputStatus.gender;
        pos = 0;
        score = 0;
        scores = '';
        m = 1;
        sec = 0;
        startStageOneActivityTwo();
        return false;
    }
    imageDisplayPanel.style.textAlign = 'center';
    imageDisplayPanel.innerHTML = "<img src='" + stageOneOne[pos][0] + "' width=400 height=250 style='border:1px groove #000000; box-shadow:4px 4px 4px #000000'>";
    imageDisplayPanel.innerHTML += "<img src='" + stageOneOne[pos][1] + "' width=400 height=250 style='border:1px groove #000000; box-shadow:4px 4px 4px #000000'>";
    imageDisplayPanel.innerHTML += "<img src='" + stageOneOne[pos][2] + "' width=400 height=250 style='border:1px groove #000000; box-shadow:4px 4px 4px #000000'>";
    imageDisplayPanel.innerHTML += "<img src='" + stageOneOne[pos][3] + "' width=400 height=250 style='border:1px groove #000000; box-shadow:4px 4px 4px #000000'>";
    answerPanel.style.textAlign = 'center';
    answerPanel.innerHTML = "Enter Your Answer in the Box Below: <br> <input type='text' name='answer' id='stageoneactivityone'  value='' placeholder='click here to start typing' style='width:70%'><br/>";
    answerPanel.innerHTML += "<button onclick='checkActivityOneStageOneAnswer()' class='btn btn-primary' id='btnst'>Submit & Save Answer</button>";
}

const checkActivityOneStageOneAnswer = () => {
    let checkAnswer = document.getElementById("stageoneactivityone");
    let answer = checkAnswer.value.toLowerCase();
    if (answer == stageOneOne[pos][4]) {
        score += 2;
    }
    pos++;
    stageOneActicityOne();

}
function quizCountActivityOne() {
    sec = sec - 1;
    q = setTimeout("quizCountActivityOne()", 1000)
    if (sec < 0) {
        m = m - 1; sec = 59;
    }
    else if (m <= 0 && sec <= 0) {
        clearTimeout(q);
        quizStopActivityOne();
    }
}

function quizStopActivityOne() {
    excelData.push(['Stage One', 'activity one', score, 7, m, sec]);
    scoreStatus.activityOneScore = score;
    scoreStatus.activityOneTime = m + ':' + sec;
    scoreStatus.activityOne = 'Stage one';
    scoreStatus.name = inputStatus.name;
    scoreStatus.age = inputStatus.age;
    scoreStatus.gender = inputStatus.gender;
    pos = 0;
    score = 0;
    scores = '';
    m = 1;
    sec = 0;
    startStageOneActivityTwo();
    return false;
}
//======================================   
// activity two of stage one.
//===========================================

function stageOneQuestionDisplay() {
    let questnum = document.getElementById("question");
    let test = document.getElementById("option");
    let btn = document.querySelector('#btnst');

    if (pos >= stageOne.length) {
        clearTimeout(q);
        excelData.push(['Stage One', 'activity Two', score, 7, m, sec])
        scoreStatus.activityTwoScore = score;
        scoreStatus.activityTwoTime = m + ':' + sec;
        scoreStatus.activityTwo = 'Stage one';
        scoreStatus.name = inputStatus.name;
        scoreStatus.age = inputStatus.age;
        scoreStatus.gender = inputStatus.gender;
        pos = 0;
        score = "";
        m = 1;
        sec = 0;
        startStageTwoActivity();
        return false;
    }
    console.log(scoreStatus);
    questnum.innerHTML = "Question " + (pos + 1) + " of " + stageOne.length;
    let chA = stageOne[pos][0];
    let chB = stageOne[pos][1];
    let chC = stageOne[pos][2];
    let chD = stageOne[pos][3];
    test.innerHTML = " A) <input type='radio' name='choices' id='AA' value=''>" + chA + "<br/>";
    test.innerHTML += " B) <input type='radio' name='choices' id='BB' value=''>" + chB + "<br/>";
    test.innerHTML += " C) <input type='radio' name='choices'  id='CC' value=''>" + chC + "<br/>";
    test.innerHTML += " D) <input type='radio' name='choices'  id='DD' value=''>" + chD + "<br/>";
    test.innerHTML += "<button onclick='checkAnswer()' class='btn btn-primary' id='btnst'>Submit & Save Answer</button>";
    document.getElementById('AA').value = chA;
    document.getElementById('BB').value = chB;
    document.getElementById('CC').value = chC;
    document.getElementById('DD').value = chD;
}



//this checks if the answer is correct.

function checkAnswer() {
    let choices = document.getElementsByName("choices");
    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
            choice3 = choices[i].value;
        }
    }
    if (choice3 == stageOne[pos][4]) {
        score += 2;
    }
    pos++;
    stageOneQuestionDisplay()

};

function quizCount() {
    sec = sec - 1;
    q = setTimeout("quizCount()", 1000)
    if (sec < 0) {
        m = m - 1; sec = 59;
    }
    else if (m <= 0 && sec <= 0) {
        clearTimeout(q);
        quizStop();
    }
};
function quizStop() {
    excelData.push(['Stage One', 'activity Two', score, 7, m, sec])
    scoreStatus.activityTwoScore = score;
    scoreStatus.activityTwoTime = m + ':' + sec;
    scoreStatus.activityTwo = 'Stage one';
    scoreStatus.name = inputStatus.name;
    scoreStatus.age = inputStatus.age;
    scoreStatus.gender = inputStatus.gender;
    pos = 0;
    score = 0;
    scores = '';
    m = 1;
    sec = 0;
    startStageTwoActivity();
    return false;
};

const hideInstruction = () => {
    const instructionElement = document.querySelector('#instruction');
    const getQuestions = document.querySelector('#quest');
    if (instructionElement.style.display = 'block') {
        instructionElement.style.display = 'none';
        getQuestions.style.display = 'block';
    }
};

//===================================================================
//                     stage two activity
//===================================================================

const stageTwoActivity = () => {
    let stageTwoQuest = document.getElementById("question");
    let textArea = document.getElementById("word");
    let stageTwoAnswer = document.getElementById("option");
    stageTwoQuest.innerHTML = "<span><img src= 'img/wide beast.jpg' width=400 height=300> </span> <span><img src='img/lion.jpg' width=400 height=300> </span><br>the riddle description";
    textArea.innerHTML = "<textarea rows='10' cols='60' placeholder='Type Your answer here' id='stageTwoAns'></textarea>";
    stageTwoAnswer.innerHTML = "<button onclick='saveAnswerStageTwo()' class='btn btn-primary' id='btnst'>Submit & Save Answer</button>";
    textArea.style.textAlign = 'center';
}


const saveAnswerStageTwo = () => {
    clearTimeout(q);
    let stageTwoAns = document.getElementById('stageTwoAns').value;
    excelData.push(['Stage Two', 'one activity', stageTwoAns, 7, m, sec])
    scoreStatus.stageTwoAnswer = stageTwoAns;
    scoreStatus.stageTwoTime = m + ':' + sec;
    scoreStatus.stage = 'Stage two ';
    scores = stageTwoAns;
    m = 1;
    sec = 0;
    scores = '';
    startStageThreeActivityOne();
    document.getElementById('quest').focus();
}

function quizCountStageTwo() {
    sec = sec - 1;
    q = setTimeout("quizCountStageTwo()", 1000)
    if (sec < 0) {
        m = m - 1; sec = 59;
    }
    else if (m <= 0 && sec <= 0) {
        clearTimeout(q);
        quizStopStageTwo();
    }
};
function quizStopStageTwo() {
    scores = document.getElementById('stageTwoAns').value;
    excelData.push(['Stage Two', 'one activity', scores, 7, m, sec])
    scoreStatus.stageTwoAnswer = scores;
    scoreStatus.stageTwoTime = m + ':' + sec;
    scoreStatus.stage = 'Stage two ';
    scoreStatus.name = inputStatus.name;
    scoreStatus.age = inputStatus.age;
    scoreStatus.gender = inputStatus.gender;
    pos = 0;
    m = 1;
    scores = "";
    sec = 0;
    startStageThreeActivityOne();
    return false;
};

//===========================================================================
//                   activity one of STAGE THREE code
//==============================================================================


function stageThreeActivityOneQuestionDisplay() {
    document.getElementById('activity').focus();
    let questnum = document.getElementById("question");
    let wordToUse = document.getElementById("word");
    let textArea = document.getElementById("option");
    questnum.innerHTML = stageThreeActivityOne[pos][0];
    wordToUse.innerHTML = "<textarea rows='10' cols='50' placeholder='Click here to start typing your answer: Number your answers and separate each answer with comma. Eg. 1 food, 2 dance' id='stageThreeAns'></textarea>";
    textArea.innerHTML = "<button onclick='saveAnswerActivityOneStageThree()' class='btn btn-primary' id='btnst'>Submit & Save Answer</button>";
    wordToUse.style.textAlign = 'center';

}



//this checks if the answer is correct.

function saveAnswerActivityOneStageThree() {
    let ans = document.getElementById("stageThreeAns").value;
    answer += ans;
    pos++;
    if (pos >= stageThreeActivityOne.length) {
        clearTimeout(q);
        excelData.push(['Stage Three', 'activity one', answer, 7, m, sec])
        scoreStatus.stageThreeActivityOneAnwser = answer;
        scoreStatus.stageThreeActivityOneTime = m + ':' + sec;
        scoreStatus.stage = 'Stage three';
        scoreStatus.name = inputStatus.name;
        scoreStatus.age = inputStatus.age;
        scoreStatus.gender = inputStatus.gender;
        pos = 0;
        m = 1;
        sec = 0;
        scores = '';
        startStageThreeActivityTwo();
        document.getElementById('quest').focus();
        return false;
    } else {
        stageThreeActivityOneQuestionDisplay();
    }
}

function quizCountStageThree() {
    sec = sec - 1;
    q = setTimeout("quizCountStageThree()", 1000)
    if (sec < 0) {
        m = m - 1; sec = 59;
    }
    else if (m <= 0 && sec <= 0) {
        clearTimeout(q);
        quizStopStageThree();
    }
}
function quizStopStageThree() {
    scores = document.getElementById("stageThreeAns").value;
    answer += scores;
    excelData.push(['Stage Three', 'activity one', answer, 7, m, sec])
    scoreStatus.stageThreeActivityOneAnwser = answer;
    scoreStatus.stageThreeActivityOneTime = m + ':' + sec;
    scoreStatus.stage = 'Stage three';
    scoreStatus.name = inputStatus.name;
    scoreStatus.age = inputStatus.age;
    scoreStatus.gender = inputStatus.gender;
    pos = 0;
    m = 1;
    scores = '';
    sec = 0;

    startStageThreeActivityTwo();
    return false;
}


//===============================================================================
//            ACtivity two of Stage Three
//===================================================================================


function stageThreeActivityTwoQuestionDisplay() {
    let questnum = document.getElementById("question");
    let wordToUse = document.getElementById("word");
    let textArea = document.getElementById("option");
    questnum.innerHTML = stageThreeActivityTwo[pos][0];
    questnum.style.color = 'blue';
    wordToUse.innerHTML = "<textarea rows='10' cols='50' placeholder='Type Your answer here' id='stageThreeActivityTwoAns'></textarea>";
    textArea.innerHTML = "<button onclick='saveAnswerActivityTwoStageThree()' class='btn btn-primary' id='btnst'>Submit & Save Answer</button>";
    wordToUse.style.textAlign = 'center';

}



//this checks if the answer is correct.

function saveAnswerActivityTwoStageThree() {
    let ansTwo = document.getElementById("stageThreeActivityTwoAns").value;
    answer2 += ansTwo;
    pos++;
    if (pos >= stageThreeActivityTwo.length) {
        clearTimeout(q);
        excelData.push(['Stage Three', 'activity Two', answer2, 7, m, sec])
        scoreStatus.stageThreeActivityTwoAnwser = answer2;
        scoreStatus.stageThreeActivityTwoTime = m + ':' + sec;
        scoreStatus.stage = 'Stage three Activity Two';
        scoreStatus.name = inputStatus.name;
        scoreStatus.age = inputStatus.age;
        scoreStatus.gender = inputStatus.gender;
        pos = 0;
        scores = '';
        m = 1;
        sec = 0;
        startStageFour();
        return false;
    } else {
        stageThreeActivityTwoQuestionDisplay();
    }
}

function quizCountStageThreeActivityTwo() {
    sec = sec - 1;
    q = setTimeout("quizCountStageThreeActivityTwo()", 1000)
    if (sec < 0) {
        m = m - 1; sec = 59;
    }
    else if (m <= 0 && sec <= 0) {
        clearTimeout(q);
        quizStopStageThreeActivityTwo();
    }
}
function quizStopStageThreeActivityTwo() {
    scores = document.getElementById("stageThreeActivityTwoAns").value;
    answer2 += scores;
    excelData.push(['Stage Three', 'activity Two', answer2, 7, m, sec])
    scoreStatus.stageThreeActivityTwoAnwser = answer2;
    scoreStatus.stageThreeActivityTwoTime = m + ':' + sec;
    scoreStatus.stage = 'Stage three Activity Two';
    scoreStatus.name = inputStatus.name;
    scoreStatus.age = inputStatus.age;
    scoreStatus.gender = inputStatus.gender;
    pos = 0;
    scores = '';
    m = 1;
    sec = 0;
    startStageFour();
    return false;
}



//========================================================================================
//              Stage Four Activity
//============================================================================================

const stageFourActivity = () => {
    let faceImageDisplay = document.getElementById("question");
    let stage4AnswerPanel = document.getElementById("word");
    let buttonAns = document.getElementById("option");
    faceImageDisplay.style.textAlign = 'center';
    faceImageDisplay.innerHTML = "<img src='img/faceimage.png' width=600 height=500 style='border:1px groove #000000; box-shadow:4px 4px 4px #000000'>";
    stage4AnswerPanel.style.textAlign = 'center';
    stage4AnswerPanel.innerHTML = "Enter Your Answer in the Box Below: <br> <input type='number' name='answer' id='stageFourAns'  value='' placeholder='click to type only numbers eg:30' style='width:70%'><br/>";
    buttonAns.innerHTML = "<button onclick='saveStageFourAnswer()' class='btn btn-primary' id='btnst'>Submit & Save Answer</button>";

};

const saveStageFourAnswer = () => {
    clearTimeout(q);
    let numberOfFace = document.getElementById('stageFourAns').value;
    excelData.push(['Stage Four', 'one activity', numberOfFace, 7, m, sec])
    scoreStatus.numberOfFaceCounted = numberOfFace;
    scoreStatus.stageFourTime = m + ':' + sec;
    scoreStatus.stage = 'Stage Four ';
    m = 1;
    sec = 0;
    score = 0;
    scores = '';
    starteStageFive();
};


function quizCountStageFourActivity() {
    sec = sec - 1;
    q = setTimeout("quizCountStageFourActivity()", 1000)
    if (sec < 0) {
        m = m - 1; sec = 59;
    }
    else if (m <= 0 && sec <= 0) {
        clearTimeout(q);
        quizStopStageFourActivity();
    }
}
function quizStopStageFourActivity() {
    score = document.getElementById("stageFourAns").value;
    excelData.push(['Stage Four', 'one activity', score, 7, m, sec])
    scoreStatus.numberOfFaceCounted = score;
    scoreStatus.stageFourTime = m + ':' + sec;
    scoreStatus.stage = 'Stage Four';
    scoreStatus.name = inputStatus.name;
    scoreStatus.age = inputStatus.age;
    scoreStatus.gender = inputStatus.gender;
    pos = 0;
    scores = '';
    m = 1;
    sec = 0;
    starteStageFive();
    return false;
}




//===========================================================================================
// Activity five 
//===========================================================================================

const stageFiveActivityDisplay = () => {
    let arrowQuest = document.getElementById("question");
    let yourAnswer = document.getElementById("word");
    let stageFiveQuest = document.getElementById("stageFive");
    let lastBtn = document.getElementById("option");

    if (pos >= stageFiveActivity.length) {
        clearTimeout(q);
        excelData.push(['Stage Five', 'one activity', score, 7, m, sec])
        scoreStatus.activityFiveScore = score;
        scoreStatus.activityFiveTime = m + ':' + sec;
        scoreStatus.activity = 'Stage Five';
        scoreStatus.name = inputStatus.name;
        scoreStatus.age = inputStatus.age;
        scoreStatus.gender = inputStatus.gender;
        pos = 0;
        score = "";
        m = 1;
        sec = 0;
        activityCompleted();
        return false;
    }
    arrowQuest.style.textAlign = 'center';
    arrowQuest.innerHTML = "Question " + (pos + 1) + " of " + stageFiveActivity.length;
    stageFiveQuest.innerHTML = stageFiveActivity[pos][0] + " <img src='img/arrow.png' width=100 height=20>" + stageFiveActivity[pos][1] + "<br>";
    stageFiveQuest.innerHTML += stageFiveActivity[pos][2] + " <img src='img/arrow.png' width=100 height=20>";
    stageFiveQuest.style.textAlign = 'center';
    yourAnswer.style.textAlign = 'center';
    yourAnswer.style.marginTop = '30px';
    yourAnswer.innerHTML = "Enter Your Answer in the Box Below: <br> <input type='text' name='answer' id='stageFiveAns'  value='' placeholder='click to type in your answer' style='width:70%'><br/>";
    lastBtn.innerHTML = "<button onclick='checkStageFiveAnswer()' class='btn btn-primary' id='btnst'>Submit & Save Answer</button>";

};

const checkStageFiveAnswer = () => {
    let answerStageFive = document.getElementById('stageFiveAns').value;
    if (answerStageFive.toLowerCase() == stageFiveActivity[pos][3]) {
        score += 2;
    }
    pos++;
    stageFiveActivityDisplay();

};


function quizCountStageFiveActivity() {
    sec = sec - 1;
    q = setTimeout("quizCountStageFiveActivity()", 1000)
    if (sec < 0) {
        m = m - 1; sec = 59;
    }
    else if (m <= 0 && sec <= 0) {
        clearTimeout(q);
        quizStopStageFiveActivity();
    }
}
function quizStopStageFiveActivity() {
    excelData.push(['Stage Five', 'one activity', score, 7, m, sec])
    scoreStatus.activityFiveScore = score;
    scoreStatus.activityFiveTime = m + ':' + sec;
    scoreStatus.activity = 'Stage Five';
    scoreStatus.name = inputStatus.name;
    scoreStatus.age = inputStatus.age;
    scoreStatus.gender = inputStatus.gender;
    pos = 0;
    scores = '';
    m = 1;
    sec = 0;
    activityCompleted();
    return false;
}

//===================================================================
//activityone stage one start function 
//======================================================
const startStageOneActivityOne = () => {
    hideInstruction();
    activityInstructionOne();
    stageOneActicityOne();
    quizCountActivityOne();

}

const startStageOneActivityTwo = () => {
    hideInstruction();
    activityInstructionTwo();
    stageOneQuestionDisplay();
    quizCount();
}

const startStageTwoActivity = () => {
    hideInstruction();
    stageTwoActivityInstruction();
    stageTwoActivity();
    quizCountStageTwo();
}

const startStageThreeActivityOne = () => {
    hideInstruction();
    stageThreeActivityOneInstruction();
    document.getElementById('myfocus').focus();
    stageThreeActivityOneQuestionDisplay();
    quizCountStageThree();

}

const startStageThreeActivityTwo = () => {
    hideInstruction();
    stageThreeActivityTwoInstruction();
    stageThreeActivityTwoQuestionDisplay();
    quizCountStageThreeActivityTwo();

}
const startStageFour = () => {
    hideInstruction();
    stageFourActivityInstruction();
    stageFourActivity();
    quizCountStageFourActivity();

}
const starteStageFive = () => {
    hideInstruction();
    stageFiveActivityInstruction();
    stageFiveActivityDisplay();
    quizCountStageFiveActivity();

}
const activityCompleted = () => {
    hideInstruction();
    testEnd();
    saveInExcel();
}

const saveInExcel = () => {
    var wb = XLSX.utils.book_new();
    wb.Props = {
        Title: "Problem solving test",
        Subject: "Exam",
        Author: "Obinna Jude",
        CreatedDate: new Date(2017, 12, 19)
    };

    wb.SheetNames.push("Test Sheet");
    var ws_data = excelData;
    var ws = XLSX.utils.aoa_to_sheet(ws_data);
    wb.Sheets["Test Sheet"] = ws;
    var wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });
    function s2ab(s) {

        var buf = new ArrayBuffer(s.length);
        var view = new Uint8Array(buf);
        for (var i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
        return buf;

    }

    saveAs(new Blob([s2ab(wbout)], { type: "application/octet-stream" }), 'problemsolvingtest.xlsx');
    
    $("#button-a").click(function(){
        saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), 'pstresultadmin.xlsx');
});
}