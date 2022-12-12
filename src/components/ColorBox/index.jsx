import React, { useState } from "react";
import PropTypes from "prop-types";

class ColorBox extends React.PureComponent {
     constructor(props) {
          super(props);
          this.state = { color: "white" };
     }
     render() {
          return (
               <div>
                    {this.state.color}
                    <button onClick={() => this.setState({ color: "black nè" })}>
                         Change to black
                    </button>
                    <button onClick={() => this.setState({ color: "white nè" })}>
                         Change to white
                    </button>
               </div>
          );
     }
}
// function ColorBox(props) {
//      const [color, setColor] = useState('white');
//      return (
//           <div>
//                {color}
//                <button onClick={() => setColor('black')}>Change to black</button>
//                <button onClick={() => setColor('white')}>Change to white</button>
//           </div>
//      );
// }

export default ColorBox;
