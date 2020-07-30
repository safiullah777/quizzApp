var questions=["Inside which HTML element do we put the JavaScript?",'which one is post increment for i?','How do you write "Hello World" in an alert box?',"How do you create a function in JavaScript?",'How do you call a function named "myFunction"?'
,"How to write an IF statement in JavaScript?","Which built-in method combines the text of two strings and returns a new string?",
"Which built-in method returns the calling string value converted to upper case?",
"Which of the following function of String object extracts a section of a string and returns a new string?",
"Which of the following function of Array object removes the last element from an array and returns that element?"
];

var name=prompt("enter your name");
var i=0;
var index=0;
var selected=false;
var score=0;
var answers=[
    {
        option1:`javascript`,
        option2:"script",
        option3:"js",
        option4:"scripting",
        answer:"script"
    },
    {
        option1:"++i",
        option2:"i+1",
        option3:"i++",
        option4:"i--",
        answer:"i++"

    },
    {
        option1:'alertBox("Hello World")',
        option2:'alert("Hello World")',
        option3:'msg("Hello World")',
        option4:'Alert("Hello World")',
        answer:'alert("Hello World")'


    },
    {
        option1:"function=myFunction()",
        option2:"function myFunction()",
        option3:"function:myFunction()",
        option4:"function{}",
        answer:"function myFunction()"
    },
    {
        option1:"call myFunction()",
        option2:"Calling myFunction()",
        option3:"myFunction()",
        option4:"myFunction",
        answer:"myFunction()"

    },
    {
        option1:"if i=5 then",
        option2:"if i=5",
        option3:"if i==5 then ",
        option4:"if(i==5)",
        answer:"if(i==5)"

    },
    {
        option1:"append()",
        option2:"concat()",
        option3:"attach()",
        option4:"map()",
        answer:"concat()"

    },
    {
        option1:"toUpperCase()",
        option2:"Upper()",
        option3:"touppercase()",
        option4:"changeCase()",
        answer:"toUpperCase()"

    },
    {
        option1:"split()",
        option2:"join()",
        option3:"cut()",
        option4:"slice()",
        answer:"slice()"

    },
    {
        option1:"pop()",
        option2:"push()",
        option3:"unshift()",
        option4:"shift()",
        answer:"pop()"

    }
    


];
var random=Math.random()-0.5;
questions.sort(()=>{return  random});

answers.sort(()=>{return  random});

var front=document.getElementById('front');



var heading=document.getElementById("heading");
var getQuestion=document.getElementById('question');
getQuestion.innerHTML=questions[0];
var btn1=document.getElementById('btn1');
var btn2=document.getElementById('btn2');
var btn3=document.getElementById('btn3');
var btn4=document.getElementById('btn4');
btn1.innerHTML=answers[0].option1;
btn2.innerHTML=answers[0].option2;
btn3.innerHTML=answers[0].option3;
btn4.innerHTML=answers[0].option4;

