import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Client.css';
import Accueil from '../Accueil/Accueil';

class Client extends Component {

    render() {
        return (
          <div id="wrapper">
					<div id="main">
						<div class="inner">

								<header id="header">
									<a href="index.html" class="logo"><strong>Say</strong> Software</a>

								</header>

								<section>
									<h3>Recherche clients</h3>

													<form method="post" action="#">
														<div class="row uniform">

															<div class="2u 12u$(xsmall)">
																<input type="text" name="demo-name" id="demo-name" value="" placeholder="Nom du client" />
															</div>
															<div class="2u 12u$(xsmall)">
																<input type="email" name="demo-email" id="demo-email" value="" placeholder="N° du client" />
															</div>
															<div class="3.9u 12u$(xsmall)">
																<div class="select-wrapper">
																	<select name="demo-category" id="demo-category">
																		<option value="">- Catégorie -</option>
																		<option value="1">Grande entreprise</option>
																		<option value="1">Collectivité</option>
																		<option value="1">Comité d''entreprise</option>
																		<option value="1">Professions libérales</option>
																		<option value="1">PME</option>
																		<option value="1">TPE</option>
																		<option value="1">Mutuelle Retraite Prévoyance</option>
																	</select>
																</div>
															</div>
															<div class="2u 12u$(xsmall)">
																<div class="select-wrapper">
																	<select name="demo-category" id="demo-category">
																		<option value="">- Etat -</option>
																		<option value="1">Actif</option>
																		<option value="1">Prospect</option>
																		<option value="1">Résilié</option>
																		<option value="1">Fermé</option>
																		<option value="1">Décès</option>
																	</select>
																</div>
															</div>

															<div class="2u$ 12u$(xsmall)">
																<ul class="actions">
																	<li><a href="#" class="button special icon fa-search">Rechercher</a></li>
																</ul>
															</div>
														</div>
													</form>

													<div class="table-wrapper">
														<table class="alt">
															<thead>
																<tr>
																	<th>Numéro</th>
																	<th>Raison sôciale</th>
																	<th>Date d''entrée</th>
																	<th>Responsable</th>
																	<th>Catégorie</th>
																	<th>Etat</th>
																</tr>
															</thead>
															<tbody>
																<tr>
																	<td href="fiche_client.html">619</td>
																	<td>SOPEMO</td>
																	<td>01/01/2018</td>
																	<td>JEAN-LUC</td>
																	<td>PME</td>
																	<td>Fermé</td>
																</tr>
																<tr>
																	<td><a href="fiche_client.html">101</a></td>
																	<td>METALLIKIT</td>
																	<td>01/01/2018</td>
																	<td>VAISSAUD</td>
																	<td>TPE</td>
																	<td>Actif</td>
																</tr>
															</tbody>

														</table>
													</div>
													<ul class="pagination">
														<li><span class="button disabled">Préc.</span></li>
														<li><a href="#" class="page active">1</a></li>
														<li><a href="#" class="page">2</a></li>
														<li><a href="#" class="page">3</a></li>
														<li><span>&hellip;</span></li>
														<li><a href="#" class="page">8</a></li>
														<li><a href="#" class="page">9</a></li>
														<li><a href="#" class="page">10</a></li>
														<li><a href="#" class="button">Suiv.</a></li>
													</ul>
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

export default Client;
