import React from "react";
import { StyleSheet, css } from 'aphrodite';


function Login() {
  return (
    <div className={css(styles.Login)}>
      <p>Login to access the full dashboard</p>
      <div>
        <div className={css(styles.inputGroup)}>
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" className={css(styles.LoginInput)}/>
        </div>
        <div className={css(styles.inputGroup)}>
          <label htmlFor="password"> Password: </label>
          <input type="password" id="password" className={css(styles.LoginInput)}/>
        </div>
        <button className={css(styles.loginButton)}>OK</button>
      </div>
    </div>
  );
}

const responsive = {
  small: '@media (max-width: 900px)',
};

const styles = StyleSheet.create({
	Login: {
		fontFamily: 'Arial, Helvetica, sans-serif',
		padding: '50px',
		[responsive.small]: {
			padding: 0
		}
	},


  LoginInput: {
    marginBottom: 10,
    margin: '5px',
		[responsive.small]: {
			border: 'none'
		}
  },
  
	loginButton: {
		[responsive.small]: {
			border: '3px solid orange',
			borderRadius: '5px',
			
		}
	},
  inputGroup: {
		display: 'inline',
		[responsive.small]: {
			display: 'flex'
		}
	},

});

export default Login;