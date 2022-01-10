/* selecting elements */
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

/* initial conditions */
let Scores,currentScore,activePLayer,playing;
function init() {
    score0.textContent = 0;
    score1.textContent = 0;
    Scores = [0,0]
    currentScore = 0;
    activePLayer = 0;

    playing = true;
    dice.classList.add('hidden');
    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--winner')
    document.querySelector('.player--0').classList.add('player--active');
    document.querySelector('.player--1').classList.remove('player--active');

    current0.textContent = '0';
    current1.textContent = '0';
    
}
init();


function switchPlayer(){
    document.getElementById(`current--${activePLayer}`).textContent = 0;
    activePLayer = activePLayer=== 0 ? 1:0;
    currentScore = 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
}
/* adding click button on roll */
btnRoll.addEventListener('click',function()
{
    if (playing == true){
/* generating random num from dice */ 
        const diceNum = Math.trunc(Math.random() * 6) + 1;

/* show random number on dice */
        dice.classList.remove('hidden');
        dice.src = `dice-${diceNum}.png`;

/* if 1 then switch player */
        if(diceNum !== 1) 
       {
        currentScore = currentScore + diceNum;
        document.getElementById(`current--${activePLayer}`).textContent = currentScore;
      
       }
       else {
    /*if equal to one */
       switchPlayer();
       }
    }
})
/* adding click button event to hold */

btnHold.addEventListener('click',function(){
    if(playing) {
        console.log('Hold button');
        Scores[activePLayer] += currentScore;
        document.getElementById(`score--${activePLayer}`).textContent = Scores[activePLayer];

        if(Scores[activePLayer] >= 20)
        {
            playing = false;
            dice.classList.add('hidden');
            document.querySelector(`.player--${activePLayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePLayer}`).classList.remove('player--active');

        }
        else {
        switchPlayer();
        }
    }
})

/*adding click button event to New */
btnNew.addEventListener('click',function()
{
    init();
})