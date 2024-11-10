import './index.css'

const AboutUs = props => {
  const {isActive} = props
  return (
    <div id="about" className="about-us-container">
      <div>
        <h1 className="about-us-title">Brisphere</h1>
        <p className="about-us-para">Spituk, Ladakh,</p>
        <p className="about-us-para">India, 194101</p>
        <p className="about-us-para">+91 - 7764997033</p>
        <p className="about-us-para">amit.jha6700@gmail.com</p>
        <button type="button" className="about-us-btn-el">
          Location
        </button>
      </div>
      {isActive && (
        <p className="about-us-terms">
          terms and conditions privacy policy refunds
        </p>
      )}
    </div>
  )
}

export default AboutUs
