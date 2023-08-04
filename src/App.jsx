import { Exemplo } from './Exemplo'

export default function App() {
    const listaAlunos = [{nome: "Rebeca", idade: 15, cidade: "Batayporã"}, {nome: "Mirella", idade: 16, cidade: "Batayporã"}, {nome: "Thaissa", idade: 16, cidade: "Batayporã"}, {nome: "Laryssa", idade: 17, cidade: "Batayporã"} ];
    return (
      <div>
        <h1>Hello Word!</h1>
        <Exemplo lista={listaAlunos}/>
      </div>
  
    );
  }