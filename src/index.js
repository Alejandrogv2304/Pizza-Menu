import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css"

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App(){
   return <div>
    <Header/>
    <Menu/>
    <Footer/>

   </div>
}

function Menu (){
  const pizzas= pizzaData;
  const numPizzas = pizzas.length;
    return (
    <main className="menu">
        <h2>Nuestro Menú</h2>

        

        {numPizzas > 0 ? (
          <>
          <p>Autentica cocina italiana. 6 platos creativos para elegir.<br/>
           Todos nuestros platillos son orgánicos y deliciosos</p>
          <ul className="pizzas">
        {pizzaData.map((Piza)=>{
            return(
            <Pizza key={Piza.name} pizza={Piza}/>
            )
        })}
        </ul>
        </>) : <p>Todavía estamos trabajando en nuestro menú. Por favor, vuelve después</p>}
        
    </main>
    )
}

function Header (){
return( 
<header className="header">
    <h1>Comida Rápida React Co.</h1>
</header>
)
}

function Footer (){
    const hour = new Date().getHours();
    const openHour = 8;
    const closedHour= 22;
    const isOpen= hour >= openHour && hour<=closedHour;
    console.log(isOpen);
return( 
<footer className="footer">
    {isOpen ? 
      <Order openHour={openHour} closedHour={closedHour}/>
    : <p>Estaremos felices de recibirte entre {openHour}:00 y las {closedHour}:00.</p>}
</footer>
)
//Así creamos un componente sin jsx
    // return React.createElement('footer', null, "Estamos atendiendo en este momento")
}

function Order({openHour,closedHour}){
  return(
    <div className="order">
      <p>Estamos en servicio desde {openHour}:00 hasta las {closedHour}:00 visitanos u ordena online</p>
      
      <button className="btn">Order</button>
      </div>
  )
}

function Pizza({pizza}){
    const {name, ingredients, price,photoName, soldOut}= pizza;
   
    return(
        <li className={`pizza ${soldOut ? 'sold-out' :''}`}>
            <img src={photoName} alt="Imagen de Pizza"/>
            <div>
                 <h3>{name}</h3>
                 <p>{ingredients}</p>
                 {soldOut ? <span>SOLD OUT</span>: <span>{price }</span>}
            </div>
        
        </li>
    )
}

const root = createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
    <App />
</React.StrictMode>
);