import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query'
import BookingModal from './BookingModal';
import Service from './Service'
import Loading from '../Shared/Loading'

const AvailableAppointment = ({ date }) => {
    
    
    const [treatment, setTreatment] = useState(null)
    const formatedDate = format(date, 'PP')


    const {data:services, isLoading,refetch } = useQuery(['available',formatedDate], () =>
    fetch(`http://localhost:5000/available?date=${formatedDate}`)
            .then(res => res.json()) )

    if (isLoading) {
        return <Loading></Loading>
    }

 

    return (
        <div>
            <h1 className='text-xl text-center text-secondary'>Available Appointment on {format(date, 'PP')}</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-10'>
                {
                    services?.map(service => <Service key={service._id} setTreatment={setTreatment} service={service} ></Service> )
                }
            </div>
            {
                treatment && <BookingModal date={date} setTreatment={setTreatment} treatment={ treatment} refetch={refetch} ></BookingModal>
            } 
        </div>
    );
};

export default AvailableAppointment;