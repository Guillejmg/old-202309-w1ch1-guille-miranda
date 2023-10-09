
const ourDeck = [
    [
        {
            name:"aheart",
            value: 12
        },
        {
            name:"twoheart",
            value: 1
        },
        {
            name:"threeheart",
            value: 2
        },
        {
            name:"fourheart",
            value: 3
        },
        {
            name:"fiveheart",
            value: 4
        },
        {
            name:"sixheart",
            value: 5
        },
        {
            name:"sevenheart",
            value: 6
        },
        {
            name:"eightheart",
            value: 7
        },
        {
            name:"nineheart",
            value: 8
        },
        {
            name:"jheart",
            value: 9
        },
       {
            name:"qheart",
            value: 10
        },
        {
            name:"kheart",
            value: 11
        },
    
    ],
    [
        {
            name:"adiamond",
            value: 12
        },
        {
            name:"twodiamond",
            value: 1
        },
        {
            name:"threediamonds",
            value: 2
        },
        {
            name:"fourdiamonds",
            value: 3
        },
        {
            name:"fivediamonds",
            value: 4
        },
        {
            name:"sixdiamonds",
            value: 5
        },
        {
            name:"sevendiamonds",
            value: 6
        },
        {
            name:"eightdiamonds",
            value: 7
        },
        {
            name:"ninediamonds",
            value: 8
        },
        {
            name:"jdiamonds",
            value: 9
        },
        {
            name:"qdiamonds",
            value: 10
        },
        {
            name:"kdiamonds",
            value: 11
        },
    
    ],
    [
        {
            name:"aspade",
            value: 12
        },
        {
            name:"twospades",
            value: 1
        },
        {
            name:"threespades",
            value: 2
        },
        {
            name:"fourspades",
            value: 3
        },
        {
            name:"fivespades",
            value: 4
        },
        {
            name:"sixspades",
            value: 5
        },
        {
            name:"sevenspades",
            value: 6
        },
        {
            name:"eightspades",
            value: 7
        },
        {
            name:"ninespades",
            value: 8
        },
        {
            name:"jspades",
            value: 9
        },
        {
            name:"qspades",
            value: 10
        },
        {
            name:"kspades",
            value: 11
        },
    
    ],
    [
        {
            name:"atrebol",
            value: 12
        },
        {
            name:"twotrebols",
            value: 1
        },
        {
            name:"threetrebols",
            value: 2
        },
        {
            name:"fourtrebols",
            value: 3
        },
        {
            name:"fivetrebols",
            value: 4
        },
        {
            name:"sixtrebols",
            value: 5
        },
        {
            name:"seventrebols",
            value: 6
        },
        {
            name:"eighttrebols",
            value: 7
        },
        {
            name:"ninetrebols",
            value: 8
        },
        {
            name:"jtrebols",
            value: 9
        },
        {
            name:"qtrebols",
            value: 10
        },
        {
            name:"ktrebols",
            value: 11
        },
    ],
]

export const generateCards1 = () => {
    
    const betARandomSuit = Math.floor(Math.random ()* ourDeck.length)
    const ourSuit = ourDeck[betARandomSuit]
    const betARandomCard =  Math.floor(Math.random ()* ourSuit.length)
    const ourFinalCard = ourSuit[betARandomCard]

    return ourFinalCard
}
export const generateCards2 = () => {

    const betARandomSuit = Math.floor(Math.random ()* ourDeck.length)
    const ourSuit = ourDeck[betARandomSuit]
    const betARandomCard =  Math.floor(Math.random ()* ourSuit.length)
    const ourFinalCard = ourSuit[betARandomCard]

    return ourFinalCard
}

const letsPlay = document.querySelector()


/*export const whoWinHigher = () => {
    if (generateCards1 < generateCards2 && blablabla = higher) {
        console.log("has ganado")
    } return ("has perdido")
}
export const whoWinLower = () => {
    if (generateCards1 < generateCards2 && blablabla = lower) {
        console.log("has ganado")
    } return ("has perdido")
}
*/
