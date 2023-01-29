export default function smokeMessages(messages) {
	let result = ''

	messages.map((message, index) => {
		let position = index / messages.length;
		let smokeColor = 'rgba(255,255,255,' + (position * 255) + ')'
		let pad = (index % 2 == 0 ? -100 : 100)
		result += '<Text style={{marginLeft:' + pad + 'color:' + smokeColor + '}}>' + message + '</Text>' + '"{\n}"' + '"{\n}"'
		// console.log(result)
	});
	return(result)
  }

// const testMessages = ['Test message 1', 'Test message 2', 'Test message 3', 'Test message 4', 'Test message 5', 'Test message 6', ]
// smokeMessages(testMessages);