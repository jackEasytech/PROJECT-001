import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './Accueil.css';
import Generic from '../Generic/Generic';
import Client from '../Client/Client';
import Elements from '../Elements/Elements';

class Accueil extends Component {

    render() {
        return (
    <div id="wrapper">

        <div id="main">
          <div className="inner">
              <header id="header">
                <a href="#"  className="logo"><strong>Say</strong> Software</a>

              </header>
              <section className="tiles">
              <article className="style1">
                <span className="image">
                  <img src="images/pic01.jpg" alt="" />
                </span>
                <a href="#"  onClick={() => ReactDOM.render(<Client />, document.getElementById('root'))}>
                  <h2>Clients</h2>
                  <div className="content">
                    <p>Retrouvez tous vos clients</p>
                  </div>
                </a>
              </article>
              <article className="style2">
                <span className="image">
                  <img src="images/pic02.jpg" alt="" />
                </span>
                <a href="#"  onClick={() => ReactDOM.render(<Elements />, document.getElementById('root'))}>
                  <h2>Produits</h2>
                  <div className="content">
                    <p>Tous vos produits à porter de clic</p>
                  </div>
                </a>
              </article>

              <article className="style3">
                <span className="image">
                  <img src="images/pic03.jpg" alt="" />
                </span>
                <a href="#"  onClick={() => ReactDOM.render(<Generic />, document.getElementById('root'))}>
                  <h2>Extractions</h2>
                  <div className="content">
                    <p>Exportez toutes vos données au format Excel</p>
                  </div>
                </a>
              </article>

              <article className="style1">
                <span className="image">
                  <img src="images/pic09.jpg" alt="" />
                </span>
                <a href="#"  onClick={() => ReactDOM.render(<Generic />, document.getElementById('root'))}>
                  <h2>Commandes</h2>
                  <div className="content">
                    <p>Passez vos commandes et retrouvez l''historique</p>
                  </div>
                </a>
              </article>
              <article className="style5">
                <span className="image">
                  <img src="images/pic10.jpg" alt="" />
                </span>
                <a href="generic.html">
                  <h2>Factures</h2>
                  <div className="content">
                    <p>Retrouvez toutes vos factures</p>
                  </div>
                </a>
              </article>
              <article className="style6">
                <span className="image">
                  <img src="images/pic11.jpg" alt="" />
                </span>
                <a href="#"  onClick={() => ReactDOM.render(<Generic />, document.getElementById('root'))}>
                  <h2>Stocks</h2>
                  <div className="content">
                    <p>Vous permet de gérer votre stock</p>
                  </div>
                </a>
              </article>
            </section>






          </div>
        </div>

        <div id="sidebar">
          <div className="inner">


              <nav id="menu">
                <header className="major">
                  <h2>Menu</h2>
                </header>
                <ul>
                  <li><a >Accueil</a></li>
                  <li><a href="#"  onClick={() => ReactDOM.render(<Client />, document.getElementById('root'))}>Clients</a></li>
                  <li><a href="#"  onClick={() => ReactDOM.render(<Generic />, document.getElementById('root'))}>Fournisseurs</a></li>
                  <li>
                    <span className="opener">Gestion des ventes</span>
                    <ul>
                      <li><a href="#">Commandes</a></li>
                      <li><a href="#">Bons de livraisons</a></li>
                      <li><a href="#">Facturations</a></li>
                    </ul>
                  </li>
                  <li>
                    <span className="opener">Logistique</span>
                    <ul>
                      <li><a href="#">Fabrications</a></li>
                      <li><a href="#">Produits</a></li>
                      <li><a href="#">Stocks</a></li>
                    </ul>
                  </li>
                  <li>
                    <span className="opener">Comptabilité</span>
                    <ul>
                      <li><a href="#">Saisies</a></li>
                      <li><a href="#">Comptes</a></li>
                      <li><a href="#">Attente</a></li>
                      <li><a href="#">Grand livre</a></li>
                    </ul>
                  </li>
                  <li>
                    <span className="opener">Administration</span>
                    <ul>
                      <li><a href="#">Extractions</a></li>
                      <li><a href="#">Clôture de l''exercice</a></li>
                      <li><a href="#">Tables de références</a></li>
                    </ul>
                  </li>
                </ul>
              </nav>


              <section>
                <header className="major">
                  <h2>Support</h2>
                </header>
                <ul className="contact">
                  <li className="fa-envelope-o"><a href="#">information@untitled.tld</a></li>
                  <li className="fa-phone">(000) 000-0000</li>
                  <li className="fa-home">Avenue rouget de Lisle<br />
                  Vitry-sur-Seine, 94400</li>
                </ul>
              </section>

              <footer id="footer">
                <p className="copyright">&copy; Say Enterprise. All rights reserved. Demo Images: <a href="https://unsplash.com">Unsplash</a>. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
              </footer>

          </div>
        </div>

    </div>
        );
    }
}

export default Accueil;
