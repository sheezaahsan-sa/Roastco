import React from 'react'
import Hero from "./Hero";
import Story from "./Story";
import Delivered from "./Delivered";
import Club from './Club';
import Process from './Process';
import Menu from './Menu';

const Home = () => {
  return (
    <div>
      <Hero />
      <Menu/>
      <Story />
      <Process/>
      <Delivered />
      <Club/>
    </div>
  )
}

export default Home
