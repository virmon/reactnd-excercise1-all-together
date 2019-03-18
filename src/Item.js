import React from 'react';

const Item = (props) => {
	return(
    	<li>
      		{
              `	${props.firstName}  
      			${props.lastName} |
				${props.username} played 
				${props.isShowing ? props.gamesPlayed : `*`} games` }
      	</li>
    )
}

export default Item;