import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';



import './signIn-signUp.styles.scss';


const SignInAndSignUpPage = () => (
    <div className='signIn-signUp'>
        <SignIn/>
        <SignUp />

    </div>
);

export default SignInAndSignUpPage;