import React from 'react'
import LogInButton from './LogInButton';
import LogOutButton from './LogOutButton';
import Greeting from './Greeting'

class LoginControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false};
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);
    }

    handleLogoutClick() {
        this.setState({
            isLoggedIn: false
        });
    }

    handleLoginClick() {
        this.setState({
            isLoggedIn: true
        });
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        return (
            <div>
                <div className="Greetings">
                    <Greeting isLoggedIn={isLoggedIn}/>
                    <br /> <br />
                </div>
                {isLoggedIn ?
                    (<LogOutButton onClick={this.handleLogoutClick}/>)
                    :
                    (<LogInButton onClick={this.handleLoginClick}/>)
                }
            </div>
        );
    }
}

export default LoginControl;
