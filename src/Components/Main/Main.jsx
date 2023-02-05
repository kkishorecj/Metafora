import React, {useEffect}from 'react'
import './main.css'
import img from '../../Assets/img.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'
import img5 from '../../Assets/img5.jpg'
import img6 from '../../Assets/img6.jpg'
import img7 from '../../Assets/img7.jpg'
import img8 from '../../Assets/img8.jpg'
import img9 from '../../Assets/img9.jpg'

import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'
import Aos from 'aos'
import 'aos/dist/aos.css'


//array data

const Data= [
{
  id:1,
  imgSrc : img,
  destTitle:'Manali',
  location:'Shimla',
  grade:'CULTURAL RELAX',
  fees:'Rs 17000',
  description: 'It is a rustic enclave known for its cool climate and snow-capped mountains, offering respite to tourists for its natural bounties and salubrious climate in precious India. '
},
{
  id:2,
  imgSrc : img2,
  destTitle:'Kodaikanal',
  location:'Tamil Nadu',
  grade:'CULTURAL HERITAGE',
  fees:'Rs 19000',
  description: 'The place of romance, Kodaikanal is one  of the best travel destinations in India. This place is known for its luxurious stays and cultural activities. '
},
{
  id:3,
  imgSrc : img3,
  destTitle:'Haji Ali Dargah',
  location:'Mumbai',
  grade:'CULTURAL RELAX',
  fees:'Rs 11000',
  description: 'The place of wisdom, Haji Ali Dargah is one  of the best travel destinations in India. This place is known for its luxurious stays and cultural activities.'
},
{
  id:4,
  imgSrc : img4,
  destTitle:'Bengalore Palace',
  location:'Karnataka',
  grade:'ANCIENT HERITAGE',
  fees:'Rs 7000',
  description: 'The epitome of romance, Bora Bora is one  of the best travel destinations in India. This place is known for its luxurious stays and adventurous activities. '
},
{
  id:5,
  imgSrc : img5,
  destTitle:'Alappuzha',
  location:'Kerala',
  grade:'NATURE VIEW',
  fees:'Rs 13000',
  description: 'The scene of coolness, Alappuzha is one  of the best travel destinations in India. This place is known for its nature stays and soothing activities. '
},
{
  id:6,
  imgSrc : img6,
  destTitle:'Taj Mahal',
  location:'Uttar Pradesh',
  grade:'CULTURAL RELAX',
  fees:'Rs 14000',
  description: 'The epitome of romance, Taj Mahal is one  of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities. '
},
{
  id:7,
  imgSrc : img7,
  destTitle:'Baga Beach',
  location:'Goa',
  grade:'BREEZE BEACH',
  fees:'Rs 8000',
  description: 'A beach of romance, Baga Beach is one  of the best travel destinations in India. This place is known for its luxurious stays and adventurous activities. '
},
{
  id:8,
  imgSrc : img8,
  destTitle:'Jaipur',
  location:'Rajasthan',
  grade:'CULTURAL RELAX',
  fees:'Rs 11000',
  description: 'The epitome of rhsitory, Jaipur is one  of the best travel destinations in India. This place is known for its luxurious stays and adventurous activities. '
},
{
  id:9,
  imgSrc : img9,
  destTitle:'Coorg',
  location:'Karnataka',
  grade:'CULTURAL RELAX',
  fees:'Rs 11000',
  description: 'The epitome of romance, Bora Bora is one  of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities. '
},
]

const Main = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])
  return (
   <section className='main container section'>
    <div className='secTitle'>
      <h3 className='title'>
        Most visited destinations
      </h3>
    </div>
    <div className="secContent grid">
        {
          Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{
            return(
              <div key={id}
              data-aos="fade-up"
              className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>
                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className='icon'/>
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>
                  <div className="desc">
                    <p>{description}</p>
                  </div>
                  <button className='btn flex'>
                    DETAILS<HiOutlineClipboardCheck className="icon"/>
                  </button>
                </div>
              </div>
            )
          })
        }
    </div>
   </section>
  )
}

export default Main