import { useState } from "react";

const Formulario = () => {
    const[peso, setPeso] = useState(0);
    const[altura,setAltura] = useState(0);
    const[] = useState(0);

    const renderizaResultado = (evento) => {
        const soma = peso / altura / altura;
        const media = soma;

        if (media <= 18.50) {
            return(
                <p>olá seu imc é {media.toFixed(2)}</p>
            )
        } else {
            return (
                <p>seu imc é {media.toFixed(2)}</p>
            )
        }
    }

    return (
        <form>
        <input type="text" placeholder="Digite aqui seu nome" />
        <input type="number" placeholder="Digite aqui seu peso"onChange={evento => setPeso(parseFloat(evento.target.value))}/>
        <input type="number" placeholder="Digite aqui sua altura"onChange={evento => setAltura(parseFloat(evento.target.value))}/>
        <button type="submit">Calcular</button>
        {renderizaResultado()}
    </form>
    )
}

export default Formulario;