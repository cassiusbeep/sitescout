import { Wrapper, Status } from "@googlemaps/react-wrapper";

export default function ExplorationMap() {}

const render = (status) => {
    return <h1>{status}</h1>;
  };
  
<View style={styles.container}>
<Wrapper apiKey={"YOUR_API_KEY"} render={render}>
    <YourComponent/>
  </Wrapper>
    </View>

  