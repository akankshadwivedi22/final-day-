import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage.tsx';
import ListItem from './ListItem.tsx';
import NewPlan from './NewPlan.tsx';


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/old-plan" element={<ListItem />} />
      <Route path="/new-plan" element={<NewPlan />} />

    </Routes>
  </Router>
  );
}

export default App;
