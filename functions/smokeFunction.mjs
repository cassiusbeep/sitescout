import {Text} from 'react-native';

export default function smokeMessages(messages) {
	let result = [];

	messages.map((message, index) => {
		let position = index / messages.length;
		let smokeColor = 'rgba(255,255,255,' + (position + 0.1) + ')'
		//make the text pushed left and right of center to look like a conversation
		// let pad = (index % 2 == 0 ? '' : 'justifyContent:flex-start')
		
		result.push(
			<Text style={{color:smokeColor, justifyContent:'center'}}> {'\n'} {message} {'\n'} </Text>
		);

		console.log(result)
		// console.log(position);
		// console.log(smokeColor);
	});
	return result;
  }

// const testMessages = ['Test message 1', 'Test message 2', 'Test message 3', 'Test message 4', 'Test message 5', 'Test message 6', ]
// smokeMessages(testMessages);