if(name.length==0){
    alert("please enter your name,please reload the window and enter your name ");
    document.getElementById('main').innerHTML="";
}
else{
function next(){
    if(!selected){
        alert("please select any option");
    }
    else{
        ++i;

        selected=false;
    on();
    removeRightWrong();
    
    if(i<questions.length){
        deactive();
    
    
    heading.innerHTML=`Question no ${i+1}:`;
    getQuestion.innerHTML=questions[i];
    btn1.innerHTML=answers[i].option1;
    btn2.innerHTML=answers[i].option2;
    btn3.innerHTML=answers[i].option3;
    btn4.innerHTML=answers[i].option4;
}
    else{
        if(score>=90){
        document.getElementById('main').innerHTML=`<h1 class='result'>Congratuation!!!</h1><h4 class='result1'>${name} you have got ${score} out of ${questions.length*10} marks<br>your percentage is ${score/questions.length*10}%</h4>`;
        var button = document.createElement('BUTTON');
        button.innerHTML="Restart Quiz";
        button.setAttribute("id",'restart');
        button.classList.add('btn');
        button.classList.add('btn-primary');
        button.setAttribute('onclick','window.location.reload()');
        document.getElementById('main').appendChild(button);
        }
        else if(score>=70){
        document.getElementById('main').innerHTML=`<h1 class='result'>Weldone!!!</h1><h4 class='result1'>${name} you have got ${score} out of ${questions.length*10} marks <br>your percentage is ${score/questions.length*10}% <br>keep it up!!</h4>`;
        var button = document.createElement('BUTTON');
        button.innerHTML="Restart Quiz";
        button.setAttribute("id",'restart');
        button.classList.add('btn');
        button.classList.add('btn-primary');
        button.setAttribute('onclick','window.location.reload()');
        document.getElementById('main').appendChild(button);    
    }
        else if(score>=40){
            document.getElementById('main').innerHTML=`<h1 class='result'>Good!!!</h1><h4 class='result1'>${name} you have got ${score} out of ${questions.length*10} marks <br>your percentage is ${score/questions.length*10}% <br>you have to practice more improve!!</h4>`;
            var button = document.createElement('BUTTON');
            button.innerHTML="Restart Quiz";
            button.setAttribute("id",'restart');
            button.classList.add('btn');
            button.classList.add('btn-primary');
            button.setAttribute('onclick','window.location.reload()');
            document.getElementById('main').appendChild(button);
        }
        else{
            document.getElementById('main').innerHTML=`<h1 class='result' style="color: red !important;">OoPs!!!</h1><h4 class='result1'>${name} you have got ${score} out of ${questions.length*10} marks <br>your percentage is ${score/questions.length*10}% <br>need much hardwork!!</h4>`;
            var button = document.createElement('BUTTON');
            button.innerHTML="Restart Quiz";
            button.setAttribute("id",'restart');
            button.classList.add('btn');
            button.classList.add('btn-primary');
            button.setAttribute('onclick','window.location.reload()');
            document.getElementById('main').appendChild(button);
        }
        
        


    }
    if(i==questions.length-1){
        var next=document.getElementById('next').innerHTML="Done";

    }
}

}
function active(a){
    
    deactive();
    // a.classList.add('active');
    if(a.innerHTML==answers[index].answer){
        score+=10;
        // a.classList.remove('active');
        a.classList.add('right');
        selected=true;
    }
    else{
        // a.classList.remove('active');
        a.classList.add('wrong');
        selected=true;

        if(btn1.innerHTML==answers[index].answer){
            btn1.classList.add('right');
        }
        else if(btn2.innerHTML==answers[index].answer){
            btn2.classList.add('right');
        }
        else if(btn3.innerHTML==answers[index].answer){
            btn3.classList.add('right');
        }
        else if(btn4.innerHTML==answers[index].answer){
            btn4.classList.add('right');
        }
        
            
        }

    off();
    // console.log(a.innerHTML+" "+answers[index].answer+" "+score);
    index++

}
function off(){
    btn1.disabled=true;
    btn2.disabled=true;
    btn3.disabled=true;
    btn4.disabled=true;
}
function on(){
    btn1.disabled=false;
    btn2.disabled=false;
    btn3.disabled=false;
    btn4.disabled=false;
}
function deactive(){
    actives=document.getElementsByClassName('active');
    for(var i=0;i<actives.length;i++){
        actives[i].classList.remove('active');
      

    }
}
function removeRightWrong(){
    var right=document.getElementsByClassName('right');
    var wrong=document.getElementsByClassName('wrong');
    for(var i=0;i<right.length;i++){
        right[i].classList.remove('right');
      

    }
    for(var i=0;i<wrong.length;i++){
        wrong[i].classList.remove('wrong');
      

    }
}

}
function hide(s){
    s.parentElement.remove();
    document.getElementById('later').removeAttribute('class','hide')
}

