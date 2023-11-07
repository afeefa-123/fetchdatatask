import React from 'react'
import { Route,Routes } from 'react-router-dom'
import CourseList from './CourseList'
import CourseDetails from './CouseDetails'
import CourseFullDetails from './CourseFullDetails'
import Dashboard from './Dashboard'

function Mainrouter() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Dashboard/>}/>
        <Route path='/list' element={<CourseList/>}/>
        <Route path='/course/:id' element={<CourseDetails/>}/>
        <Route path='/coursedatafull/:id' element={<CourseFullDetails/>}/>

      </Routes>
    </div>
  )
}

export default Mainrouter
