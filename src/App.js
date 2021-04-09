import React from "react";
import MenuComp from "./components/MenuComp";
import "./App.css";
import "./style/style.css";


function App() {
  return (
    <div className="App-main">
        <MenuComp />
      <div className="white-border">
        <div className="box title">
        <h1>Morella</h1>
        <div className="square-text">
        <div className="box square"></div>
        <div className="box text">
           <p>
          Morella mélységesen művelt volt. Életemet merem rátenni: tehetsége
          magasabb rendű volt a közönségesnél – elméjének ereje óriás. Éreztem
          ezt, és sok dologban tanítványa lettem. De hamarosan úgy találtam,
          hogy pozsonyi nevelése folytán azokat a misztikus írásokat rakja elém,
          egész csomót, amelyeket általában a korai német irodalom puszta
          salakjának szoktunk tekinteni. Ez volt, el sem tudtam képzelni, mi
          okból, kedvence s állandó tanulmánya – s hogy idő folytán ez lett
          nekem magamnak is, a példa és szokás egyszerű, de hatékony
          befolyásának kell tulajdonítani...
        </p>
        <h2>Read more</h2>
        </div>
        </div>
        </div>
      </div>
     
    </div>
  );
}

export default App;
