import React from 'react';
import GuestGreeting from './GuestGreeting';
import UserGreeting from './UserGreeting';

function Greeting(props) {
    return(
        <div>
            {props.isLoggedIn ?
                (<div>Hello User</div>)
                :
                (<div>Hi, Please Log In</div>)
            }
        </div>
    );
}

export default Greeting;

