import React from "react";
import { StyleSheet, css } from 'aphrodite';


function Login() {
  return (
    <div className={css(styles.Login)}>
    <p>Login to access the full dashboard</p>
    <label htmlFor="email">Email: </label>
    <input type="email" id="email" className={css(styles.LoginInput)}/>
    <label htmlFor="password"> Password: </label>
    <input type="password" id="password" className={css(styles.LoginInput)}/>
    <button>OK</button>
    </div>
  );
}

const styles = StyleSheet.create({
  Login: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    margin: 0,
    padding: 0,
    maxWidth: 300,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  LoginInput: {
    marginBottom: 10
  }

});

export default Login;