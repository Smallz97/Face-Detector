import React from "react";
import Tilt from "react-tilt";
import Brain from './logo.jpg';
import './logo.css';

const Logo = () => {
    return (
        <div className="ma2 pa2 br3" style={{ display: 'flex', justifyContent: 'space-between', background: 'purple' }} >
            <Tilt className="Tilt shadow-2" options={{ max : 50 }} style={{ height: 75, width: 75 }} >
                <div className="Tilt-inner">
                    <img src={Brain} alt="brain-logo" />
                </div>
            </Tilt>
            <div>
                <h2 className="ba yellow pa1 br3">MAGIC BRAIN</h2>
            </div>
        </div>
    );
}

export default Logo;