import './App.css';
import Boton from './componentes/botones';
import { useState } from 'react';
import { evaluate, format } from 'mathjs';

function App() {

  const [ text, setText ] = useState({ in:"0", count:"", out:"" });

  function eventHandler( val ){
    const regex = [
      //regex del caso "0":
      /^0$|\D0$/, 
      //regex del caso ".":
      /[.]$|[.]\d*$/, 
      //regex del caso operaciones:
      /[+,/,*]$/, 
      /\D+-*$/,
      /[+,/,*]/,
      //regex del 0 inicial
      /^0$/
    ];
    switch( val ){
      case "AC":
        setText({...text, 
          in:"0", 
          count:"", 
          out:""});
        break;
      case "=":
        setText({ ...text, 
          in: format(evaluate(text.count), 15), 
          count: format(evaluate(text.count), 15), 
          out: text.count + val + format(evaluate(text.count), 15)
         });
        break;
      case "+":
      case "*":
      case "/":
        if(regex[2].test(text.count)){
          setText({ ...text, 
            in: val,
            count: text.count.replace(regex[2], val),
            out: text.count.replace(regex[2], val)
          }) 
        } else if (regex[3].test(text.count)){
          setText({ ...text, 
            in: val,
            count: text.count.replace(regex[3], val),
            out: text.count.replace(regex[3], val)
          }) 
        } else {
          setText({ ...text, 
            in: val, 
            count: text.count + val, 
            out: text.count + val});
          }
        break;
      case "-":
        if(text.count.match(regex[3])==="--"){
          console.log("Invalud value: ---")
        } else if (/\D-+$/.test(text.count)){
          setText({ ...text, 
            in: val,
            count: text.count.replace(/\D-+$/, val),
            out: text.count.replace(/\D-+$/, val)
          }) 
        } else {
          setText({ ...text, 
            in: val, 
            count: text.count + val, 
            out: text.count + val});
          }
        break;
      case "0":
        if(regex[0].test(text.count)){
          console.log("Invalid value: 00")
        } else if (/[^0]/.test(text.count)){
          setText({ ...text, 
            in: text.in + val, 
            count: text.count + val, 
            out: text.count + val});
          } else {
            setText({ ...text, 
              in: val, 
              count: text.count + val, 
              out: text.count + val});
          }
        break;
      case ".":
        regex[1].test(text.count) ?
          console.log("Invalid value: ..") :
          setText({ ...text, 
            in: text.in + val, 
            count: text.count + val, 
            out: text.count + val
          });
        break;
      default:
        if(regex[4].test(text.in)){ 
          setText({ ...text, 
            in: val, 
            count: text.count + val , 
            out: text.count + val
        });
      } else if (regex[5].test(text.in)){
        setText({ ...text, 
          in: val, 
          count: text.count + val, 
          out: text.count + val
      });
      } else if (/=.*$/.test(text.out)){
        setText({ ...text, 
          in: val, 
          count: val, 
          out: val
      });
      } else {
          setText({ ...text, 
            in: text.in + val, 
            count: text.count + val, 
            out: text.count + val
          });
        }
    }
    // console.clear();

    console.log(text.in, text.count, text.out);
  };

  return (
    <div className="App">
      <div className="D-output">{ text.out }</div>
      <div id="display" className="D-input" >{ text.in }</div>
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
