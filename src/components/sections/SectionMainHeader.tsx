import React from 'react';


function SectionMainHeader () {
    return ( 
        <div className="main-header">
            <div className="row">
                <img className="img-circle" src="../../assets/img/noun_logo.png" alt="" />
                <img className="img-circle" src="../../assets/img/acetel_logo.png" alt="" />
            </div>
            <h1>
                <a href='/'>    
                    CHM Virtual Lab
                </a>  
            </h1>
            {/* <button onClick = {() => {
                electron.notificationApi.sendNotification('My custom notification')
            }}>Notify</button> */}
        </div>
     );
}
 
export default SectionMainHeader;