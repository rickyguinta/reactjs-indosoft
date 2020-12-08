import React, { Component } from "react";
 
class Home extends Component {
  render() {
    return (
      <div>
        <h2>Task 1</h2>
        <p>(90 minutes) Please create a single page application using React JS and one CSS framework, which is “Who to follow” in Twitter, but only the main features like described below:
	  	<ul>
			<li>Display five (5) recommended users on page load.</li>
			<li>Display the avatar, name, and Twitter username of those recommended users.</li>
			<li>Clicking the user name or Twitter user name should redirect us to the detail page.</li>
			<li>Display a “Refresh” button to show the other five (5) recommended users and replace the current recommended users without reload the page.</li>
			<li>Display an “X” button to remove the recommended user and replace that user with another recommended user without reload the page. No duplicate users in current user list allowed.</li>
	    </ul>
	  </p>
      </div>
    );
  }
}
 
export default Home;