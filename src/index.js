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
    return <main className="menu">
        <h2>Nuestro Menú</h2>
        {pizzaData.map((Piza)=>{
            return(
            <Pizza key={Piza.name} pizza={Piza}/>
            )
        })}
    </main>
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
    {new Date().toLocaleTimeString()} Estamos atendiendo en este momento
</footer>
)
//Así creamos un componente sin jsx
    // return React.createElement('footer', null, "Estamos atendiendo en este momento")
}

function Pizza({pizza}){
    const {name, ingredients, price,photoName, soldOut}= pizza;
    return(
        <div className="pizza">
            <img src={photoName} alt="Imagen de Pizza"/>
            <div>
                 <h3>{name}</h3>
                 <p>{ingredients}</p>
                 <span>{price + 3}</span>
            </div>
        
        </div>
    )
}

const root = createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
    <App />
</React.StrictMode>
);