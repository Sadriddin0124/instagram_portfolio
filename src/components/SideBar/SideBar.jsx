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
const SideBar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar__title">
        <img src={SideBarTitle} alt="sidebar__title" />
      </div>
      <ul className="sidebar__items">
        <li className="sidebar__list">
        <FontAwesomeIcon icon={faHome} className='sidebar__icon'/>
        <h5 className='sidebar__text'>Home</h5>
        </li>
        <li className="sidebar__list">
        <FontAwesomeIcon icon={faSearch} className='sidebar__icon'/>
        <h5 className="sidebar__text">Search</h5>
        </li>
        <li className="sidebar__list">
            <FontAwesomeIcon icon={faCompass} className='sidebar__icon'/>
            <h5 className="sidebar__text">Explore</h5>
        </li>
        <li className="sidebar__list">
            <FontAwesomeIcon icon={faClapperboard} className='sidebar__icon'/>
            <h5 className="sidebar__text">Reels</h5>
        </li>
        <li className="sidebar__list">
            <FontAwesomeIcon icon={faHeart} className='sidebar__icon'/>
            <h5 className="sidebar__text">Notifications</h5>
        </li>
        <li className="sidebar__list">
            <FontAwesomeIcon icon={faSquarePlus} className='sidebar__icon'/>
            <h5 className="sidebar__text">Create</h5>

        </li>
        <li className="sidebar__list">
            <img src={ProfileImg} alt="profileimg" />
            <h5 className="sidebar__text">Profile</h5>

        </li>
      </ul>
      <ul className="sidebar__items">
        <li className="sidebar__list">
            <FontAwesomeIcon icon={faThreads} className='sidebar__icon'/>
            <h5 className="sidebar__text">Threads</h5>

        </li>
        <li className="sidebar__list">
            <FontAwesomeIcon icon={faBars} className='sidebar__icon'/>
            <h5 className="sidebar__text">More</h5>

        </li>

      </ul>
    </div>
  )
}

export default SideBar
