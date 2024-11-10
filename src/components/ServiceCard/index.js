import './index.css'

const ServiceCard = props => {
  const {servicesList} = props
  const {imgUrl, title, description} = servicesList
  return (
    <li className="service-card-container">
      <img alt="img" className="service-card-img" src={imgUrl} />
      <h1 className="service-card-title">{title}</h1>
      <p className="service-card-description">{description}</p>
    </li>
  )
}

export default ServiceCard
