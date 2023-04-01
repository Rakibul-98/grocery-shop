import React from 'react';
import AlertsCard from './AlertsCard';

const Alerts = () => {

    const handleModalClose = (type) =>{
        if(type === "alert-success"){
            document.getElementById("success-alert").style.display="none";
        }
        else if(type === "alert-error"){
            document.getElementById("warning-alert").style.display="none";
        }
    }

    const icon1 = "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z";
    const icon2 = "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z";

    return (
        <div>
            <div style={{display:"none"}} id='success-alert'>
                <AlertsCard handleModalClose={handleModalClose} icon={icon1 }type="alert-success"></AlertsCard>
            </div>
            <div style={{display:"none"}} id='warning-alert'>
                <AlertsCard handleModalClose={handleModalClose} icon={icon2} type="alert-error"></AlertsCard>
            </div>
        </div>
    );
};

export default Alerts;