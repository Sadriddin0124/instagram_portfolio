import React from 'react'
import SideBarTitle from '../../Assets/instagram__title.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHome } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faCompass } from '@fortawesome/free-solid-svg-icons'
import { faClapperboard } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons'
import ProfileImg from '../../Assets/profile_img.jpg'
import { faThreads } from '@fortawesome/free-brands-svg-icons'
import './SideBar.scss'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
const SideBar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar__title">
        <img src={SideBarTitle} alt="sidebar__title"  className='sidebar__none'/>
      </div>
      <ul className="sidebar__items">
        <li className="sidebar__list">
        <FontAwesomeIcon icon={faHome} className='sidebar__icon'/>
        <h5 className='sidebar__text sidebar__none'>Home</h5>
        </li>
        <li className="sidebar__list sidebar__list-none">
        <FontAwesomeIcon icon={faSearch} className='sidebar__icon'/>
        <h5 className="sidebar__text sidebar__none">Search</h5>
        </li>
        <li className="sidebar__list">
            <FontAwesomeIcon icon={faCompass} className='sidebar__icon'/>
            <h5 className="sidebar__text sidebar__none">Explore</h5>
        </li>
        <li className="sidebar__list">
            <FontAwesomeIcon icon={faClapperboard} className='sidebar__icon'/>
            <h5 className="sidebar__text sidebar__none">Reels</h5>
        </li>
        <li className="sidebar__list">
            <FontAwesomeIcon icon={faPaperPlane} className='sidebar__icon'/>
            <h5 className="sidebar__text sidebar__none">Message</h5>
        </li>
        <li className="sidebar__list sidebar__list-none">
            <FontAwesomeIcon icon={faHeart} className='sidebar__icon'/>
            <h5 className="sidebar__text sidebar__none">Notifications</h5>
        </li>
        <li className="sidebar__list">
            <FontAwesomeIcon icon={faSquarePlus} className='sidebar__icon'/>
            <h5 className="sidebar__text sidebar__none">Create</h5>

        </li>
        <li className="sidebar__list">
            <img src={ProfileImg} alt="profileimg" />
            <h5 className="sidebar__text sidebar__none">Profile</h5>

        </li>
      </ul>
      <ul className="sidebar__items">
        <li className="sidebar__list">
            <FontAwesomeIcon icon={faThreads} className='sidebar__icon'/>
            <h5 className="sidebar__text sidebar__none">Threads</h5>

        </li>
        <li className="sidebar__list">
            <FontAwesomeIcon icon={faBars} className='sidebar__icon'/>
            <h5 className="sidebar__text sidebar__none">More</h5>

        </li>

      </ul>
    </div>
  )
}

export default SideBar
