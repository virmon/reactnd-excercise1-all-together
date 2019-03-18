import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CreateNewUser extends Component {
  	state = {
    	firstName: '',
      	lastName: '',
      	username: '',
      	gamesPlayed: 0
    }
	
	handleChange = event => {
      this.setState({ 
        	[event.target.name]: event.target.value
      });
    }

	onAddUser = event => {
      event.preventDefault();
      var user = {
      	firstName: this.state.firstName,
        lastName: this.state.lastName,
        username: this.state.username,
        gamesPlayed: 0
      }
      this.props.onAddUser(user);
    };

	inputIsEmpty = () => {
      return this.state.firstName === '' || this.state.lastName === '' || this.state.username === '';
    }

	render() {
		return(
        	<div>
          		<form onSubmit={this.onAddUser}>
          			<input 
             			type="text"
             			placeholder="First name" 
             			name="firstName"
             			value={this.state.firstName} 
            			onChange={this.handleChange} />
					<input 
             			type="text"
             			placeholder="Last name"
						name="lastName"
             			value={this.state.lastName} 
            			onChange={this.handleChange} />
          			<input 
             			type="text"
             			placeholder="username" 
						name="username"
             			value={this.state.username} 
            			onChange={this.handleChange} />
					<button
                        disabled={this.inputIsEmpty()}
                    >
                      	Add New User
                 	</button>
          		</form>
          	</div>
        )    
    }
}

CreateNewUser.propTypes = {
	onAddUser: PropTypes.func.isRequired
}

export default CreateNewUser;