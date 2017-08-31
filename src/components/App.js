import React from 'react';
import Message from './Message';
import Formulaire from './Formulaire';

class App extends React.Component {

	state = {
		messages: {}
	}

	addMessage = message => {
		//copie state.message
		const messages = {...this.state.messages};
		const timestamp = Date.now();
		messages[`message-${timestamp}`] = message;
		this.setState({messages});

	};

	render() {
		return (
			<div className="box">
				<div>
					<div className="messages" >
						<Message pseudo={this.props.params.pseudo} />
					</div>
					<Formulaire
						addMessage={this.addMessage}
						pseudo={this.props.params.pseudo}
						length="140"
					/>
				</div>
			</div>
		)
	}
}

export default App;
