import React, { useContext } from 'react';
import { ProductContext } from '../../../contexts/ProductsProvider';

const AlertsCard = ({handleModalClose, type, icon }) => {

    const {alertText} = useContext(ProductContext);
    return (
        <div id='alert-card' className={`fixed top-1 w-9/12 md:w-5/12 lg:w-4/12 left-0 right-0 mx-auto alert ${type} shadow-lg text-white transition-opacity z-50`}>
            <div>
                <label onClick={()=>handleModalClose(type)} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={icon} /></svg>
                <p>{alertText}</p>
            </div>
        </div>
    );
};

export default AlertsCard;