import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const BookingModal = ({ treatment, date, setTreatment,refetch }) => {
const [user,loading] = useAuthState(auth);
  const { _id, name, slots } = treatment;
  const formateDate = format(date,'PP')
  const handleBooking = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;
    const booking = {
      treatmentId: _id,
      treatment: name,
      date: formateDate,
      slot,
      patent: user.email,
      patentName: user.displayName,
      phone: e.target.phone.value
    }
    

    fetch('http://localhost:5000/booking', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          toast(`Appointment is set ${formateDate} at ${slot}`)
        } else {
          console.log(data)
          toast.error(`You already have an Appointment on ${data.booking?.date} at ${data.booking?.slot}`)
        }
        refetch()
        setTreatment(null)
    })

  }

  
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
                slots.map((slot,index) => <option key={index} value={slot}>{ slot }</option> )
             }
            </select>
            <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
            <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
            <input type="text" name="phone" placeholder="Phone number" className="input input-bordered w-full max-w-xs" />
            <input type="submit" placeholder="Submit" className="btn btn-secondary text-white w-full max-w-xs" />
          </form>

        </div>
      </div>
    </div>
  );
};

export default BookingModal;