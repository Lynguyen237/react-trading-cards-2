var tradingCardData = [
  {
    name: 'Balloonicorn',
    skill: 'video games',
    imgUrl: '/static/img/balloonicorn.jpg'
  },

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

function TradingCard(props) {
  return (
    <div className="card">
      <p>Name: {props.name}</p>
      <img src={props.imgUrl} />
      <p>Skill: {props.skill} </p>
    </div>
  );
}

// TASK 1 
function TradingCardContainer() {


  // A variable that is a Javascript object
  // const floatCard = {
  //   name: 'Float',
  //   skill: 'baking pretzels',
  //   imgUrl: '/static/img/float.jpg'
  // };

  // If want to change cards, use function updateCard
  const [cards, updateCards] = React.useState([]);

  React.useEffect(() => {
    fetch('/cards.json')
    .then((response) => response.json())
    .then((data) => updateCards(data.cards))
  }, [])

  const tradingCards = [];

  for (const currentCard of cards) {
    tradingCards.push(
      <TradingCard
        key={currentCard.name}
        name={currentCard.name}
        skill={currentCard.skill}
        imgUrl={currentCard.imgUrl}
      />
    );
  }

  return (
    <div>{tradingCards}</div>
  );

}


// END OF TASK 1


// function TradingCardContainer() {
//   const tradingCards = [];

//   for (const currentCard of tradingCardData) {
//     tradingCards.push(
//       <TradingCard
//         key={currentCard.name}
//         name={currentCard.name}
//         skill={currentCard.skill}
//         imgUrl={currentCard.imgUrl}
//       />
//     );
//   }

//   return (
//     <div>{tradingCards}</div>
//   );
// }

ReactDOM.render(
  <TradingCardContainer />,
  document.getElementById('container')
);
