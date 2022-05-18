import { Component } from 'react';
import Form from './components/form/Form';
import Results from './components/results/Results';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Form />
        <Results />
      </div>
    );
  }
}

export default App;
