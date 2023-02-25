import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MenuIcon from '@mui/icons-material/Menu';
function Header() {
  return (
    <div className='header'>
      <div className='logo'><img src="https://images.yourstory.com/cs/images/companies/16162243490201-1631082089969.jpg?fm=auto&ar=1:1&mode=fill&fill=solid&fill-color=fff" alt=""/></div>
      <div className='title'>WASSERSTOFF</div>
      <div className='search'>
        <div className='search__icon'>
          <SearchIcon /> </div>
      </div>
      <div className='nav_items'>
        <div className='text'>Statistics</div>
        <div className='text'>Overview</div>
        <div className='text'>Dashboard</div>
        <div className='text'>Analytics</div>
       
      </div>
      <div className='icon'>
        <div className='icon1' ><PersonOutlineIcon /></div>
        <div className='icon1' ><MenuIcon /></div>
      </div>
        </div>
  )
}

export default Header