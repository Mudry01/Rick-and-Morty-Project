import LoginForm from "../../LoginForm/LoginForm";

import styled from './LoginPage.module.css';

function LandingPage({login}) {
    return (
        <div className= {styled.container}>
            <LoginForm login={login}></LoginForm>
        </div>
    );
}

export default LandingPage;