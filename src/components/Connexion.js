import React from 'react';

class Connexion extends React.Component {

	gotToChat = event => {
		//stop le formulaire
		event.preventDefault();
		const pseudo = this.pseudoInput.value;

		this.context.router.transitionTo(`/pseudo/${pseudo}`);
	};

	render() {
		return (
			<div className="connexionBox" onSubmit={e => this.gotToChat(e)}>
				<form className="connexion" >
					<input
						type="text"
						placeholder="Pseudo"
						required
						ref={input => {this.pseudoInput = input}}
					/>
					<button type="submit">GO</button>
				</form>
			</div>
		)
	}

	static contextTypes = {
		router: React.PropTypes.object
	}
}



export default Connexion;