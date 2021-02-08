import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);

        this.ref = React.createRef();

        this.state = {

        };
    }

    render() {

        return (
            <footer className="footer">
                <div className="container">
                    <h2 className="titulo">
                        <span className="detalhe">//</span>
                        RECEBA NOVIDADES DA NOSSA ÁREA
                        <br></br>
                        DE PRODUTOS DIGITAIS.
                    </h2>
                    <form>
                        <input type="text" name="email" size="40" className="email-newsletter" placeholder="Digite seu e-mail" autoComplete="off" required="required" />
                        <input type="submit" className="submit-newsletter" value="CADASTRAR" />
                    </form>
                </div>
                <div className="footer__bottom">
                    <i className="wppCompany"></i>
                    <nav className="social">
                        <i className="facebook"></i>
                        <i className="instagram"></i>
                        <i className="linkedin"></i>
                    </nav>
                </div>
            </footer>
        );
    }
}

export default Footer;