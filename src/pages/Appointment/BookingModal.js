import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ treatment, date, setTreatment }) => {


  const handleBooking = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;
    console.log(slot)
    setTreatment(null)
  }

  const {_id, name, slots } = treatment;
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="font-bold text-lg text-center mb-4 text-secondary">Booking for: {name}</h3>
          <form onSubmit={handleBooking} className='grid grid-cols-1 gap-4 justify-items-center' >
            <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
            <select name='slot' className="select select-bordered w-full max-w-xs">
              {
                slots.map(slot => <option value={slot}>{ slot }</option> )
             }
            </select>
            <input type="text" name="name" placeholder="Your name" className="input input-bordered w-full max-w-xs" />
            <input type="email" name="email" placeholder="Your email" className="input input-bordered w-full max-w-xs" />
            <input type="text" name="phone" placeholder="Phone number" className="input input-bordered w-full max-w-xs" />
            <input type="submit" placeholder="Submit" className="btn btn-secondary text-white w-full max-w-xs" />
          </form>

        </div>
      </div>
    </div>
  );
};

export default BookingModal;