import logo from "./logo.svg";
import "./App.css";
// import MiniCard from "./MiniCard";
import LargeCard from "./LargeCard";
import Sidebar from './Sidebar'

const items = [
  { name: 'home', label: 'Home' },
  {
    name: 'billing',
    label: 'Billing',
    items: [
      { name: 'statements', label: 'Statements' },
      { name: 'reports', label: 'Reports' },
    ],
  },
  {
    name: 'settings',
    label: 'Settings',
    items: [{ name: 'profile', label: 'Profile' }],
  },
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <LargeCard/>

      </header>
    </div>
  );
}

export default App;
