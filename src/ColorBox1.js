import React from "react";
function ColorBox(props) {
     // const { color,width,height } = props;
     return (
     <div className="box" style={{ backgroundColor: props.color, width:props.width,height:props.height }}></div>
     )
}
export default ColorBox;
