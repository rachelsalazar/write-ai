import { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div className="Form">
        <h1>Enter Prompt</h1>
        <form>
          <textarea cols="30" rows="10"></textarea>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;