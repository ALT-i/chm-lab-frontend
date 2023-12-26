import React from 'react';


function SectionMainHeader () {
    return ( 
        <div>
            <div className="row">
                <img className="rounded-full" src="../../assets/img/noun_logo.png" alt="" />
                <img className="rounded-full" src="../../assets/img/acetel_logo.png" alt="" />
            </div>
            <div>
                <h2 className='bg-gray-500 text-center text-white'>
                    National Open University of Nigeria (NOUN)
                    <p/>
                    Africa Centre of Excellence on Technology Enhanced Learning (ATEL)
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