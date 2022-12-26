import React from "react";

const Navigation = () => {
    return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p className="f5 link white pa2 pointer br2 ma2 grow shadow-2" style={{background : 'red'}}>
                Sign Out
            </p>
        </nav>
    );
}

export default Navigation;