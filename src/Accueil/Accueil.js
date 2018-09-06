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
          <div class="inner">
              <header id="header">
                <a href="#"  class="logo"><strong>Say</strong> Software</a>

              </header>
              <section class="tiles">
              <article class="style1">
                <span class="image">
                  <img src="images/pic01.jpg" alt="" />
                </span>
                <a href="#"  onClick={() => ReactDOM.render(<Client />, document.getElementById('root'))}>
                  <h2>Clients</h2>
                  <div class="content">
                    <p>Retrouvez tous vos clients</p>
                  </div>
                </a>
              </article>
              <article class="style2">
                <span class="image">
                  <img src="images/pic02.jpg" alt="" />
                </span>
                <a href="#"  onClick={() => ReactDOM.render(<Elements />, document.getElementById('root'))}>
                  <h2>Produits</h2>
                  <div class="content">
                    <p>Tous vos produits à porter de clic</p>
                  </div>
                </a>
              </article>

              <article class="style3">
                <span class="image">
                  <img src="images/pic03.jpg" alt="" />
                </span>
                <a href="#"  onClick={() => ReactDOM.render(<Generic />, document.getElementById('root'))}>
                  <h2>Extractions</h2>
                  <div class="content">
                    <p>Exportez toutes vos données au format Excel</p>
                  </div>
                </a>
              </article>

              <article class="style1">
                <span class="image">
                  <img src="images/pic09.jpg" alt="" />
                </span>
                <a href="#"  onClick={() => ReactDOM.render(<Generic />, document.getElementById('root'))}>
                  <h2>Commandes</h2>
                  <div class="content">
                    <p>Passez vos commandes et retrouvez l''historique</p>
                  </div>
                </a>
              </article>
              <article class="style5">
                <span class="image">
                  <img src="images/pic10.jpg" alt="" />
                </span>
                <a href="generic.html">
                  <h2>Factures</h2>
                  <div class="content">
                    <p>Retrouvez toutes vos factures</p>
                  </div>
                </a>
              </article>
              <article class="style6">
                <span class="image">
                  <img src="images/pic11.jpg" alt="" />
                </span>
                <a href="#"  onClick={() => ReactDOM.render(<Generic />, document.getElementById('root'))}>
                  <h2>Stocks</h2>
                  <div class="content">
                    <p>Vous permet de gérer votre stock</p>
                  </div>
                </a>
              </article>
            </section>






          </div>
        </div>

        <div id="sidebar">
          <div class="inner">


              <nav id="menu">
                <header class="major">
                  <h2>Menu</h2>
                </header>
                <ul>
                  <li><a >Accueil</a></li>
                  <li><a href="#"  onClick={() => ReactDOM.render(<Client />, document.getElementById('root'))}>Clients</a></li>
                  <li><a href="#"  onClick={() => ReactDOM.render(<Generic />, document.getElementById('root'))}>Fournisseurs</a></li>
                  <li>
                    <span class="opener">Gestion des ventes</span>
                    <ul>
                      <li><a href="#">Commandes</a></li>
                      <li><a href="#">Bons de livraisons</a></li>
                      <li><a href="#">Facturations</a></li>
                    </ul>
                  </li>
                  <li>
                    <span class="opener">Logistique</span>
                    <ul>
                      <li><a href="#">Fabrications</a></li>
                      <li><a href="#">Produits</a></li>
                      <li><a href="#">Stocks</a></li>
                    </ul>
                  </li>
                  <li>
                    <span class="opener">Comptabilité</span>
                    <ul>
                      <li><a href="#">Saisies</a></li>
                      <li><a href="#">Comptes</a></li>
                      <li><a href="#">Attente</a></li>
                      <li><a href="#">Grand livre</a></li>
                    </ul>
                  </li>
                  <li>
                    <span class="opener">Administration</span>
                    <ul>
                      <li><a href="#">Extractions</a></li>
                      <li><a href="#">Clôture de l''exercice</a></li>
                      <li><a href="#">Tables de références</a></li>
                    </ul>
                  </li>
                </ul>
              </nav>


              <section>
                <header class="major">
                  <h2>Support</h2>
                </header>
                <ul class="contact">
                  <li class="fa-envelope-o"><a href="#">information@untitled.tld</a></li>
                  <li class="fa-phone">(000) 000-0000</li>
                  <li class="fa-home">Avenue rouget de Lisle<br />
                  Vitry-sur-Seine, 94400</li>
                </ul>
              </section>

              <footer id="footer">
                <p class="copyright">&copy; Say Enterprise. All rights reserved. Demo Images: <a href="https://unsplash.com">Unsplash</a>. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
              </footer>

          </div>
        </div>

    </div>
        );
    }
}

export default Accueil;
