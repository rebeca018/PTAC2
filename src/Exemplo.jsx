import { Dev } from './Dev'

export function Exemplo({lista}) {
    return (
        <div>
            {lista.map(aluno=>(
                <ul>
                    <li>{aluno.nome}, {aluno.idade} anos, Mora em {aluno.cidade}</li>
                </ul>
            ))}

            <Dev nome="Rebeca"/>
        </div>
    );
}