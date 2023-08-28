import React from 'react';


function SectionMainHeader () {
    return ( 
        <div className="main-header">
            <div className="row">
                <img className="img-circle" src="../../assets/img/noun_logo.png" alt="" />
                <img className="img-circle" src="../../assets/img/acetel_logo.png" alt="" />
            </div>
            <div>
                <h2 className='side-banner-text'>
                    National Open University of Nigeria (NOUN)
                    <p/>
                    Africa Centre of Excellence on Technology Enhanced Learning (ACETEL)
                </h2>
                <h3 className='subtext'>
                    <a href='/main_window' className='subtext'>
                        CHM Virtual Lab
                    </a>
                </h3> 
            </div>
            {/* <button onClick = {() => {
                electron.notificationApi.sendNotification('My custom notification')
            }}>Notify</button> */}
        </div>
     );
}
 
export default SectionMainHeader;