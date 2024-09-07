import React from 'react';
import holberton_logo from '../holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';


function Header() {
  return (
    <div className={css(styles.Header)}>
      <img src={holberton_logo} className={css(styles.HeaderLogo)} alt="logo" />
      <h1>School dashboard</h1>
    </div>
  );
}

const styles = StyleSheet.create({
	Header: {
		fontfamily: 'Arial, Helvetica, sans-serif',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',
		color: '#e1354b',
		borderBottom: '4px solid #e1354b'
	},
  HeaderLogo: {
    width: '20%',
    // edilo
    marginRight: 200
  }

});
export default Header;