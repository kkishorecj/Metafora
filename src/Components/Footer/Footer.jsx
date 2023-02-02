import React from 'react'
import './footer.scss'
import video2 from '../../Assets/video.mp4'
import {FiSend} from 'react-icons/fi'
import {SiYourtraveldottv} from 'react-icons/si'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'
import {FiChevronRight} from 'react-icons/fi'

const Footer = () =>{
return(
<section className='footer'>
<div className="videoDiv">
<video src={video2} loop autoPlay muted type="video/mp4"></video>
</div>

<div className="secContent container">
<div className="contactDiv flex">
<div className="text">
<small>KEEP IN TOUCH</small>
<h2>Travel-with-us</h2>
</div>
<div className="inputDiv flex">
<input type="text" placeholder='Enter Email Address'/>
<button className='btn flex' type='submit'>
SEND <FiSend className="icon"/>
</button>
</div>
<div className="footerCard flex">
<div className="footerIntro flex">
<div className="logoDiv">
<a href="#" className='logo flex'>
<SiYourtraveldottv className="icon"/> Travel
</a>
</div>
<br></br>
<div className="footerParagraph">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
</div>
</div>

<div className="footerLinks grid">
    <div className='linkGroup'>
        <span className='groupTitle'>
            OUR AGENCY
        </span>
        <li className='footerList flex'>
            <FiChevronRight className="icon"/>
            Services
        </li>
        <li className='footerList flex'>
            <FiChevronRight className="icon"/>
            Insurance
        </li>
        <li className='footerList flex'>
            <FiChevronRight className="icon"/>
            Agency
        </li>
        <li className='footerList flex'>
            <FiChevronRight className="icon"/>
            Tourism
        </li>
        <li className='footerList flex'>
            <FiChevronRight className="icon"/>
            Payment
        </li>
    </div>
    <div className='linkGroup'>
        <span className='groupTitle'>
        PARTNERS
        </span>
        <li className='footerList flex'>
            <FiChevronRight className="icon"/>
            Bookings
        </li>
        <li className='footerList flex'>
            <FiChevronRight className="icon"/>
            RentCars
        </li>
        <li className='footerList flex'>
            <FiChevronRight className="icon"/>
            HostelWorld
        </li>
        <li className='footerList flex'>
            <FiChevronRight className="icon"/>
            Trivago
        </li>
        <li className='footerList flex'>
            <FiChevronRight className="icon"/>
            TripAdvisor 
        </li>
    </div> 
    <div className='linkGroup'>
        <span className='groupTitle'>
           LAST MINUTE
        </span>
        <li className='footerList flex'>
            <FiChevronRight className="icon"/>
            London
        </li>
        <li className='footerList flex'>
            <FiChevronRight className="icon"/>
            California
        </li>
        <li className='footerList flex'>
            <FiChevronRight className="icon"/>
            Indonesia
        </li>
        <li className='footerList flex'>
            <FiChevronRight className="icon"/>
            Europe
        </li>
        <li className='footerList flex'>
            <FiChevronRight className="icon"/>
            Oceania
        </li>
    </div> 
</div>
<div className='footerDiv flex'>
<small>BEST TRAVEL WEBSITE </small>
<small>COPYRIGHT RESERVED @MeTaFoRa_23 </small>
</div>
</div>
</div>
<div className="footerSocials"> <AiOutlineTwitter className="icon"/> <AiFillYoutube className="icon"/> <AiFillInstagram className="icon"/> <FaTripadvisor className="icon"/> </div>
</div>
</section>
)
}
export default Footer
