import logo from './logo.svg';
import './App.css';
import PaymentCard from 'react-payment-card-component'


function App() {
  return (
    <div className="App">
      <header className="App-header">
    <div className="card-header">
      <h2>Dashboard</h2>
    <div className="card-pay">    
      <PaymentCard
      bank="itau"
      model="personnalite"
      type="black"
      brand="mastercard"
      number="4111111111111111"
      cvv="202"
      holderName="Owen Lars"
      expiration="12/20"
      flipped={false}
    />
    </div>
    </div>
      </header>
    </div>
  );
}

export default App;
