import React, { Component } from 'react';
import './Fiche_client.css';

class Fiche_client extends Component {

    render() {
        return (
          <div id="wrapper">

        <div id="main">
          <div class="inner">

              <header id="header">
                <a href="#" class="logo">Client N° <strong>101</strong> : METALLIKIT</a>
              </header>
              <section>
                <h4>Identité </h4>
                      <form method="post" action="#">
                        <fieldset id="identite" disabled>
                          <div class="row uniform">
                                <div class="2u 12u$(xsmall)">
                              <input type="text" name="demo-email" id="demo-email" value="101" placeholder="N° du client" />
                            </div>
                            <div class="2u 12u$(xsmall)">
                              <input type="text" name="demo-name" id="demo-name" value="METALLIKIT" placeholder="Raison sociale" />
                            </div>

                            <div class="4u 12u$(xsmall)">
                              <div class="select-wrapper">
                                <select name="demo-category" id="demo-category">

                                  <option value="1">Grande entreprise</option>
                                  <option value="2">Collectivité</option>
                                  <option value="3">Comité d''entreprise</option>
                                  <option value="4">Professions libérales</option>
                                  <option value="5">PME</option>
                                  <option value="6">TPE</option>
                                  <option value="7">Mutuelle Retraite Prévoyance</option>
                                </select>
                              </div>
                            </div>
                            <div class="2u$ 12u$(xsmall)">
                              <div class="select-wrapper">
                                <select name="demo-category" id="demo-category">

                                  <option value="1">Actif</option>
                                  <option value="2">Prospect</option>
                                  <option value="3">Résilié</option>
                                  <option value="4">Fermé</option>
                                  <option value="5">Décès</option>
                                </select>
                              </div>
                            </div>
                            <div class="4u 12u$(xsmall)">
                              <input type="text" name="demo-name" id="demo-name" value="" placeholder="N° SIRET" />
                            </div>
                            <div class="4u 12u$(xsmall)">
                              <input type="text" name="demo-name" id="demo-name" value="" placeholder="N° TVA" />
                            </div>
                          </div>
                        </fieldset>
                      </form>
              </section>
              <section>
              <h4>Représentant </h4>
                      <form method="post" action="#">
                        <fieldset id="representant" disabled>
                          <div class="row uniform">
                                <div class="2u 12u$(xsmall)">
                              <input type="text" name="demo-email" id="demo-email" value="VAISSAUD" placeholder="Nom" />
                            </div>
                            <div class="2u 12u$(xsmall)">
                              <input type="text" name="demo-name" id="demo-name" value="VINCENT" placeholder="Prénom" />
                            </div>
                            <div class="4u 12u$(xsmall)">
                              <input type="text" name="demo-name" id="demo-name" value="" placeholder="Téléphone" />
                            </div>
                            <div class="4u 12u$(xsmall)">
                              <input type="text" name="demo-name" id="demo-name" value="" placeholder="Mail" />
                            </div>
                          </div>
                        </fieldset>
                      </form>
              </section>
              <section>
              <h4>Coordonnées bancaires </h4>
                      <form method="post" action="#">
                        <fieldset id="info_bancaires" disabled>
                          <div class="row uniform">
                                <div class="4u 12u$(xsmall)">
                              <input type="text" name="demo-email" id="demo-email" value="" placeholder="IBAN" />
                            </div>
                            <div class="2u 12u$(xsmall)">
                              <input type="text" name="demo-name" id="demo-name" value="" placeholder="BIC" />
                            </div>
                            <div class="4u 12u$(xsmall)">
                              <input type="text" name="demo-name" id="demo-name" value="" placeholder="Domicialiation bancaire" />
                            </div>
                            <div class="2u$ 12u$(xsmall)">
                              <div class="select-wrapper">
                                <select name="demo-category" id="demo-category" placeholder="--Mode de paiement--">
                                  <option value="1">Prélevement</option>
                                  <option value="1">Carte bancaire</option>
                                  <option value="1">Chèque</option>
                                  <option value="1">Espèces</option>
                                  <option value="1">Autre</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </fieldset>
                      </form>
              </section>
              <section >
              <h4>Adresse de facturation </h4>
                      <form method="post" action="#">
                        <fieldset id="adresse_facturation_form" disabled>
                          <div class="row uniform">
                            <div class="2u 12u$(xsmall)">
                                <label for="Numero_voie">Numéro de voie</label>
                              <input class="show" type="text" name="demo-email" id="Numero_voie" value="" placeholder="N°" />
                            </div>
                            <div class="2u 12u$(xsmall)">
                                <label for="Type_voie">Type de voie</label>
                              <input class="show" type="text" name="demo-email" id="Type_voie" value="" placeholder="Type de voie" />
                            </div>
                            <div class="2u 12u$(xsmall)">
                              <label for="Nom_voie">Nom de voie</label>
                              <input class="show" type="text" name="demo-email" id="Nom_voie" value="" placeholder="Nom de voie" />
                            </div>
                            <div class="2u 12u$(xsmall)">
                                <label for="code_postal">Code postal</label>
                              <input class="show" type="text" name="demo-name" id="code_postal" value="" placeholder="Code postal" />
                            </div>
                            <div class="2u 12u$(xsmall)">
                              <label for="ville">Ville</label>
                              <input  class="show" type="text" name="demo-name" id="ville" value="" placeholder="Ville" />
                            </div>
                            <div class="2u 12u$(xsmall)">
                              <label for="pays">Pays</label>
                              <input  class="show" type="text" name="demo-name" id="pays" value="" placeholder="Pays" />
                            </div>
                            <div class="2u 12u$(xsmall)">
                              <label for="tel">Téléphone</label>
                              <input  class="show" type="text" name="demo-name" id="tel" value="" placeholder="Téléphone" />
                            </div>
                            <div class="2u 12u$(xsmall)">
                              <label for="Email">Email</label>
                              <input  class="show" type="text" name="demo-name" id="Email" value="" placeholder="Email" />
                            </div>
                          </div>
                        </fieldset>
                      </form>
              </section>
              <section>
              <h4>Adresse de livraison</h4>
                      <form method="post" action="#">
                              <div class="6u 12u$(xsmall)">
                              <input type="checkbox" data-trigger="adresse_livraison_form" class="trigger" id="check" name="demo-copy">
                              <label for="check"><strong>Idem Adresse de facturation</strong> </label>
                            </div>
                        <fieldset id="adresse_livraison_form" disabled>
                          <div class="row uniform">
                            <div class="2u 12u$(xsmall)">
                                <label for="Numero_voie">Numéro de voie</label>
                              <input class="show" type="text" name="demo-email" id="Numero_voie" value="" placeholder="N°" />
                            </div>
                            <div class="2u 12u$(xsmall)">
                                <label for="Type_voie">Type de voie</label>
                              <input class="show" type="text" name="demo-email" id="Type_voie" value="" placeholder="Type de voie" />
                            </div>
                            <div class="2u 12u$(xsmall)">
                              <label for="Nom_voie">Nom de voie</label>
                              <input class="show" type="text" name="demo-email" id="Nom_voie" value="" placeholder="Nom de voie" />
                            </div>
                            <div class="2u 12u$(xsmall)">
                                <label for="code_postal">Code postal</label>
                              <input class="show" type="text" name="demo-name" id="code_postal" value="" placeholder="Code postal" />
                            </div>
                            <div class="2u 12u$(xsmall)">
                              <label for="ville">Ville</label>
                              <input  class="show" type="text" name="demo-name" id="ville" value="" placeholder="Ville" />
                            </div>
                            <div class="2u 12u$(xsmall)">
                              <label for="pays">Pays</label>
                              <input  class="show" type="text" name="demo-name" id="pays" value="" placeholder="Pays" />
                            </div>
                            <div class="2u 12u$(xsmall)">
                              <label for="tel">Téléphone</label>
                              <input  class="show" type="text" name="demo-name" id="tel" value="" placeholder="Téléphone" />
                            </div>
                            <div class="2u 12u$(xsmall)">
                              <label for="Email">Email</label>
                              <input  class="show" type="text" name="demo-name" id="Email" value="" placeholder="Email" />
                            </div>
                          </div>
                        </fieldset>
                      </form>
              </section>
              <section style="border-bottom: solid 5px #f56a6a;">
              <h4>Administration </h4>
                      <form method="post" action="#">
                         <fieldset disabled>
                          <div class="row uniform">
                            <span class="label" style="width: 6em;">Crée le</span>
                                <div class="3u 12u$(xsmall)">
                              <input type="date" name="demo-email" id="demo-email" value="2018-06-01" placeholder="Date de création" />
                            </div>
                            <span class="label">par</span>
                            <div class="3u$ 12u$(xsmall)">
                              <input type="text" name="demo-name" id="demo-name" value="Thierry Antoni" placeholder="PRENOM NOM" />
                            </div>
                            <span class="label">Modifié le</span>
                            <div class="3u 12u$(xsmall)">
                              <input type="date" name="demo-name" id="demo-name" value="2018-06-01" placeholder="Dernière modification le" />
                            </div>
                            <span class="label">par</span>
                            <div class="3u$ 12u$(xsmall)">
                              <input type="text" name="demo-name" id="demo-name" value="Thierry Antoni" placeholder="PRENOM NOM" />
                            </div>
                          </div>
                        </fieldset>
                      </form>
              </section>
              <section style="border-top: 0;">
                        <div class="row uniform">
                              <ul class="actions vertical">
                                <li><a id="modifie" class="button special fit">Modifier</a></li>
                              </ul>
                              <ul class="actions vertical">
                                <li><a  id="validate" class="button special fit" style="display:none;">Enregistrer</a></li>
                              </ul>
                            <script>
                            // Get the button, and when the user clicks on it, execute myFunction
                            document.getElementById("modifie").onclick = function() {cacher()};

                            /* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
                            function cacher() {
                              document.getElementById("modifie").style.display='none';
                              document.getElementById("validate").style.display='block';
                              document.getElementById('adresse_livraison_form').disabled=false;
                              document.getElementById('adresse_facturation_form').disabled=false;
                              document.getElementById('adresse_livraison_form').disabled=false;
                              document.getElementById('identite').disabled=false;
                              document.getElementById('representant').disabled=false;
                              document.getElementById('info_bancaires').disabled=false;
                               }
                            document.getElementById("validate").onclick = function() {montrer()};

                            /* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
                            function montrer() {
                              document.getElementById("validate").style.display='none';
                              document.getElementById("modifie").style.display='block';
                              var $groupe= document.getElementById("adresse_livraison_form");
                              $groupe.disabled = true;

                              document.getElementById("adresse_facturation_form").disabled=true;
                              document.getElementById("adresse_livraison_form").disabled= true;
                              document.getElementById("identite").disabled=true;
                              document.getElementById("representant").disabled=true;
                              document.getElementById("info_bancaires").disabled=true;
                            }
                            </script>
                              <ul class="actions vertical">
                                <li><a href="clients.html" class="button special fit">Retour</a></li>
                              </ul>
                        </div>
                    </section>
          </div>
        </div>
        <div id="sidebar">
          <div class="inner">

              <nav id="menu">
                <header class="major">
                  <h3>Menu</h3>
                </header>
                <ul>
                  <li><a href="index.html">Accueil</a></li>
                  <li><a href="generic.html">Clients</a></li>
                  <li><a href="elements.html">Fournisseurs</a></li>
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
                  <h3>Support</h3>
                </header>
                <p>Vous trouverez nos coordonnées ci-dessous :</p>
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

export default Fiche_client;
