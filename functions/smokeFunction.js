const testMessages = ['Test message 1', 'Test message 2', 'Test message 3', 'Test message 4', 'Test message 5', 'Test message 6', ]

function smokeMessages(messages) {


	return 0;
}

function smokeMessages(messages) {
	return (
	  <Text>
		{messages.map(message => (
		  <li>
			{message}
		  </li>
		))}
	  </Text>
	);
  }