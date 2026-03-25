// import Header from './components/header'
// import Footer from './components/footer'

// function App(){
//     return <div>
//                 <h2>App Component</h2>
//                 <p>Information about app component</p>
//                 <Header/>
//                 <Footer/>
//             </div>
            
// }

// import React, { Component } from 'react'


// export default App;


import React, { Component } from 'react'
import Header from './components/header'
import Footer from './components/footer'

class App extends Component {
  render() {
    return (
      <div>
        <h2>App Component</h2>
        <p>Information about app component</p>
        <Header />
        <Footer />
      </div>
    )
  }
}

export default App;