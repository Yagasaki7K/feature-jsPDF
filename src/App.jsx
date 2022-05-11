import { jsPDF } from "jspdf";

import './App.css'

function exampleSavePdf() {
    "use strict";
    const doc = new jsPDF();
    let invoicing = '3.200,16'
    let startSessions = '144'
    let visualizations = '1198'
    let itensCart = '1'
    let itensTotal = '16'
    let itensClick = '0'

    doc.text(`Total de Faturamento: ${invoicing}`, 10, 10);
    doc.text(`Sessões Iniciadas: ${startSessions}`, 10, 20);
    doc.text(`Total de Visualizações: ${visualizations}`, 10, 30);
    doc.text(`Média Itens no Carrinho: ${itensCart}`, 10, 40);
    doc.text(`Total de Itens no Carrinho: ${itensTotal}`, 10, 50);
    doc.text(`Total de Cliques no logo: ${itensClick}`, 10, 60);
    doc.line(20, 30, 150, 30)
    // doc.line(distancia da lateral, posição x, largura, posição y)

    doc.addImage(logo, 'JPEG', 150, 15, 40, 40);
    // doc.addImage(logo, 'JPEG', lateral, altura, larguradaimagem, alturadaimagem);
    doc.save("a4.pdf");
}

function App() {

    return (
        <div className="App">
            <form>
                <input type="button" value="Save PDF" onClick={exampleSavePdf} />
            </form>
        </div>
    )
}

export default App
