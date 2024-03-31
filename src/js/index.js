
// include your styles into the webpack bundle
import "../styles/index.css";

//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types"




function SimpleCounter(props){
    return(
        <div className="rCounter">
            <div className="clock">
                <i className="far fa-clock"></i>
            </div>
            <div className="centenasMillar">{props.digitSix%10}</div>
            <div className="decenasMillar">{props.digitFive%10}</div>
            <div className="unidadesMillar">{props.digitFour%10}</div>
            <div className="centenas">{props.digitThree%10}</div>
            <div className="decenas">{props.digitTwo%10}</div>
            <div className="unidades">{props.digitOne%10}</div>
        </div>
    )
}
SimpleCounter.protoTypes = {
    digitSix: PropTypes.number,
    digitFive: PropTypes.number,
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number,

}

let counter = 0;
setInterval(function(){
    const six = Math.floor(counter/100000)
    const five = Math.floor(counter/10000)
    const four = Math.floor(counter/1000)
    const three = Math.floor(counter/100)
    const two = Math.floor(counter/10)
    const one = Math.floor(counter/1)
    counter ++
    
    ReactDOM.render(<SimpleCounter digitOne={one}  digitTwo={two} digitThree={three}digitFour={four}digitFive={five}digitSix={six}/>, document.querySelector("#app"));
},1000);
//render your react application