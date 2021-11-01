import React from 'react'
import './App.css';

class App extends React.Component {
  constructor(){
    super()
  }

  render() {
    return (
      <div className="App">
        <div>
          { /* Loop over the data and use the Thumbnail component to create the thumbnails at the top of the page */ }
          { /* Show the details of the chosen movie using Movie component */ }
        </div>
      </div>
    );
  }
}

export default App;
