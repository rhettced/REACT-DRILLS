import React, {Component} from 'react';

class Image extends Component{

    render(){
        return(
            <main>
                <img src = {this.props.imgSrc}/>
            </main>
        );
    }
}

export default Image;



// import React, {Component} from 'react';

// class Image extends Component{

//     render(){
//         console.log();
//         return(
//             <main>
//                 <img src={this.props.image}/>
//             </main>
//         );
//     }

// }

// export default Image;