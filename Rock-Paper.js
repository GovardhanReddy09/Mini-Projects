let wins=localStorage.getItem('wins') || 0;
let losses=localStorage.getItem('losses') || 0;
let ties=localStorage.getItem('ties') || 0;
document.querySelector('.score-message').innerHTML=`Wins: ${wins}, Losses: ${losses}, Ties: ${ties}`;
document.querySelector('.reset-button').addEventListener('click',()=>{
    wins=0;
    losses=0;
    ties=0;
    localStorage.removeItem('wins');
    localStorage.removeItem('losses');
    localStorage.removeItem('ties');
    document.querySelector('.score-message').innerHTML=`Wins: ${wins}, Losses: ${losses}, Ties: ${ties}`;
});
let autoPlayButton=false;
let time;
function autoPlay()
{
    if(!autoPlayButton){ 
    time=setInterval(()=>{
        a=Math.random();
        if(a>=0 && a<1/3){
            playerMove='rock';
        }
        else if(a>=1/3 && a<2/3)
        {
            playerMove='paper';
        }
        else{
            playerMove='scissors';
        }
        calculateComputerMove(playerMove);
    },1000);
    autoPlayButton=true;
}
else{
    clearInterval(time);
    autoPlayButton=false;
}
}

function calculateComputerMove(playerMove){
    let computerMove='';
    let result='';
    let randomNumber=Math.random();
    if(randomNumber>=0 && randomNumber<1/3){
        computerMove='rock';
    }
    else if(randomNumber>=1/3 && randomNumber<2/3){
        computerMove='paper';
    }
    else
    {
        computerMove='scissors';
    }
    if(playerMove==='rock')
    {
        if(computerMove==='rock')
        {
            result='Tie.';
        }
        else if(computerMove==='paper')
        {
            result="You lose.";
        }
        else{
            result="You win.";
        }
    }
    else if(playerMove==='paper'){
        if(computerMove==='rock'){
            result='You win.';
        }
        else if(computerMove==='paper'){
            result='Tie.';
        }
        else{
            result='You lose.';
        }

    }
    else
    {
        if(computerMove==='rock'){
            result='You lose.';
        }
        else if(computerMove==='scissors'){
            result='Tie.';
        }
        else{
            result='You win.';
        }
    }
    wins=parseInt(wins);
    losses=parseInt(losses);
    ties=parseInt(ties);
    if(result==='You win.'){
        wins+=1;
    }
    else if(result==='You lose.'){
        losses+=1;
    }
    else
    {
        ties+=1;
    }
    wins=wins.toString();
    losses=losses.toString();
    ties=ties.toString();
    localStorage.setItem('wins',wins);
    localStorage.setItem('losses',losses);
    localStorage.setItem('ties',ties);
    document.querySelector('.result-passage').innerHTML=`${result}`;
document.querySelector(".result").innerHTML=`You <img src='Images/${playerMove}-emoji.png' height='50px'> 
<img src='Images/${computerMove}-emoji.png' height='50px'> Computer `;
document.querySelector('.score-message').innerHTML=`Wins: ${wins}, Losses: ${losses}, Ties: ${ties}`;
}