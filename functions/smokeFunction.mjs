import {Text, StyleSheet} from 'react-native';

export default function SmokeMessages(messages) {
	let result = [];

	messages.map((message, index) => {
		let position = index / messages.length;
		let smokeColor = 'rgba(255,255,255,' + (position + 0.1) + ')';
		//TODO :: move text to hover left and right
		// let pad = (index % 2 == 0) ? -100 : 100;
		
		result.push(
			<Text style={{color:smokeColor, justifyContent:'center'/*, paddingLeft: pad*/, textAlign:'center', fontStyle:'italic'}}> {'\n'} {message} {'\n'} </Text>
		);

		// console.log(pad)
		// console.log(position);
		// console.log(smokeColor);
	});
	return result;
  }

// const testMessages = ['Test message 1', 'Test message 2', 'Test message 3', 'Test message 4', 'Test message 5', 'Test message 6', ]
// SmokeMessages(testMessages);