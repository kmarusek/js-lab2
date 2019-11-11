let userHealth = 40;
let grantsHealth = 10;
let grantsDeaths = 0;



let gameStart = prompt('Do you want to play?')
   
if( gameStart === 'yes'){

        let userName = prompt("Enter User Name here.");

    while (userHealth > 0 && grantsDeaths < 3) {
        let randomNumber = Math.floor(Math.random() * 2) + 1;
        let randomNumber2 = Math.floor(Math.random() * 2) + 1;
        userHealth -= randomNumber;
        grantsHealth -= randomNumber2;
        console.log(`${userName} has ${userHealth} health left.`)
        console.log(`Grant has ${grantsHealth} health left.`)

        //     userHealth -- randomNumber
        //     grantsHealth -- randomNumber2
        // console.log health remaining for both users.
        if (grantsHealth <= 0) {
            grantsDeaths++;
            grantsHealth = 10;
            console.log(`Grant Died.`)
        }
    } 

    if (grantsDeaths === 3) {
        console.log(`${userName} won.`);
    }
    else {
        console.log(`Grant won.`);
    }

} 

   

// log winner of game.