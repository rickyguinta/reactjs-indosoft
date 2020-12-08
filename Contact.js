import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";

 
class Contact extends Component {
	constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
	componentDidMount() {
      fetch("https://randomuser.me/api/?results=10")
        .then(res => res.json())
        .then(parsedJSON => parsedJSON.results.map(data => (
          {
            id: `${data.id.name}`,
            firstName: `${data.name.first}`,
            lastName: `${data.name.last}`,
            location: `${data.location.state}, ${data.nat}`,
			login:`${data.login.username}`,
            thumbnail: `${data.picture.large}`,

          }
        )))
        .then(items => this.setState({
          items,
          isLoaded: false
        }))
        .catch(error => console.log('parsing failed', error))
    }

  render() {
	const {items } = this.state;
    return (
      <div>
		<div className="boxWhite">
         <h1>Who To Follow   <NavLink to="/indosoft"><button>
		<Route exact path="/indosoft" component={Contact}/>
		Refresh</button></NavLink></h1>
         {
           items.length > 0 ? items.map(item => {
           const {id, firstName, lastName, location, login,thumbnail} = item;
            return (

              <div key={id} className="bgCircle"><a href="">X</a> 
              	<center><img src={thumbnail} alt={firstName} className="circle"/></center><br/>
              	<div className="ctr">
                <b>{firstName} {lastName}</b><br/>
                {location}<br/>
				@{login}<br/>
              	</div>

              </div>
              	  );
            }) : null
          }
       </div>
      </div>
    );
  }
}
 
export default Contact;