let tradingCardData = [
    // start - this is a JS object
    {
      name: 'Balloonicorn',
      skill: 'video games',
      imgUrl: '/static/img/balloonicorn.jpg'
    },
    // end - this is a JS object

    {
      name: 'Float',
      skill: 'baking pretzels',
      imgUrl: '/static/img/float.jpg'
    },
  
    {
      name: 'Llambda',
      skill: 'knitting scarves',
      imgUrl: '/static/img/llambda.jpg'
    }
  ];

const tradingCard = tradingCardData[0];

function TradingCard(props) {
    return (
        <div onMouseOver={() => alert(`hi ${prop.name}`)} className={'card'}> //use CCS style
            <p>{props.skill}</p>
            <p>{props.name}</p>
            <img src={`${props.imgURL}`} />
        </div>
    )
}

// a component holding other component is called a container
function TradingCardContainer(props) {
    //props.tradingCards is a list of all the trading cards
    const tradingCards = []
    for (const tradingCard of tradingCardData) {
        // console.log(tradingCard);
        // create TradingCard components
        tradingCards.push(
            //Adding component to the list
            <TradingCard //this is the component/function 
                skill={tradingCard.skill} 
                name={tradingCard.name} 
                imgUrl={tradingCard.imgUrl} />)
    }
    return (
        <React.Fragment>
            {tradingCard}
        </React.Fragment>
        // <div>
        //     {tradingCard}
        // </div>
    )
}


ReactDOM.render(
    // <TradingCard skill='knitting' name='Llambda' imgURL='static/img/llambda.jpg'/>,
    <TradingCardContainer tradingCards={tradingCardData}/>
    document.getElementById('container')


// Render just 1 card
// ReactDOM.render(
//     // <TradingCard skill='knitting' name='Llambda' imgURL='static/img/llambda.jpg'/>,
//     <TradingCard 
//         skill={tradingCard.skill} 
//         name={tradingCard.name} 
//         imgURL={tradingCard.imgUrl}/>,
//     document.getElementById('container')
)

// If you want to render more than 1 card
// ReactDOM.render(
//     // <TradingCard skill='knitting' name='Llambda' imgURL='static/img/llambda.jpg'/>,
//     <div>
//         <TradingCard 
//             skill={tradingCard.skill} 
//             name={tradingCard.name} 
//             imgURL={tradingCard.imgUrl}/>,
//         <TradingCard 
//             skill={tradingCardData[1].skill} 
//             name={tradingCardData[1].name} 
//             imgURL={tradingCardData[1].imgUrl}/>,
//     </div>
//     document.getElementById('container')
// )