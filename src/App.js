import logo from './logo.svg';
import './App.css';
import PaymentCard from 'react-payment-card-component'
import MiniCard from  './MiniCard';
import LargeCard from './LargeCard';


function App() {
  return (
    <div className="App">
      <header className="App-header">
    <div className="card-header">
    <div className="life-results">
      <h2>Upcoming Payments</h2>
    </div>
    <MiniCard />
    <LargeCard />  
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
