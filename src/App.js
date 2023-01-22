import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">

{/* sidebar */}
      <div className='sidebar'>
        <Sidebar></Sidebar>
      </div>
      
{/*  dashboard */}
      <div className='dashboard'>
        <Dashboard></Dashboard>
      </div>
    </div>
  );
}

export default App;
