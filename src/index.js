import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'

import App from './App'
import { HashRouter } from 'react-router-dom'

// const Body = () => {
//   return (
//     <div id="body">
//       <Header />
//       <Card />
//       <ContactContainer />
//     </div>
//   )
// }
//
// const Header = () => {
//   return (
//     <div className='header'>
//       <span className='header-title'>
//         un_box
//       </span>
//       <br/>
//       <span className='header-text'>
//         Whats In the Box
//       </span>
//     </div>
//   );
// }
//
// const Card = (props) => {
//   return (
//     <div className={props.className} >
//     <
//   )
// }

const appJsx = (
  <HashRouter>
    <App />
  </HashRouter>
)

ReactDOM.render(appJsx, document.getElementById('root'))
