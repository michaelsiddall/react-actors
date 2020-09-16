import React, { Component } from 'react';

class Contact extends Component {
    state = {
        firstName: 'Mike',
        lastName: 'Siddall',
        bestImpression: 'Scooby-Doo'
        
      }

      onFirstNameChange = (event) => {
        console.log('event.target', event.target);
        console.log('event.target.value', event.target.value);
    
        this.setState({
          firstName: event.target.value
        });
      }

      onLastNameChange = (event) => {
        console.log('event.target', event.target);
        console.log('event.target.value', event.target.value);
    
        this.setState({
          lastName: event.target.value
        });
      }

      onBestImpressionChange = (event) => {
        console.log('event.target', event.target);
        console.log('event.target.value', event.target.value);
    
        this.setState({
          bestImpression: event.target.value
        });
      }
    render() {
        return(
        <div>
            <h2>Contact</h2>
            <input type="text" placeholder="First Name" onChange={this.onFirstNameChange} />
            <input type="text" placeholder="Last Name" onChange={this.onLastNameChange} />
            <input type="text" placeholder="Best Impression" onChange={this.onBestImpressionChange} />
            <button>Join Us!</button>
            <div>{this.state.firstName} {this.state.lastName}'s best impression is {this.state.bestImpression}</div>
            <p>Phone:  1-800-WE-REACT</p>
            <p> Email:  info@ReactActors.com</p>
            
        </div>
        );
    }
}

export default Contact;