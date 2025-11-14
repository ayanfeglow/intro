import React from 'react' 
import Props from "./components/Props"
import Style from "./components/Style"
import State from "./components/State"
import StateTwo from './components/StateTwo'
import StateExample from './components/StateExample'
import UseEfffect from './components/UseEfffect'
import Map from './components/Map'
import Events from './components/Events'
import EventTwo from './components/EventTwo'
import Condition from './components/Condition'
import Image from './components/Image'
import FetchMethod from './components/FetchMethod'
import Axios from './components/Axios'
import LoadingState from './components/LoadingState'
import Tanstack from './components/Tanstack'
import TanstackTwo from './components/TanstackTwo'
import Assignment from './components/Assignment'
import ExtraLesson from './components/ExtraLesson'
import ClassActivity from './components/ClassActivity'
import AssignmentTwo from './components/AssignmentTwo'
import Birthday from './components/Birthday'
import BirthdayTwo from './components/BirthdayTwo'
import AssignmentThree from './components/AssignmentThree'
import Movie from './components/Movie'
import Storage from './components/Storage'
import MovieTwo from './components/MovieTwo'
import Form from './components/Form'
import FormTwo from './components/FormTwo'
import FormThree from './components/FormThree'
import FormFour from './components/FormFour'
import AssignmentFour from './components/AssignmentFour'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/ui/Navbar'
import Career from './pages/Career'
const App = () => {
  return (
    <Router>
      <Navbar/>
    <Routes>
      <Route index path='/home' element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/career" element={<Career/>}/>
    </Routes>








    <div className=''>
      {/* <Props name="Ayanfe" age="15" number="09122193201"/>
      <Style/>
      <State/>
      <StateTwo/>
      <StateExample/>
      <UseEfffect/>
      <Map/> 
       <Events/> 
      <EventTwo/> */}
      {/* <Condition/> */}
      {/* <Image/>
      <FetchMethod/>
       <Axios/>
       <LoadingState/>
       <Tanstack/> 
       <TanstackTwo/> 
       <Assignment/> 
       <ExtraLesson/> 
       <ClassActivity/> 
       <AssignmentTwo/> */}
       {/* <Birthday/> */}
       {/* <BirthdayTwo/> */}
       {/* <AssignmentThree/> */}
       {/* <Storage/> */}
       {/* <Movie/> */}
       {/* <MovieTwo/> */}
       {/* <Form/> */}
       {/* <FormTwo/> */}
       {/* <FormThree/> */}
       {/* <AssignmentFour/> */}
       {/* <FormFour/> */}
    </div>
    </Router>
  )
}

export default App;