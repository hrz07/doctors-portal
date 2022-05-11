import React from 'react';
import quote from '../../assets/icons/quote.svg'

const Testimonial = () => {
    return (
        <div className='mt-28'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl text-primary font-bold">Testimonials</h4>
                    <h2 className='text-3xl'>What our Patients say</h2>
                </div>
                <div>
                    <img src={quote} className='w-24  log:w-48' alt="" />
                </div>
            </div>
            <div>
            </div>
        </div>
    );
};

export default Testimonial;