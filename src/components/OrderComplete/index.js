import './index.css'

import {FaRupeeSign} from 'react-icons/fa'
import AboutUs from '../AboutUs'

const OrderComplete = props => {
  const {addRooms, name, email, number, adultCount, childCount} = props
  return (
    <>
      <div>
        <div className="booking-details-container order-details-main-container">
          <div className="order-details-container">
            <h1 className="order-details-name">{name}</h1>
            <p className="order-details-para">{number}</p>
            <p className="order-details-para">{email}</p>
            <p className="order-details-para">
              {adultCount} {childCount}
            </p>
          </div>
          {/* order complete information */}
          <div className="order-complete-container">
            <img
              alt="img"
              className="order-details-tick-img"
              src="https://i.ibb.co/fGHjVym/app-tick.jpg"
            />
            <div className="order-complete-queries-cotnainer">
              <h1 className="order-complete-title">Order Complete</h1>
              <p>have questions?</p>
              <a className="contac-us" href="#r">
                contact us
              </a>
            </div>
          </div>
        </div>
        {/* booking card */}

        <div className="booking-card order-details-booking-card">
          {/* check in container */}
          <div className="check-in-container">
            <p className="check-in-para">CHECK-IN</p>

            <select className="date-select-el">
              <option>01 feb 2022</option>
              <option>02 feb 2022</option>
              <option>03 feb 2022</option>
              <option>04 feb 2022</option>
              <option>05 feb 2022</option>
              <option>06 feb 2022</option>
              <option>07 feb 2022</option>
            </select>
          </div>
          <hr />
          {/* check out container */}
          <div className="check-in-container">
            <p className="check-in-para">CHECK-OUT</p>

            <select className="date-select-el">
              <option>07 feb 2022</option>
              <option>08 feb 2022</option>
              <option>09 feb 2022</option>
              <option>10 feb 2022</option>
              <option>11 feb 2022</option>
              <option>12 feb 2022</option>
              <option>13 feb 2022</option>
            </select>
          </div>
          <hr />
          {/* rooms container */}
          <div className="rooms-container">
            <p className="check-in-para">ROOMS</p>
            <div className="plus-minus-container order-details-rooms-container">
              <p className="plus-minus-para">{addRooms}</p>
            </div>
          </div>
          {/* book button */}
          <div className="book-btn-container">
            <button type="button" className="book-btn order-btn">
              <FaRupeeSign className="btn-rupee-img" />
              12,430
            </button>
          </div>
        </div>
        {/* //// */}

        {/* /// end /// */}
      </div>
      <AboutUs isActive />
    </>
  )
}

export default OrderComplete
