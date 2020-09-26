// use let instead of var
// later can use tradingCardData = "somethingelse"
// use const, you can't change it like let
let tradingCardData = [
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
    fetch('/api/cards.json')
    .then((response) => response.json()) //can call response whatever you want
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
    <div>
      <TradingCardForm />
      <div>{tradingCards}</div>
    </div>
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


// FURTHER STUDY: https://fellowship.hackbrightacademy.com/materials/pt7g/exercises/react-trading-cards-2/further-study/

function TradingCardForm() {
  const [name, setName] = React.useState('');
  const [skill, setSkill] = React.useState('');

  function addNewCard() {
    const data = {
      name,
      skill,
    };

    $.post('/add-card', data, updateCards);
  }

  function updateCards() {
    alert('done adding card');
  }

  // What's e? and .target
  function handleNameChange(e) {
    setName(e.target.value)
  }

  function handleSkillChange(e) {
    setSkill(e.target.value );
  }

  return (
    <form>
      <label for="name">Name:</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={handleNameChange}
      />

      <label for="skill">Skill:</label>
      <input
        id="skill"
        type="text"
        value={skill}
        onChange={handleSkillChange}
      />

      <button onClick={addNewCard}>Add</button>
    </form>
  );
}