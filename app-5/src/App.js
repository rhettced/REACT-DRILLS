
import React, {Component} from 'react';
import Image from './Component/Image';

class App extends Component{
    constructor(){
      super();
      this.state = {
        imgSource: 'https://petstuffguide.com/wp-content/uploads/2017/11/EMGN-donkey-1.jpeg' 
      };
    }

  
  render(){
    return(
      <div className="App">
         <Image imgSrc={this.state.imgSource}/>
      </div>
    );
  }

}

export default App;







// import React, {Component} from 'react';
// import './App.css';
// import Image from './Component/Image';

// class App extends Component{
//   constructor(){
//     super();
//     this.state ={
//       imgSource: 'https://c402277.ssl.cf1.rackcdn.com/photos/18330/images/hero_small/Mountain_Gorilla_Silverback_WW22557.jpg?1576515753'
//     }
//   }


//   render(){
//     return (
//       <div className="App">
//         <Image image={this.state.imgSource}/>
//      </div>
//     );
//     }
// }

// export default App;
// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

// export default App;
