import React from 'react'

function EyesOnMe(){
	
	function haveAttention(){
		console.log('Good!')
	}

	function getAttention(){
		console.log('Hey! Eyes on me!')
	}

	return (
		<div>
		  <button onFocus={haveAttention} onBlur={getAttention}/>
		</div>
	)
}

export default EyesOnMe