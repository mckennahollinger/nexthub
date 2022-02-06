import './App.css';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import {LoginPage} from "./pages/LoginPage"
import { render } from '@testing-library/react';

// export const pages = {
//   LoginPage: "LoginPage"
// }

// export class App extends React.Component{
//   constructor(props){
//     super(props);
//       this.state = {
//         currentPage: pages.LoginPage
//       }
//   }
// }

// render() {
//   let whichComponentShows;

//   switch (this.state.currentPage) {
//     case pages.LoginPage:
//       whichComponentToShows = <LoginPage/>
//       break;
//   }
// }

function App() {
  return (
    <div className="Login">
      <header className="nexthub">
        <img src={"login_pngs/login-bg.png"} className="login-bg" alt="login-bg"/>
        <img alt="" src={"login_pngs/next.png"} className="next"></img>
      </header>
    </div>
  );
}

export default App;
