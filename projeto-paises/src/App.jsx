import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import * as json from '../src/assets/paises.json'

import "./App.css";

function App() {
  const [paises, setPaises] = useState([]);
  const [paisesFavoritados, setPaisesFavoritados] = useState([])
  const [paisesOrg, setPaisesOrg] = useState([])


  const filtrarPaises = async (region) => {
    
    setPaises(paisesOrg)
    setPaises(paisesOrg.filter(pais => pais.region == region))

  }

  const chamarApiPaises = async () => {
    try {
      const response = await fetch("../src/assets/paises.json");
      response.json().then((res) => {
        setPaisesOrg(res)
        setPaises(res);
      });
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    chamarApiPaises();
  }, []);
  const Pais = (item, index) => {
    return (
      <div key={index} className="paisDiv" onClick={() => {
        if (item.favorite == undefined) item.favorite = true;
        else {

          item.favorite = !item.favorite;
        }
        if (item.favorite) {

          setPaisesFavoritados([...paisesFavoritados, item])
          setPaises(paises.filter(pais => pais !== item))
        }
        else {
          console.log(item)
          setPaises([...paises, item])
          setPaisesFavoritados(paisesFavoritados.filter(pais => pais !== item))
        }


      }
      }>
        <div>
          <h1>{item.name}</h1>
          <p>{`População ${item.population}`}</p>
        </div>
        <img src={item.flag} alt={item.name} width={100} height={70} />
        <div>
          {item.favorite != true ? (
            <img src='src\assets\heartVoid.svg' />
          ) : (
            <img src='src\assets\heartFill.svg' />
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      <div style={{ flex: 1, flexDirection: 'row' }}>
        <h1>Países</h1>
        <button onClick={() => filtrarPaises('Africa')}>Africa</button>
        <button onClick={() => filtrarPaises('Europe')}>Europa</button>
        <button onClick={() => filtrarPaises('Americas')}>Americas</button>
        <button onClick={() => filtrarPaises('Asia')}>Asia</button>
        <button onClick={() => filtrarPaises('Oceania')}>Oceania</button>
        <button onClick={() => chamarApiPaises()}>Todos</button>
      </div>
      <div className="listas">
        <div>
          <h1>{paises.length}</h1>
          {paises?.map((pais, index) => Pais(pais, index))}
        </div>
        <div>
          <h1>{paisesFavoritados.length}</h1>
          {paisesFavoritados?.map((pais, index) => Pais(pais, index))}
        </div>
      </div>
    </>
  );
}

export default App;
