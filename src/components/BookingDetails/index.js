import './index.css'

import {Component} from 'react'
import {CiCircleMinus} from 'react-icons/ci'
import {FaCirclePlus} from 'react-icons/fa6'
import {FaArrowRight, FaRupeeSign} from 'react-icons/fa'

import AboutUs from '../AboutUs'
import OrderComplete from '../OrderComplete'

class BookingDetails extends Component {
  state = {
    check: true,
    addRooms: 1,
    name: '',
    email: '',
    number: '',
    adultCount: '',
    childCount: '',
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeEmail = event => {
    this.setState({email: event.target.value})
  }

  onChangeNumber = event => {
    this.setState({number: event.target.value})
  }

  onChangeAdultCount = event => {
    this.setState({adultCount: event.target.value})
  }

  onChangeChildrenCount = event => {
    this.setState({childCount: event.target.value})
  }

  onClickMinus = () => {
    const {addRooms} = this.state
    if (addRooms > 1) {
      this.setState(prevState => ({
        addRooms: prevState.addRooms - 1,
      }))
    }
  }

  onClickPlus = () => {
    this.setState(prevState => ({
      addRooms: prevState.addRooms + 1,
    }))
  }

  onSubmitForm = event => {
    event.preventDefault()

    this.setState({
      check: false,
    })
  }

  render() {
    const {
      addRooms,
      check,
      name,
      email,
      number,
      adultCount,
      childCount,
    } = this.state
    return (
      <>
        {check && (
          <>
            <form onSubmit={this.onSubmitForm}>
              <div className="booking-details-container">
                <div className="name-mail-container">
                  <input
                    onChange={this.onChangeName}
                    placeholder="Name"
                    className="text-el"
                    type="text"
                  />
                  <input
                    onChange={this.onChangeEmail}
                    placeholder="Email"
                    className="text-el"
                    type="text"
                  />
                </div>
                <div className="name-mail-container number-container">
                  <input
                    onChange={this.onChangeNumber}
                    placeholder="Number"
                    className="text-el"
                    type="text"
                  />
                  <div className="age-container">
                    <input
                      onChange={this.onChangeAdultCount}
                      placeholder="Adult Count"
                      className="text-el age-el"
                      type="text"
                    />
                    <input
                      onChange={this.onChangeChildrenCount}
                      placeholder="Children Count"
                      className="text-el age-el"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              {/* bookin card */}

              <div className="booking-card booking-details-booking-card">
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
                  <div className="plus-minus-container">
                    <button
                      aria-label="Decrease rooms"
                      onClick={this.onClickMinus}
                      type="button"
                      className="plus-minus-btn"
                    >
                      <CiCircleMinus className="plus-minus-img" />
                    </button>
                    <p className="plus-minus-para">{addRooms}</p>
                    <button
                      aria-label="Increase rooms"
                      onClick={this.onClickPlus}
                      type="button"
                      className="plus-minus-btn"
                    >
                      <FaCirclePlus className="plus-minus-img" />
                    </button>
                  </div>
                </div>
                {/* book button */}
                <div className="para-btn-container">
                  <div className="book-btn-container price-container">
                    <button type="submit" className="book-btn price-btn">
                      <FaRupeeSign className="btn-rupee-img" />
                      12,430
                    </button>
                    <div className="right-arrow-cotainer">
                      <FaArrowRight className="btn-right-arrow" />
                    </div>
                  </div>
                  <p className="btn-para">Click to pay token amount</p>
                </div>
                {/* //// */}
              </div>

              {/* /// end /// */}
            </form>
            <AboutUs isActive />
          </>
        )}
        {!check && (
          <OrderComplete
            adultCount={adultCount}
            childCount={childCount}
            number={number}
            email={email}
            addRooms={addRooms}
            name={name}
          />
        )}
      </>
    )
  }
}

export default BookingDetails
