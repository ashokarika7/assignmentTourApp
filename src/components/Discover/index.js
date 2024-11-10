import './index.css'
import ReviewCard from '../ReviewCard'

const Discover = () => (
  <div id="discover" className="discover-container">
    <p className="discover-title">Discover</p>
    <div className="review-img-container">
      <ReviewCard />
      <div className="img-review-container">
        <img
          className="discover-review-img"
          alt="img"
          src="
    https://indiaatri.in/wp-content/uploads/2024/03/prabhav-kashyap-godavarthy-XTroPPNq6JA-unsplash-683x1024.jpg
    "
        />
        <ReviewCard className="img-review-card" />
      </div>
      <div className="discover-two-reviews-container">
        <ReviewCard className="review-card-last" />
        <ReviewCard />
      </div>
    </div>
  </div>
)

export default Discover
