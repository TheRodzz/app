import './App.css';
import Wheel from './components/Wheel';
import Form from './components/Form';
function App() {
  return (
    <>
      <div className='row'>
        <div className='col-md'>

          <Form />
        </div>
        <div className='col-md' >
        <div className='row-lg'></div>
        
        <div className='row'>
          <Wheel />
        </div>

        </div>
      </div>
    </>
  );
}

export default App;
