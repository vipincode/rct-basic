import './App.css';

const Header = (props) => {
  return(
    <h1>{props.name}'s Kitchen</h1>
  )
}

const Main = (props) => {
  return(
    <section>
      <h2>WE are serve the most {props.adjective} food around.</h2>
      <img src="https://github.com/vipincode.png" alt="" height={200}/>
      <ul>
        {props.dishes.map((dish) => <li key={dish.id}>{dish.title}</li>)}
      </ul>
    </section>
  )
}

const Footer = (props) => {
  return(
    <p>copyright @ {props.year}</p>
  )
}

const dishes = [
  "Microni & Cheej",
  "Chaumin",
  "Tikki & Paniputi"
]

const dishObject = dishes.map((dish, i) => ({id: i, title: dish}))
// console.log(dishObject)

// dishes.map(dish => console.log(dish))

function App() {
  return (
    <div className="App">
      <Header name="Vipin" />
      <Main adjective="amazing" dishes={dishObject} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
