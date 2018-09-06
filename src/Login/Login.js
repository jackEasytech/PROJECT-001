import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Photo from './Photo.png';
import './Login.css';
import Inscription from '../Inscription/Inscription';
import Accueil from '../Accueil/Accueil';

class Login extends Component {

  render() {
    return (
        <div className="container" style={{marginTop:'40px'}}>
            <div className="row">
			<div className="col-sm-6 col-md-11 col-md-offset-1">
				<div className="panel panel-default login_panel">
					<div className="panel-body">

						<form>
							<fieldset>
								<div className="row pull-center">
									<div className="center-block">
                    <header className="title_login">
                          <h2>Authentification</h2>
                    </header>
									</div>
								</div>
								<div className="row">
									<div className="col-sm-12 col-md-10  col-md-offset-1 ">
										<div className="form-group">
											<div className="input-group">
												<span className="input-group-addon">
													<i className="glyphicon glyphicon-user"></i>
												</span>
												<input className="form-control" placeholder="Username" name="loginname" type="text" autoFocus/>
											</div>
										</div>
										<div className="form-group">
											<div className="input-group">
												<span className="input-group-addon">
													<i className="glyphicon glyphicon-lock"></i>
												</span>
												<input className="form-control" placeholder="Password" name="password" type="password"/>
											</div>
										</div>
										<div className="form-group">
											<input onClick={() => ReactDOM.render(<Accueil />, document.getElementById('root'))} type="button" className="btn btn-lg btn-primary btn-block" value="Se connecter"/>
										</div>
									</div>
								</div>
							</fieldset>
						</form>
					</div>
					<div className="panel-footer ">
						Vous n''avez pas de compte! <a href="#" onClick={() => ReactDOM.render(<Inscription />, document.getElementById('root'))}> Inscrivez-vous ici </a>
					</div>
                </div>
			</div>
		</div>
        </div>
    );
  }
}

export default Login;
