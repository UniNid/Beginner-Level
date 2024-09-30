let  currentScore=localStorage.getItem("currentStatus");
let score=JSON.parse(currentScore);

updateScore();

function updateScore()
{
    document.querySelector("#computer").innerHTML=`Computer: ${score.computer}`;
    document.querySelector('#user').innerHTML=`User: ${score.user}`;
    document.querySelector('#tie').innerHTML=`Tie: ${score.tie}`;
}


function randomNumGenerator()
{
    let randomChoice= Math.floor(Math.random()*3+1);
    return randomChoice;

}

function computeCompChoice()
{
    let compChoice;
    let randomChoice=randomNumGenerator()
    if(randomChoice==1)
        {
            compChoice="👊 Rock"  ;
        } 
         else if(randomChoice==2)
        {
            compChoice="🖐️ Paper"  ;
        }
        else
        {
            compChoice="✌️ Scissors"  ;
        }
        return compChoice;
}

 function printResult(userChoice,compChoice,result)
 {

    document.getElementById('result').innerText=`You chose ${userChoice}
    I chose ${compChoice}`;

    const css=document.querySelector('#final');
    css.style.fontWeight = 'bolder';
    css.style.fontSize = '25px';

    document.getElementById('final').innerText=`${result}`;
    
 }

function color(result)
{
    if(result=='OOPS!! A TIE!!')
    {
        document.getElementById('final').style.color='#570bb7';
    }
    else if(result=='Bad Luck!! I Won...')
    {
        document.getElementById('final').style.color='red';
    }
    else{
        document.getElementById('final').style.color='green';
    }
}

function computeResult(userChoice,compChoice)
{
    let result;
    if(compChoice==userChoice)
        {
            result=`OOPS!! A TIE!!`;
            score.tie++;
        }
    else if(compChoice=="👊 Rock" && userChoice=="✌️ Scissors"||
            compChoice=="✌️ Scissors" && userChoice=="🖐️ Paper"||
            compChoice=="🖐️ Paper" && userChoice=="👊 Rock")
    {
        result=`Bad Luck!! I Won...`
        score.computer++;
  
    }
    else
    {
       result=`Hurreh!!You Won...`
       score.user++;
    }
    localStorage.setItem("currentStatus", JSON.stringify(score));
    updateScore();
    return result;
}

function rockClicked()
{
    let compChoice=computeCompChoice();
    
    let result=computeResult("👊 Rock",compChoice);

    color(result);
 
    printResult("👊 Rock",compChoice,result);
}


function paperClicked()
{
    let compChoice=computeCompChoice();

    let result=computeResult("🖐️ Paper",compChoice);

    color(result);
    
    printResult("🖐️ Paper",compChoice,result);

}


function scissorsClicked()
{
    let result;

    let compChoice=computeCompChoice();

    result=computeResult("✌️ Scissors",compChoice);    

    color(result);

    printResult("✌️ Scissors",compChoice,result);

}


function reset()
{score={
    computer:0,
    user:0,
    tie:0,
}
localStorage.setItem("currentStatus", JSON.stringify(score));
updateScore();
}





