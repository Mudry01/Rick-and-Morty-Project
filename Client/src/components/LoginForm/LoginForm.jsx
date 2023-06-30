import { useState } from 'react';

import styled from './LoginForm.module.css';
import img from './../../assets/logoLogin.jpg';

function validate(user){
    let errors = {};
    
    if(!user.email){
        errors.email = 'Enter your email';
    }
    if (!/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(user.email)) {
        errors.email = "Invalid email";
    }
    if(user.email.length >= 35){
        errors.email = "Invalid email";
    }
    if (!/\d/.test(user.password)) {
        errors.password = "Password must contain a number";
      }
      if (user.password.length < 6 || user.password.length > 15) {
        errors.password = "Password must be 6 to 15 characters";
      }
    if (!user.password) {
        errors.password = "Enter a password";
      }

    return errors;
}

function LoginForm  ({login}) {

    const [user, setUser] = useState({
        email:'',
        password:''
    })

    const [errors, setErrors] = useState({
        email:'',
        password:''
    })

    //FUNCION QUE ACCIONA CAMBIOS
    function handleChange(event){
        setUser({
            ...user,
            [event.target.name]:event.target.value
        });
        setErrors(validate({
            ...user,
            [event.target.name]:event.target.value
        }))
    }

    //FUNCION DE LOGIN
    function handleSubmit(event) {
        event.preventDefault(user);
    
        if(!errors.email && !errors.password){
            login(user)
        } else {
            alert('Incorrect data');
        }
    }

    // RENDERIZADO
return (
     <div className={styled.container}>
        <form className={styled.form} onSubmit={handleSubmit} type="submit">
            
            <img className={styled.login} src={img} alt="" />

            <h2>SIGN  IN</h2>

            <label className={styled.label}>U s e r n a m e</label>
 
            <input className={styled.input} type="text" 
            placeholder='Username@hotmail.com' 
            name='email'
            value={user.name}
            onChange={handleChange}
            />
            {errors.email && <span>{errors.email}</span>}
            <label className={styled.label}>P a s s w o r d</label>

            <input className={styled.input} 
            type="password" 
            name='password'
            placeholder='Password'
            value={user.password}
            onChange={handleChange}
            />
            {errors.password && <span>{errors.password}</span>}

            <button className={styled.button} type="submit">Login</button>
        </form>
    </div>
        
    )
}

export default LoginForm;