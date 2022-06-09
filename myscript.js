const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

/********Left********/
left.addEventListener('mouseenter', () => {
    container.classList.add('hover-left')
});

left.addEventListener('mouseleave', () => {
    container.classList.remove('hover-left')
});

/********Right********/
right.addEventListener('mouseenter', () => {
    container.classList.add('hover-right')
});

right.addEventListener('mouseleave', () => {
    container.classList.remove('hover-right')
});

//Timer
var feedback = 0;
var timer;
var c = 120;
var currentPage=0;

function start() {
    feedback = "Timer Running!"
    clearInterval(timer)
    timer = setInterval(() => {
        updateUi()
    }, 1000);
}
function pause() {
    feedback = "Timer Paused!"
    clearInterval(timer)
    updateUi()
}
function stop() {
    clearInterval(timer)
    c = 121;
    feedback = "Timer Stopped"
    updateUi()
}
function updateUi() {
    document.getElementById("seconds").innerHTML = --c;
    if (c == 0) {
        stop();
        alert("Time Out")
        feedback = "Time Out!"
    }
    document.getElementById("feedback").innerHTML = feedback;
}

function option1() {
    document.getElementById("Option1").style.backgroundImage="url(green.png)";
    if(currentPage == 0) document.getElementById("Option1").innerHTML = "Answer1 [Score:30]";
    if(currentPage == 1) document.getElementById("Option1").innerHTML = "Work [Score : 27]";
    if(currentPage == 2) document.getElementById("Option1").innerHTML = "Yourself [Score : 33]";
    if(currentPage == 3) document.getElementById("Option1").innerHTML = "Exercise [Score : 36]";
    if(currentPage == 4) document.getElementById("Option1").innerHTML = "Police car [Score : 44]";
    if(currentPage == 5) document.getElementById("Option1").innerHTML = "Water/Toilet/Tap [Score : 37]";
    if(currentPage == 6) document.getElementById("Option1").innerHTML = "Keys [Score : 30]";
    if(currentPage == 7) document.getElementById("Option1").innerHTML = "Friend [Score : 20]";
    if(currentPage == 8) document.getElementById("Option1").innerHTML = "Open Eyes [Score : 24]";
    if(currentPage == 9) document.getElementById("Option1").innerHTML = "Harry Potter [Score : 37]";
    if(currentPage == 10) document.getElementById("Option1").innerHTML = "Mansion/House [Score : 25]";
}
function option2() {
    document.getElementById("Option2").style.backgroundImage="url(green.png)";
    if(currentPage == 0) document.getElementById("Option2").innerHTML = "Answer2 [Score:25]";
    if(currentPage == 1) document.getElementById("Option2").innerHTML = "School [Score : 25]";
    if(currentPage == 2) document.getElementById("Option2").innerHTML = "Food [Score : 31]";
    if(currentPage == 3) document.getElementById("Option2").innerHTML = "Catch Bus/Train [Score : 26]";
    if(currentPage == 4) document.getElementById("Option2").innerHTML = "Firetruck [Score : 16]";
    if(currentPage == 5) document.getElementById("Option2").innerHTML = "A Computer Program [Score : 24]";
    if(currentPage == 6) document.getElementById("Option2").innerHTML = "Documents [Score : 25]";
    if(currentPage == 7) document.getElementById("Option2").innerHTML = "Siri/Google/Apps [Score : 19]";
    if(currentPage == 8) document.getElementById("Option2").innerHTML = "Bathroom [Score : 19]";
    if(currentPage == 9) document.getElementById("Option2").innerHTML = "Doctor Strange [Score : 26]";
    if(currentPage == 10) document.getElementById("Option2").innerHTML = "Vacations/Trips [Score : 23]";
}
function option3() {
    document.getElementById("Option3").style.backgroundImage="url(green.png)";
    if(currentPage == 0) document.getElementById("Option3").innerHTML = "Answer2 [Score:20]";
    if(currentPage == 1) document.getElementById("Option3").innerHTML = "Excercise [Score : 14]";
    if(currentPage == 2) document.getElementById("Option3").innerHTML = "Date/More Guests [Score : 19]";
    if(currentPage == 3) document.getElementById("Option3").innerHTML = "Escape/Being Chased [Score : 13]";
    if(currentPage == 4) document.getElementById("Option3").innerHTML = "Ambulance [Score : 15]";
    if(currentPage == 5) document.getElementById("Option3").innerHTML = "Engine/Vehicle [Score : 10]";
    if(currentPage == 6) document.getElementById("Option3").innerHTML = "Jewellery [Score : 20]";
    if(currentPage == 7) document.getElementById("Option3").innerHTML = "Gas Station Employee [Score : 16]";
    if(currentPage == 8) document.getElementById("Option3").innerHTML = "Turn Off Alarm/Snooze [Score : 18]";
    if(currentPage == 9) document.getElementById("Option3").innerHTML = "Merlin [Score : 11]";
    if(currentPage == 10) document.getElementById("Option3").innerHTML = "Pay Off Debts [Score : 20]";
}
function option4() {
    document.getElementById("Option4").style.backgroundImage="url(green.png)";
    if(currentPage == 0) document.getElementById("Option4").innerHTML = "Answer2 [Score:15]";
    if(currentPage == 1) document.getElementById("Option4").innerHTML = "Catch Bus/Train [Score : 13]";
    if(currentPage == 2) document.getElementById("Option4").innerHTML = "Gifts [Score : 5]";
    if(currentPage == 3) document.getElementById("Option4").innerHTML = "Get Somewhere [Score : 9]";
    if(currentPage == 4) document.getElementById("Option4").innerHTML = "Train [Score : 10]";
    if(currentPage == 5) document.getElementById("Option4").innerHTML = "Refrigerator [Score : 8]";
    if(currentPage == 6) document.getElementById("Option4").innerHTML = "Spectacles [Score : 15]";
    if(currentPage == 7) document.getElementById("Option4").innerHTML = "Store/Shop Owner [Score : 14]";
    if(currentPage == 8) document.getElementById("Option4").innerHTML = "Breakfast [Score : 15]";
    if(currentPage == 9) document.getElementById("Option4").innerHTML = "Gandalf [Score : 9]";
    if(currentPage == 10) document.getElementById("Option4").innerHTML = "Cars [Score : 19]";
}
function option5() {
    document.getElementById("Option5").style.backgroundImage="url(green.png)";
    if(currentPage == 0) document.getElementById("Option5").innerHTML = "Answer2 [Score:10]";
    if(currentPage == 1) document.getElementById("Option5").innerHTML = "Flight [Score : 9]";
    if(currentPage == 2) document.getElementById("Option5").innerHTML = "Drinks/Alcohol [Score : 4]";
    if(currentPage == 3) document.getElementById("Option5").innerHTML = "Catch Other Person [Score : 6]";
    if(currentPage == 4) document.getElementById("Option5").innerHTML = "Fuel Tanker Truck [Score : 6]";
    if(currentPage == 5) document.getElementById("Option5").innerHTML = "Nose [Score : 8]";
    if(currentPage == 6) document.getElementById("Option5").innerHTML = "Phone [Score : 10]";
    if(currentPage == 7) document.getElementById("Option5").innerHTML = "Stranger/Pedestrian [Score : 10]";
    if(currentPage == 8) document.getElementById("Option5").innerHTML = "Brush Teeth [Score : 12]";
    if(currentPage == 9) document.getElementById("Option5").innerHTML = "Albus Dumbledore [Score : 8]";
    if(currentPage == 10) document.getElementById("Option5").innerHTML = "Education/Higher Studies [Score : 10]";
}
function option6() {
    document.getElementById("Option6").style.backgroundImage="url(green.png)";
    if(currentPage == 0) document.getElementById("Option6").innerHTML = "Answer2 [Score:5]";
    if(currentPage == 1) document.getElementById("Option6").innerHTML = "Drop off kids [Score : 4]";
    if(currentPage == 2) document.getElementById("Option6").innerHTML = "Party Games [Score : 4]";
    if(currentPage == 3) document.getElementById("Option6").innerHTML = "Sport/Game [Score : 5]";
    if(currentPage == 4) document.getElementById("Option6").innerHTML = "School Bus [Score : 4]";
    if(currentPage == 5) document.getElementById("Option6").innerHTML = "Clock [Score : 3]";
    if(currentPage == 6) document.getElementById("Option6").innerHTML = "Remote [Score : 5]";
    if(currentPage == 7) document.getElementById("Option6").innerHTML = "Parent/Relatives [Score : 9]";
    if(currentPage == 8) document.getElementById("Option6").innerHTML = "Shower [Score : 9]";
    if(currentPage == 9) document.getElementById("Option6").innerHTML = "Voldemort [Score : 5]";
    if(currentPage == 10) document.getElementById("Option6").innerHTML = "Start a company [Score : 3]";
}

