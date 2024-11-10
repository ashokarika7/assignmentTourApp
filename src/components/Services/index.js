import './index.css'

import ServiceCard from '../ServiceCard'

const servicesList = [
  {
    id: 1,
    imgUrl: 'https://i.ibb.co/PxJNxP8/app-wifi.jpg',
    title: 'High Speed Internet',
    description:
      'Optical fiber connections provided not only in your cabins but rather to all of the BriSphere scenic working spaces and dining areas.',
  },
  {
    id: 2,
    imgUrl: 'https://i.ibb.co/FwSXV01/app-meals.jpg',
    title: 'Healthy Meals',
    description:
      'A healthy breakfast and pleasant dinner will be serviced at your space every single day for your entire duration of stay with the option of paid order within BriSphere.',
  },
  {
    id: 3,
    imgUrl: 'https://i.ibb.co/KKRBdgf/app-home.jpg',
    title: 'Homely Stay',
    description: `Designed for  working professionals
        with spacious interiors, comfortable beds and sleekly attached kitchen 
        are some of the comforts providedin your space.`,
  },

  {
    id: 4,
    imgUrl: 'https://i.ibb.co/Wt2mHtm/app-car.jpg',
    title: 'Transportation',
    description: `
      Optical fiber connections provided in
not only in your cabins but rather to 

all of the BriSphere scenic working
spaces and dinning areas.
      `,
  },

  {
    id: 5,
    imgUrl: 'https://i.ibb.co/5hf0HzX/app-cycle.jpg',
    title: 'Food Delivery',
    description: `
      Optical fiber connections provided in
not only in your cabins but rather to 

all of the BriSphere scenic working
spaces and dinning areas.
      `,
  },

  {
    id: 6,
    imgUrl: 'https://i.ibb.co/kyXWSD3/app-door.jpg',
    title: 'Tourism',
    description: `
      Optical fiber connections provided in
not only in your cabins but rather to 

all of the BriSphere scenic working
spaces and dinning areas.
      `,
  },

  {
    id: 7,
    imgUrl: 'https://i.ibb.co/GPr6hd6/app-flag.jpg',
    title: 'Job',
    description: `
      Optical fiber connections provided in
not only in your cabins but rather to 

all of the BriSphere scenic working
spaces and dinning areas.
      `,
  },

  {
    id: 8,
    imgUrl: 'https://i.ibb.co/QQ4Drcr/app-service.jpg',
    title: 'Rental Service',
    description: `
        Optical fiber connections provided in
not only in your cabins but rather to 

all of the BriSphere scenic working
spaces and dinning areas.
      `,
  },

  {
    id: 9,
    imgUrl: 'https://i.ibb.co/GCdhBB9/app-cart.jpg',
    title: 'Online Shop',
    description: `
      Optical fiber connections provided in
not only in your cabins but rather to 

all of the BriSphere scenic working
spaces and dinning areas.
      `,
  },
]

const Services = () => (
  <div id="services" className="services-container">
    <p className="services-title">Services</p>
    <ul className="service-ul-container">
      {servicesList.map(services => (
        <ServiceCard key={services.id} servicesList={services} />
      ))}
    </ul>
  </div>
)

export default Services
