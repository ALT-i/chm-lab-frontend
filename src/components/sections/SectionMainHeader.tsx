import React from 'react';


function SectionMainHeader () {
    return ( 
        <div className="main-header">
            <h1>
                <a href='/'>    
                    vLab
                </a>  
            </h1>
            {/* <button onClick = {() => {
                electron.notificationApi.sendNotification('My custom notification')
            }}>Notify</button> */}
        </div>
     );
}
 
export default SectionMainHeader;