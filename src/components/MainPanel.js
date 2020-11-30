import React from 'react';






const MainPanel = (props)=>{
    return (
        <div className="container">
            <div className="row">
                <div className="col s12 m12 offset-m1 offset-xl1">
                {props.children}
                </div>
            </div>
        </div>
    )
};


export default MainPanel;

