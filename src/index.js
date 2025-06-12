import React from "react";
import { createRoot } from "react-dom/client";

function App(){
   return <div>
    <Header/>
    <Menu/>
    <Footer/>

   </div>
}

function Menu (){
    return <div>
        <h2>Nuestro Menú</h2>
        <Pizza/>
    </div>
}

function Header (){
return <h1>Comida Rápida React Co.</h1>
}

function Footer (){
return <footer>{new Date().toLocaleTimeString()} Estamos atendiendo en este momento</footer>
//Así creamos un componente sin jsx
    // return React.createElement('footer', null, "Estamos atendiendo en este momento")
}

function Pizza(){
    return(
        <div>
            <img src="pizzas/focaccia.jpg" alt="Imagen de Pizza"/>
         <h1>Foccacia</h1>
         <p>Pan con aceite de oliva italiano</p>
        </div>
    )
}

const root = createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
    <App />
</React.StrictMode>
);