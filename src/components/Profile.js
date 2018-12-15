import './Profile.css';
import React from 'react';

class Profile extends React.PureComponent {
  render() {
    return (
      <div className="profile">
        <div>
          <img className="profile-pic"
            alt="theRealSheng"
            src="https://avatars1.githubusercontent.com/u/33520357?v=4" />
        </div>
        <div>
          <h1>theRealSheng</h1>
        </div>
      </div>
    );
  }
}

export default Profile;