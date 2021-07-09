import React from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

export default class Livro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numPages: null,
            pageNumber: 1
        }
        this.proximaPagina = this.proximaPagina.bind(this)
        this.paginaAnterior = this.paginaAnterior.bind(this)
    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    };

    proximaPagina() {
        this.setState({ pageNumber: this.state.pageNumber + 1 })
    }

    paginaAnterior() {
        if (this.state.pageNumber > 1) {
            this.setState({ pageNumber: this.state.pageNumber - 1 })
        } else if (this.state.pageNumber === 1){
            this.setState({ pageNumber: this.state.pageNumber = 1 })
        }
        
    }

    render() {
        const { numPages, pageNumber } = this.state;
        return (
            <section className="colDir">
                <div>
                    <nav>
                        <button onClick={this.paginaAnterior}>Prev</button>
                        <button onClick={this.proximaPagina}>Next</button>
                    </nav>
                    <Document file={this.props.livroCorreto} onLoadSuccess={this.onDocumentLoadSuccess}>
                        <Page pageNumber={pageNumber} width="600" />
                    </Document>
                </div>
                <p>Page {pageNumber} of {numPages}</p>
                <input type="number" value=""></input>
                <button type="submit">Submeter</button>
            </section>
        )
    }

}