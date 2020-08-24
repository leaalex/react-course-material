import React from 'react';
import logo from './logo.svg';
import styles from './App.module.css';

function App() {
  const a = React.createElement('a', {
    className:"App-link",
    href:"https://reactjs.org",
    target:"_blank",
    rel:"noopener noreferrer",
    style: {
    }
  }, 'Learn React')

  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <img
          src={logo}
          className={styles.AppLogo}
          alt="logo"
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        { a }
      </header>
    </div>
  );
}

export default App;

