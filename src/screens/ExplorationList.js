import { StyleSheet, Text, View } from 'react-native';
import { Wrapper, Status } from "@googlemaps/react-wrapper";

export default function ExplorationList() {
  return (
  <View style={styles.container}>
    <Container maxWidth="sm" style={styles.textBox}>
    <ul>
      <li>SITE ID: XYZ </li>
    </ul>
    </Container>
    </View>
  );
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3a1600',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },
  textBox: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'left',
    color: '#3a1600',
  }
});