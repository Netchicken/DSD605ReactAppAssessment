import useFetch from "./functions/useFetch";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Flex from "@react-css/flex";
//pass in the URL to the useFetch function if successful the data holds the data from the API
function App() {
  const { data, loading, error } = useFetch(
    "https://localhost:7199/api/StocksAPI"
  );
  if (error) {
    console.log(error);
  }
  //https://localhost:7199/api/StocksAPI

  //data that we are getting back from the API
  // {
  //   "stockId": "71f442a6-9a51-413b-a610-03d5ddcb4a10",
  //   "productName": "Maxxis Assegai 27.5 x 2.5 Mountain Bike Tire",
  //   "productDescription": "The Assegai tire is designed primarily for downhill racing and aggressive trail riding in mixed conditions. The knob height falls between the Minion DHR II and the Shorty. Like the Minion tires, the center knobs are heavily ramped on the leading edge to reduce rolling resistance. A small knob located between the center tread and side knobs provides a smooth transition while cornering. The Assegai offers predictable traction, even over slippery roots and rocks.",
  //   "productType": "Tire",
  //   "price": 79.99,
  //   "quantity": 100
  // },

  return (
    <Container fluid>
      {loading && <div>Loading...{error}</div>}
      {data && (
        <Flex flexDirection='row' justifyContent='center'>
          {data.map((item) => (
            <Card style={{ width: "28rem", padding: "10px" }}>
              <Card.Body>
                <h2 className='bodytext-Title'> {item.productName}</h2>
                <p>productType... {item.productType}</p>
                <p>productDescription... {item.productDescription}</p>
                <p>price ... {item.price}</p>
                <p>quantity ... {item.quantity}</p>
              </Card.Body>
            </Card>
          ))}
        </Flex>
      )}
    </Container>
  );
}
export default App;
