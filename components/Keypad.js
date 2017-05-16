import React from 'react'

// class Keypad extends React.Component{


	// input(){
	// 	console.log('Entering password...')
	// }

// 	render(){
// 		return (
// 			<div>
// 				<input type="password" onKeyUp={this.input}/>
// 			</div>
// 		)
// 	}
// }

function Keypad(){

	function input(){
		console.log('Entering password...')
	}

	return (
		<div>
			<input type="password" onKeyUp={input}/>
		</div>
	)
}

export default Keypad


//--------------------------------

