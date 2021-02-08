import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// components
import Header from '../../components/header';
import Footer from '../../components/footer';

// images
import item1 from '../../../images/item1.png';
import item2 from '../../../images/item2.png';
import item3 from '../../../images/item3.png';
import imagemJussi from '../../../images/image-jussi.png';


function Main() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <div className="content">
          <div className="banner">
            <div className="container">
              <div className="coluna1">
                <div className="coluna1__titulo">
                  <span className="detalhe">//</span>
                  <h2 className="titulo">
                    CRIAMOS<br></br>
                    LOJAS QUE<br></br>
                    VENDEM MAIS.
                  </h2>
                </div>
                <span className="descricao">A Jüssi é especialista na criação de lojas usando a plataforma VTEX. Precisa criar sua loja ou migrar de plataforma?</span>
                <button className="solucoes">Veja nossas soluções</button>
              </div>
              <div className="coluna2">
                <div className="coluna2__items">
                  <div className="item1">
                    <img src={item1} alt="item1"/>
                    <button>Mais Detalhes</button>
                  </div>

                  <div className="item2">
                    <img src={item2} alt="item2"/>
                    <button>Comprar em 12x</button>
                  </div>
                  <div className="item3">
                    <img src={item3} alt="item3"/>
                    <button>Adicionar à sacola</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lojas">
            <span>Nossas principais lojas VTEX</span>
            <i className="arrowLeft"></i>
            <i className="brastemp"></i>
            <i className="compraCerta"></i>
            <i className="consul"></i>
            <i className="thebar"></i>
          </div>
          <div className="solucoes">
            <div className="container">
            <h3>
              <span className="detalhe">// </span>
              NOSSAS SOLUÇÕES
            </h3>
            <div className="produtos">
              <div className="produtos__item">
                <div className="produtos__item--imagem">
                  P1
                </div>
                <span className="produtos__item--nome">
                  Nome do Produto #1
                </span>
                <span className="produtos__item--descricao">
                  Descrição do produto #1
                </span>
                <ul>
                  <li>• Feature 1</li>
                  <li>• Feature 2</li>
                  <li>• Feature 3</li> 
                </ul>
                <button>Ver solução</button>
              </div>

              <div className="produtos__item">
              <div className="produtos__item--imagem">
                  P2
                </div>
                <span className="produtos__item--nome">
                  Nome do Produto #2
                </span>
                <span className="produtos__item--descricao">
                  Descrição do produto #2
                </span>
                <ul>
                  <li>• Feature 1</li>
                  <li>• Feature 2</li>
                  <li>• Feature 3</li> 
                </ul>
                <button>Ver solução</button>
              </div>

              <div className="produtos__item">
              <div className="produtos__item--imagem">
                  P3
                </div>
                <span className="produtos__item--nome">
                  Nome do Produto #3
                </span>
                <span className="produtos__item--descricao">
                  Descrição do produto #3
                </span>
                <ul>
                  <li>• Feature 1</li>
                  <li>• Feature 2</li>
                  <li>• Feature 3</li> 
                </ul>
                <button>Ver solução</button>
              </div>

              <div className="produtos__item">
              <div className="produtos__item--imagem">
                  P4
                </div>
                <span className="produtos__item--nome">
                  Nome do Produto #4
                </span>
                <span className="produtos__item--descricao">
                  Descrição do produto #4
                </span>
                <ul>
                  <li>• Feature 1</li>
                  <li>• Feature 2</li>
                  <li>• Feature 3</li> 
                </ul>
                <button>Ver solução</button>
              </div>
            </div>

            </div>
          </div>
          <div className="descricao">
            <div className="container">
              <div className="coluna1">
                <h3>
                  OLÁ, SOMOS A JŰSSI
                </h3>
                <h4>
                  A Jüssi é uma agência integrante do grupo global WPP que vem há 10 anos consolidando o pensamento voltado para produtos e resolução de problemas. Nosso área dedicada exclusivamente para Produtos Digitais é organizada em 6 especialidades: Product Managamenet, User Experience Design, SEO, Tecnologia, Agile e User Behavior Analytics.
                </h4>
                <button>Conheça a Jüssi</button>
              </div>
              <div className="coluna2">
                <img src={imagemJussi} alt="imagemJussi"/>
              </div>
              <div className="background"></div>
            </div>
          </div>
          <div className="contato">
            <span className="contato__titulo">
            Essa loja foi construída usando uma das nossas soluções da plataforma VTEX. tenha a sua.
            </span>
            <span className="contato__text">
            Entre em contato
            </span>
            <span className="contato__email">
            comercial@jussi.com.br
            </span>
          </div>
        </div>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default Main;
