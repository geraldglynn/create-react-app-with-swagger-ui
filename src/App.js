import React, { Component } from 'react';

// Swagger UI
import SwaggerUi from 'swagger-ui';
import 'swagger-ui/dist/swagger-ui.css';

// API Definitions
import petstoreJson from './examples/petstore.json';

const swaggerUi = SwaggerUi({ spec: petstoreJson })
const UI = swaggerUi.getComponent('App', 'root')

class App extends Component {
  render() {
    return (
      <div className="App">        
        <UI/>
      </div>      
    );
  }
}

export default App;
