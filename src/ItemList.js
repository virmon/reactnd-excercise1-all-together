import React, { Component } from 'react';
import Item from './Item';
import PropTypes from 'prop-types';

class ItemList extends Component {
  state = {
  	isShowing: true
  }
  toggleButton = (isShowing) => {
    if(isShowing === true) {
       	this.setState({isShowing: false});
    } else {
    	this.setState({isShowing: true});
    }
  };
  render() {
      return(
        <div>
          <button onClick={() => {this.toggleButton(this.state.isShowing)}}>
              {this.state.isShowing ? 'Hide the Number of Games Played' : 'Show the Number of Games Played' }
          </button>
          <h3>List of gamers</h3>
          <ol>
            {
                this.props.users.map((user, i) => {
                  return (
                    <Item 
                      key={i} 
                      firstName={user.firstName} 
                      lastName={user.lastName}
                      username={user.username} 
                      gamesPlayed={user.gamesPlayed} isShowing={this.state.isShowing} />
                  )
                })
            }
          </ol>
        </div>
      )  
  }
}
ItemList.propTypes = {
  	firstName: PropTypes.string.isRequired,
  	lastName: PropTypes.string.isRequired,
  	username: PropTypes.string.isRequired,
	users: PropTypes.array.isRequired
}

export default ItemList;