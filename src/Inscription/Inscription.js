import React, { Component } from 'react';
import './Inscription.css';

class Inscription extends Component {

    render() {
        return (
            <div className="container">
            <form className="form-horizontal" role="form">
                <h2>Inscription</h2>
                <div className="form-group">
                    <label for="firstName" className="col-sm-3 control-label">Prénom</label>
                    <div class="col-sm-9">
                        <input type="text" id="firstName" placeholder="Prénom" className="form-control" autofocus/>
                    </div>
                </div>
                <div className="form-group">
                    <label for="lastName" className="col-sm-3 control-label">Nom</label>
                    <div className="col-sm-9">
                        <input type="text" id="lastName" placeholder="Nom" className="form-control" autofocus/>
                    </div>
                </div>
                <div className="form-group">
                    <label for="email" className="col-sm-3 control-label">Email* </label>
                    <div className="col-sm-9">
                        <input type="email" id="email" placeholder="Email" className="form-control" name= "email"/>
                    </div>
                </div>
                <div className="form-group">
                    <label for="password" className="col-sm-3 control-label">Mot de passe*</label>
                    <div className="col-sm-9">
                        <input type="password" id="password" placeholder="Mot de passe" className="form-control"/>
                    </div>
                </div>
                <div className="form-group">
                    <label for="password" className="col-sm-3 control-label">Confirmez le mot de passe*</label>
                    <div className="col-sm-9">
                        <input type="password" id="password" placeholder="Mot de passe" className="form-control"/>
                    </div>
                </div>
                <div className="form-group">
                    <label for="birthDate" className="col-sm-3 control-label">Date de naissance*</label>
                    <div className="col-sm-9">
                        <input type="date" id="birthDate" className="form-control"/>
                    </div>
                </div>
                <div className="form-group">
                    <label for="phoneNumber" className="col-sm-3 control-label">Numéro de téléphone </label>
                    <div className="col-sm-9">
                        <input type="phoneNumber" id="phoneNumber" placeholder="Numéro de téléphone" className="form-control"/>
                        <span className="help-block">Votre numéro de téléphone ne sera divulgué nulle part </span>
                    </div>
                </div>
                <div className="form-group">
                        <label for="Height" className="col-sm-3 control-label">La taille* </label>
                    <div className="col-sm-9">
                        <input type="number" id="height" placeholder="S'il vous plaît écrivez votre taille en centimètres" className="form-control"/>
                    </div>
                </div>
                 <div className="form-group">
                        <label for="weight" className="col-sm-3 control-label">Poids* </label>
                    <div className="col-sm-9">
                        <input type="number" id="weight" placeholder="S'il vous plaît écrivez votre poids en kilogrammes" className="form-control"/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-3">Sexe</label>
                    <div className="col-sm-6">
                        <div className="row">
                            <div className="col-sm-4">
                                <label className="radio-inline">
                                    <input type="radio" name="sexe" id="femaleRadio" value="Female"/>Female
                                </label>
                            </div>
                            <div className="col-sm-4">
                                <label className="radio-inline">
                                    <input type="radio" name="sexe" id="maleRadio" value="Male"/>Male
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-9 col-sm-offset-3">
                        <span class="help-block">*Champs obligatoires</span>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary btn-block">Register</button>
            </form>
        </div>
        );
    }
}

export default Inscription;