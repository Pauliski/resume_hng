import './App.css';
import Form from './components/Form/Form';
import Navbar from './components/Navbar/Navbar';
import RessumeBody from './components/ResumeBody/ResumeBody';
import Sidebar from './components/Sidebar/Sidebar';
import Resume from './pages/Resume/Resume';

function App() {
  return (
    <div className="App">
     {/* <Navbar />
     <Form /> */}
    <Resume />
    </div>
  );
}

export default App;
