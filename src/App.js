import './App.css';
import Boton from './componentes/botones';
import Display from './componentes/display';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [ text, setText ] = useState({ in:"", count:"0", out:"0" });

  function eventHandler( val ){
    const regex = [
      /^0$|\W0$/,
      /\.$|.\W$|\d\.\d$/
    ];
    switch( val ){
      case "AC":
        setText({...text, 
          in:"", 
          count:"", 
          out:"0"});
        break;
      case "=":
        setText({ ...text, 
          in: evaluate(text.count), 
          count: evaluate(text.count), 
          out: text.count + val + evaluate(text.count) });
        break;
      case "0":
        if(regex[0].test(text.count)){
          console.log("Invalid value: 00");
        } else { 
          setText({ ...text, 
            in: val, 
            count: text.count + val, 
            out: text.count + val});
        }
        break;
      case ".":
        if(regex[1].test(text.count)){
          console.log("Invalid value: ..");
        } else {
          setText({ ...text, 
            in: val, 
            count: text.count + val, 
            out: text.count + val});
        }
        break;
      default:
        setText({ ...text, 
          in: val, 
          count: text.count + val, 
          out: text.count + val});
    }

    console.log(text.in, text.count, text.out);
  };

  return (
    <div className="App">
      <Display 
        clase={ "Output" } 
        displayedIn={ text.in } 
        displayedOut={ text.out } 
      />
   {/* Operadores */}
      <Boton buttonId="clear" buttonText="AC" click={ eventHandler } />
      <Boton buttonId="add" buttonText="+" click={ eventHandler } />
      <Boton buttonId="subtract" buttonText="-" click={ eventHandler } />
      <Boton buttonId="multiply" buttonText="*" click={ eventHandler } />
      <Boton buttonId="divide" buttonText="/" click={ eventHandler } />
      <Boton buttonId="equals" buttonText="=" click={ eventHandler } />
   {/* Números */}
      <Boton buttonId="one" buttonText="1" click={ eventHandler } />
      <Boton buttonId="two" buttonText="2" click={ eventHandler } />
      <Boton buttonId="three" buttonText="3" click={ eventHandler } />
      <Boton buttonId="four" buttonText="4" click={ eventHandler } />
      <Boton buttonId="five" buttonText="5" click={ eventHandler } />
      <Boton buttonId="six" buttonText="6" click={ eventHandler } />
      <Boton buttonId="seven" buttonText="7" click={ eventHandler } />
      <Boton buttonId="eight" buttonText="8" click={ eventHandler } />
      <Boton buttonId="nine" buttonText="9" click={ eventHandler } />
      <Boton buttonId="zero" buttonText="0" click={ eventHandler } />
      <Boton buttonId="decimal" buttonText="." click={ eventHandler } />

      <footer>by <a href="https://github.com/axelpelcode" target="_blank" rel="noreferrer" >Axelpelcode</a></footer>
    </div>
  );
}

export default App;
