let optionsPlayer = document.querySelector('.playersCategory');
let playersName = document.querySelector('.playerStats');
let playersList = document.querySelector('.playersList');



class Player
{
    constructor(playerName, playerMatches, playerCenturies)
    {
        this.playerName = playerName,
        this.playerMatches = playerMatches
        this.playerCenturies = playerCenturies;
    }

}

class PlayerBowler extends Player{
    constructor(playerName, playerMatches,playerWickets)
    {
        super(playerName, playerMatches, playerWickets)
        this.playerWickets = playerWickets;
    }
}

class PlayerAllRounder extends Player{
    constructor(playerName, playerMatches, playerCenturies, playerWickets)
    {
        super(playerName, playerMatches, playerCenturies)
        this.playerWickets = playerWickets;
    }
}

function playerCategoryFunc()
{

    ///// Batsman Section /////

    if(optionsPlayer.value == "1")
    { 
        let batsmanArray = ['Babar Azam', 'Aaron Finch', 'Virat Kohli'];
        let countStr = "";
        for(let i = 0; i<batsmanArray.length; i++)
        {
           
            countStr += `
            <div>
                <input type="radio" id="playerId${i}" value="player${i}" name="batsmanName"/> <span>${batsmanArray[i]} </span>
            </div>
            `;
        }

        playersList.innerHTML = countStr;

        let playerInput = document.querySelectorAll('input[name="batsmanName"]');
        playerInput[0].addEventListener('click', function()
        {
        
            let batsman1 = new Player("Babar Azam", 78, 29);
            playersName.innerHTML =
            `
            <h3> ${batsman1.playerName} </h3><br/>
            <center><img src="img/babarAzamm.png" style="width: 200px;"/></center><br/>
            <p><b>Matches:</b> ${batsman1.playerMatches}</p>
            <p><b>Centuries:</b> ${batsman1.playerCenturies}</p>
            `;
        
        });
        playerInput[1].addEventListener('click', function()
        {
        
            let batsman2 = new Player("Aaron Finch", 123, 83)
            playersName.innerHTML =
            `
            <h3> ${batsman2.playerName} </h3><br/>
            <center><img src="img/AaronFinch.png" style="width: 200px;"/></center><br/>
            <p><b>Matches:</b> ${batsman2.playerMatches} </p>
            <p><b>Centuries:</b> ${batsman2.playerCenturies}</p>
            `;
          
        });
        playerInput[2].addEventListener('click', function()
        {
        
            let batsman3 = new Player("Virat Kohli", 89, 12)
            playersName.innerHTML =
            `
            <h3> ${batsman3.playerName} </h3><br/>
            <center><img src="img/viratKohli.png" style="width: 200px;"/></center><br/>
            <p><b>Matches:</b> ${batsman3.playerMatches}</p>
            <p><b>Centuries:</b> ${batsman3.playerCenturies}</p>
            `;
          
        });

    }

    ///// Bowlers Section /////

    else if(optionsPlayer.value == "2")
    {
        let bowlerArray = ['Tabraiz Shamsi','Rashid Khan', 'Shaheen Afridi'];
        // console.log(bowlerArray);
        let countStr = "";
        for(let i = 0; i<bowlerArray.length; i++)
        {
            countStr += `
            <div>
                <input type="radio" value="${i}" name="bowlerName"/> <span>${bowlerArray[i]} </span>
            </div>
            `;
        }
        playersList.innerHTML = countStr;
        
        let playerInput = document.querySelectorAll('input[name="bowlerName"]');
        playerInput[0].addEventListener('click', function()
        {
        
            let bowler1 = new PlayerBowler("Tabraiz Shamsi", 78, 43);
            playersName.innerHTML =
            `
            <h3> ${bowler1.playerName} </h3><br/>
            <center><img src="img/tabraizShamsi.png" style="width: 200px;"/></center><br/>
            <p><b>Matches:</b> ${bowler1.playerMatches} </p>
            <p><b>Wickets:</b> ${bowler1.playerWickets}</p>
            `;
        
        });
        playerInput[1].addEventListener('click', function()
        {
        
            let bowler2 = new PlayerBowler("Rashid Khan", 123, 83);
            playersName.innerHTML =
            `
            <h3> ${bowler2.playerName} </h3><br/>
            <center><img src="img/rashidKhan.png" style="width: 200px;"/></center><br/>
            <p><b>Matches:</b> ${bowler2.playerMatches} </p>
            <p><b>Wickets:</b> ${bowler2.playerWickets}</p>
            `;
          
        });
        playerInput[2].addEventListener('click', function()
        {
        
            let bowler3 = new PlayerBowler("Shaheen Afridi", 28, 53);
            playersName.innerHTML =
            `
            <h3> ${bowler3.playerName} </h3><br/>
            <center><img src="img/shaheenAfridi.png" style="width: 200px;"/></center><br/>
            <p><b>Matches:</b> ${bowler3.playerMatches} </p>
            <p><b>Wickets:</b> ${bowler3.playerWickets}</p>
            `;
          
        });      
    }

    ///// All Rounder Section /////

    else if(optionsPlayer.value == "3")
    {
        let allRounderArray = ['Ben Stokes','Imad Wasim', 'Muhammad Amir'];
        // console.log(allRounderArray);
        let countStr = "";
        for(let i = 0; i<allRounderArray.length; i++)
        {
           
            countStr += `
            <div>
                <input type="radio" value="${i}" name="allRounderName"/> <span>${allRounderArray[i]} </span>
            </div>
            `;
        }
        playersList.innerHTML = countStr;
        let playerInput = document.querySelectorAll('input[name="allRounderName"]');
        playerInput[0].addEventListener('click', function()
        {
        
            let allRounder1 = new PlayerAllRounder("Ben Stokes", 78, 12, 43);
            playersName.innerHTML =
            `
            <h3> ${allRounder1.playerName} </h3><br/>
            <center><img src="img/benStokes.png" style="width: 200px;"/></center><br/>
            <p><b>Matches:</b> ${allRounder1.playerMatches} </p>
            <p><b>Centuries:</b>: ${allRounder1.playerCenturies} </p>
            <p><b>Wickets:</b> ${allRounder1.playerWickets}</p>
            `;
        
        });
        playerInput[1].addEventListener('click', function()
        {
        
            let allRounder2 = new PlayerAllRounder("Imad Wasim", 123, 11, 83);
            playersName.innerHTML =
            `
            <h3> ${allRounder2.playerName} </h3><br/>
            <center><img src="img/imadWasim.png" style="width: 200px;"/></center><br/>
            <p><b>Matches:</b> ${allRounder2.playerMatches} </p>
            <p><b>Centuries:</b> ${allRounder2.playerCenturies} </p>
            <p><b>Wickets:</b> ${allRounder2.playerWickets}</p>
            `;
          
        });
        playerInput[2].addEventListener('click', function()
        {
        
            let allRounder3 = new PlayerAllRounder("Muhammad Amir", 28,09, 53);
            playersName.innerHTML =
            `
            <h3> ${allRounder3.playerName} </h3><br/>
            <center><img src="img/muhmmadAmir.png" style="width: 200px;"/></center><br/>
            <p><b>Matches:</b> ${allRounder3.playerMatches} </p>
            <p><b>Centuries:</b> ${allRounder3.playerCenturies} </p>
            <p><b>Wickets:</b> ${allRounder3.playerWickets}</p>
            `;
          
        });
    }

    else{
        playersList.innerHTML = "";
        playersName.innerHTML = "";
        console.log("This is the defalut value");
    }

}