function page1(){
    restoreBackground();
    currentPage=1;
    document.getElementById("page1").style.backgroundColor='green';
    document.getElementById("page1").style.color='green';
    document.getElementById("ques").innerHTML = "Question - 1";
    document.getElementById("FullQuestion").innerHTML="Name something you have to do that would give you a reason to set an alarm.";
    document.getElementById("Option1").innerHTML = "Option 1";
    document.getElementById("Option2").innerHTML = "Option 2";
    document.getElementById("Option3").innerHTML = "Option 3";
    document.getElementById("Option4").innerHTML = "Option 4";
    document.getElementById("Option5").innerHTML = "Option 5";
    document.getElementById("Option6").innerHTML = "Option 6";

}function page2(){
    restoreBackground();
    currentPage=2;
    document.getElementById("page2").style.backgroundColor='green';
    document.getElementById("page2").style.color='green';
    document.getElementById("ques").innerHTML = "Question - 2";
    document.getElementById("FullQuestion").innerHTML="Name something you might be asked to bring to a friend's party.";
    document.getElementById("Option1").innerHTML = "Option 1";
    document.getElementById("Option2").innerHTML = "Option 2";
    document.getElementById("Option3").innerHTML = "Option 3";
    document.getElementById("Option4").innerHTML = "Option 4";
    document.getElementById("Option5").innerHTML = "Option 5";
    document.getElementById("Option6").innerHTML = "Option 6";

}function page3(){
    restoreBackground();
    currentPage=3;
    document.getElementById("page3").style.backgroundColor='green';
    document.getElementById("page3").style.color='green';
    document.getElementById("ques").innerHTML = "Question - 3";
    document.getElementById("FullQuestion").innerHTML="Name a reason a person might be running.";
    document.getElementById("Option1").innerHTML = "Option 1";
    document.getElementById("Option2").innerHTML = "Option 2";
    document.getElementById("Option3").innerHTML = "Option 3";
    document.getElementById("Option4").innerHTML = "Option 4";
    document.getElementById("Option5").innerHTML = "Option 5";
    document.getElementById("Option6").innerHTML = "Option 6";

}function page4(){
    restoreBackground();
    currentPage=4;
    document.getElementById("page4").style.backgroundColor='green';
    document.getElementById("page4").style.color='green';
    document.getElementById("ques").innerHTML = "Question - 4";
    document.getElementById("FullQuestion").innerHTML="Name a type of vehicle you really wouldn't want to hit while driving.";
    document.getElementById("Option1").innerHTML = "Option 1";
    document.getElementById("Option2").innerHTML = "Option 2";
    document.getElementById("Option3").innerHTML = "Option 3";
    document.getElementById("Option4").innerHTML = "Option 4";
    document.getElementById("Option5").innerHTML = "Option 5";
    document.getElementById("Option6").innerHTML = "Option 6";

}function page5(){
    restoreBackground();
    currentPage=5;
    document.getElementById("page5").style.backgroundColor='green';
    document.getElementById("page5").style.color='green';
    document.getElementById("ques").innerHTML = "Question - 5";
    document.getElementById("FullQuestion").innerHTML="Other than feet, Name something that runs.";
    document.getElementById("Option1").innerHTML = "Option 1";
    document.getElementById("Option2").innerHTML = "Option 2";
    document.getElementById("Option3").innerHTML = "Option 3";
    document.getElementById("Option4").innerHTML = "Option 4";
    document.getElementById("Option5").innerHTML = "Option 5";
    document.getElementById("Option6").innerHTML = "Option 6";

}function page6(){
    restoreBackground();
    currentPage=6;
    document.getElementById("page6").style.backgroundColor='green';
    document.getElementById("page6").style.color='green';
    document.getElementById("ques").innerHTML = "Question - 6";
    document.getElementById("FullQuestion").innerHTML="Name something people tend to misplace.";
    document.getElementById("Option1").innerHTML = "Option 1";
    document.getElementById("Option2").innerHTML = "Option 2";
    document.getElementById("Option3").innerHTML = "Option 3";
    document.getElementById("Option4").innerHTML = "Option 4";
    document.getElementById("Option5").innerHTML = "Option 5";
    document.getElementById("Option6").innerHTML = "Option 6";

}function page7(){
    restoreBackground();
    currentPage=7;
    document.getElementById("page7").style.backgroundColor='green';
    document.getElementById("page7").style.color='green';
    document.getElementById("ques").innerHTML = "Question - 7";
    document.getElementById("FullQuestion").innerHTML="Name someone you might ask for directions.";
    document.getElementById("Option1").innerHTML = "Option 1";
    document.getElementById("Option2").innerHTML = "Option 2";
    document.getElementById("Option3").innerHTML = "Option 3";
    document.getElementById("Option4").innerHTML = "Option 4";
    document.getElementById("Option5").innerHTML = "Option 5";
    document.getElementById("Option6").innerHTML = "Option 6";

}function page8(){
    restoreBackground();
    currentPage=8;
    document.getElementById("page8").style.backgroundColor='green';
    document.getElementById("page8").style.color='green';
    document.getElementById("ques").innerHTML = "Question - 8";
    document.getElementById("FullQuestion").innerHTML="Name first thing most people do in the morning?";
    document.getElementById("Option1").innerHTML = "Option 1";
    document.getElementById("Option2").innerHTML = "Option 2";
    document.getElementById("Option3").innerHTML = "Option 3";
    document.getElementById("Option4").innerHTML = "Option 4";
    document.getElementById("Option5").innerHTML = "Option 5";
    document.getElementById("Option6").innerHTML = "Option 6";

}function page9(){
    restoreBackground();
    currentPage=9;
    document.getElementById("page9").style.backgroundColor='green';
    document.getElementById("page9").style.color='green';
    document.getElementById("ques").innerHTML = "Question - 9";
    document.getElementById("FullQuestion").innerHTML="Name a famous wizard from Movies/TV Series.";
    document.getElementById("Option1").innerHTML = "Option 1";
    document.getElementById("Option2").innerHTML = "Option 2";
    document.getElementById("Option3").innerHTML = "Option 3";
    document.getElementById("Option4").innerHTML = "Option 4";
    document.getElementById("Option5").innerHTML = "Option 5";
    document.getElementById("Option6").innerHTML = "Option 6";

}function page10(){
    restoreBackground();
    currentPage=10;
    document.getElementById("page10").style.backgroundColor='green';
    document.getElementById("page10").style.color='green';
    document.getElementById("ques").innerHTML = "Question - 10";
    document.getElementById("FullQuestion").innerHTML="Name things people like to spend lottery winnings on.";
    document.getElementById("Option1").innerHTML = "Option 1";
    document.getElementById("Option2").innerHTML = "Option 2";
    document.getElementById("Option3").innerHTML = "Option 3";
    document.getElementById("Option4").innerHTML = "Option 4";
    document.getElementById("Option5").innerHTML = "Option 5";
    document.getElementById("Option6").innerHTML = "Option 6";

}

function restoreBackground(){
    document.getElementById("Option1").style.backgroundImage="url(gradient.png)";
    document.getElementById("Option2").style.backgroundImage="url(gradient.png)";
    document.getElementById("Option3").style.backgroundImage="url(gradient.png)";
    document.getElementById("Option4").style.backgroundImage="url(gradient.png)";
    document.getElementById("Option5").style.backgroundImage="url(gradient.png)";
    document.getElementById("Option6").style.backgroundImage="url(gradient.png)";
    
}