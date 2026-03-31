import React, { Component } from 'react'
import Header from './components/header'
import Footer from './components/footer'
import Avi from './components/avi';
import Harsha from './components/harsha';
import Ankesh from './components/ankesh';
import Mahesh from './components/mahesh';
import Rajesh from './components/rajesh';
import Srinivas,{Add,Sub} from './components/srinivas';

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <h2>App Component</h2>
//         <p>Information about app component</p>
//         <Header />
//         <Footer />
//         <Avi />
//         <Harsha />
//         <Ankesh />
//       </div>
//     )
//   }
// }


function App(){
    return <div>
                <h2>App Component</h2>
                <p>Information about app component</p>
                <Header/>
                <Footer/>
                <Srinivas/>
                <Add/>
                <Sub/>
                <Rajesh/>
                <Avi/>
                <Ankesh/>
                <Harsha/>
                <Mahesh/>
                <Add/>
                <Add/>
                <Sub/>
                
            </div>            
}




export default App; 