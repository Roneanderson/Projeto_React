import { useState } from "react";

// função de armazenamento dos valores
const Formulario = () => {
    const[peso, setPeso] = useState(0);
    const[altura,setAltura] = useState(0);
    const[resultado, setResultadoImc] = useState(null);
    const[nome, setNome] = useState('');
    
    const alteraNome = (evento) => {
        setNome(estadoAnterior => {
            console.log(estadoAnterior)
            return evento.target.value;
        })
    }

    //função calculo 
    const calculoIMC = (evento) => {
        evento.preventDefault();
        const imc = peso / (altura * altura);
        setResultadoImc(imc)
    }

    // renderização do resultado
    const renderizaResultado = () => {
        if (resultado === null) {
            return null
        }

        if (resultado <= 18.50) {
            return(
                <p className="link">olá {nome} seu imc e {resultado.toFixed(2)}</p>
            )
        }else {
            return (
                <p className="link">seu imc e {resultado.toFixed(2)}</p>
            )
        }
    }

    // recebe do formulario os dados obtidos para os calculos
    return (
        <form className="container">
        <input type="text" className="form-input" placeholder="Digite aqui seu nome" onChange={alteraNome} />
        <input type="number" className="form-input" placeholder="Digite aqui seu peso"onChange={evento => setPeso(parseFloat(evento.target.value))}/>
        <input type="number" className="form-input" placeholder="Digite aqui sua altura"onChange={evento => setAltura(parseFloat(evento.target.value))}/>
        <button type="submit" className="btn" onClick={calculoIMC}>Calcular</button>
        {renderizaResultado()}
        <ul>
            <h2 className="title">Veja a interpretação do IMC</h2>
            {[
            <>
                <p className="itens">18.50 - 24.99: Peso Normal.</p>
                <p className="itens">25.00 - 29.99: Pré-Obesidade.</p>
                <p className="itens">30.00 - 34.99: Obesidade Grau I.</p>
                <p className="itens">35.00 - 39.99: Obesidade Grau II.</p>
                <p className="itens">≥40.00: Obesidade Grau III.</p>
                </>
            ].map(item => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    </form>
    )
}

export default Formulario;