const ticTacToeGame = new TicTacToeGame();
ticTacToeGame.start();

function TicTacToeGame()
{
    const board = new Board();
    const humanPlayer = new HumanPlayer(board);
    const computerPlayer = new ComputerPlayer(board);
    let turn = 0;

    this.start = function()
    {
        const observer = new MutationObserver(takeTurn) //function that will run once a change occurs
        //const observer = new MutationObserver(() => takeTurn());
    
       // board.positions.forEach((e1) => observer.observe(e1,config));
        board.positions.forEach(change);

     //telling it what to observe   
        function change(el)
        {
            observer.observe(el, 
                {
                    childList: true
                })
        }
        takeTurn();
    }

    

    function takeTurn()
    {  
        if(turn % 2 == 0)
        {
            humanPlayer.takeTurn();
        }
        else
        {
            computerPlayer.takeTurn()
        }
        turn++;
    }
}

function Board()
{
    this.positions = Array.from(document.querySelectorAll('.col'))
    console.log(this.positions)
};


function HumanPlayer(board)
{
    this.takeTurn = function()
    {
        board.positions.forEach(placeX);

        function placeX(el)
        {
            el.addEventListener('click', handleTurnTaken)
        }


    }   

    function handleTurnTaken(event)
    {
        event.target.innerText = "X";
        board.positions.forEach((el) => el.removeEventListener('click', handleTurnTaken))
    }
};


function ComputerPlayer(board)
{
    this.takeTurn = function()
    {
       const availablePositions = board.positions.filter(())
    }
};