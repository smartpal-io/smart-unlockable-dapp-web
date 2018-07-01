import React, { Component } from 'react'

import getWeb3 from './utils/getWeb3'

import 'react-vertical-timeline-component/style.min.css';

import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      history:[],
      web3: null
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  componentWillMount() {
    // Get network provider and web3 instance.
    // See utils/getWeb3 for more info.

    getWeb3
    .then(results => {
      this.setState({
        web3: results.web3
      })

    })
    .catch(() => {
      console.log('Error finding web3.')
    })
  }

  /**** VIEW *****/

  render() {

    return (
      <div className="App">
        <nav className="navbar pure-menu pure-menu-horizontal">
          <h1>Default Dapp-web</h1>
          <h2>Decentralized web application</h2>
        </nav>

        <main className="container">
          <div className="pure-g">
            <div className="pure-u-1-1">
                {this.renderDefaultInformation()}
            </div>
          </div>
        </main>
      </div>
    );
  }

  renderDefaultInformation = () => {
    return <div>
        <p>Default information</p>
        <button onClick={this.defaultAction.bind(this)}>Trigger default action</button>
    </div>
  }

  /**** COMMON ACTION ****/

  handleSubmit(event) {
    event.preventDefault();
  }

  defaultAction(event){
    alert("default action triggered");

  }
}

export default App
