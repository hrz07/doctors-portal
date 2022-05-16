import React from 'react';

const Service = ({ service,setTreatment }) => {
    
    const { name, available } = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <div className="card-body text-center">
                <h2 className="card-title text-center text-secondary mx-auto">{name}</h2>
                <p>
                    {
                      available.length ? 
                            <span>{ available[0] } </span>
                            :
                            <span className='text-red-500'>No Slot Available</span>
                    }
                </p>
                <p>{available.length} { available.length > 1 ? 'spaces' : 'space' } available</p>
          <div className="card-actions justify-center">
           
            <label htmlFor="booking-modal" disabled={available.length === 0} onClick={() => setTreatment(service)} className="btn modal-button btn-secondary text-white uppercase">Book Appointment</label>
            
          </div>
        </div>
      </div>
    );
};

export default Service;