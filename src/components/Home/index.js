import './index.css'
import {Component} from 'react'
import {AiFillInstagram} from 'react-icons/ai'
import {FaFacebook} from 'react-icons/fa'
import {CiCircleMinus} from 'react-icons/ci'
import {FaCirclePlus} from 'react-icons/fa6'
import Header from '../Header'
import Discover from '../Discover'
import Services from '../Services'
import AboutUs from '../AboutUs'

class Home extends Component {
  state = {addRooms: 1}

  onClickBookBtn = () => {
    const {history} = this.props
    history.replace('/booking-details')
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

  render() {
    const {addRooms} = this.state
    return (
      <>
        <div className="hm-bg-container">
          <div className="initial-container">
            {/* content container */}
            <div className="content-container">
              <h1 className="content-title">Work from ladakh</h1>
              <p className="content-para">
                Indias first true digital tourism ecosystem
              </p>
              <FaFacebook className="content-react-icons" />
              <AiFillInstagram className="content-react-icons" />
            </div>
            <img
              alt="img"
              className="initial-img"
              src="https://images.unsplash.com/photo-1672065037182-459329f79bf9?q=80&w=1991&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
          {/* booking card */}

          <div className="booking-card">
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
                  aria-label="decrease rooms"
                  onClick={this.onClickMinus}
                  type="button"
                  className="plus-minus-btn"
                >
                  <CiCircleMinus className="plus-minus-img" />
                </button>
                <p className="plus-minus-para">{addRooms}</p>
                <button
                  aria-label="increase rooms"
                  onClick={this.onClickPlus}
                  type="button"
                  className="plus-minus-btn"
                >
                  <FaCirclePlus className="plus-minus-img" />
                </button>
              </div>
            </div>
            {/* book button */}
            <div className="book-btn-container">
              <button
                onClick={this.onClickBookBtn}
                type="button"
                className="book-btn"
              >
                BOOK
              </button>
            </div>
            {/* //// */}
          </div>

          <Discover />
          <Services />
        </div>
        <AboutUs isActive={false} />
      </>
    )
  }
}

export default Home
