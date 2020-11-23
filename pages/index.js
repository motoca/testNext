import { useState } from 'react';


function Home() {
    function CapsLock(props) {
        const textoInserido = props.children;
        const textoEmCapslock = textoInserido.toUpperCase();
        return <div>{textoEmCapslock}</div>
    }

    function Contador() {
        const [contador, setContador] = useState(1);
    
        function adicionarContador(){
            setContador(contador + 1);
        }
    
        return (
            <div>
                <div>{contador}</div>
                <button onClick={adicionarContador}>Adicionar</button>
            </div>
        )
    }
    
    return (
        <div>
            <h1>Home</h1>
            <CapsLock>"teste de maiuscula xx"</CapsLock>
            <Contador />
        </div>
    )

}

export default Home