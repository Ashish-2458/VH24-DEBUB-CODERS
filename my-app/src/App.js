import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import Signup from './Components/Signup';
import Private from './Components/Private';
import Login from './Components/Login';
import Benefits from './Components/Benefits';
import HeroSection from './Components/Herosection';
import Subject from './Components/Subject';
import Testimonials from './Components/Testimonials';
import Resources from './Components/Resources';
import UserTypeForm from './Components/UserTypeForm';
import UserDetailsForm from './Components/UserDetailsForm';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route element = {<Private />}>
        <Route path='/Herosection'  element={<HeroSection/>}/>
         <Route path='/product'  element={<h1>This is Product</h1>}/>
         <Route path='/add'  element={<h1>Add Product</h1>}/>
         <Route path='/profile'  element={<h1>This is profile</h1>}/>
         <Route path='/contact'  element={<h1>This is contact page</h1>}/>
         <Route path='/update'  element={<h1>This is update page</h1>}/>
         <Route path='/logout'  element={<h1>This is logout page</h1>}/>
         <Route path='/signup'  element={<UserTypeForm/>}/>
         <Route path='/benefits'  element={<Benefits/>}/>
         <Route path='/'  element={<HeroSection/>}/>
         <Route path='/'  element={<Subject/>}/>
         <Route path='/'  element={<Testimonials/>}/>
         <Route path='/resources'  element={<Resources/>}/>
         <Route path='/details'  element={<UserDetailsForm/>}/>
         {/* <Route path="/meeting" element={< Meeting  
         meetingNumber = '713 1700 9557'
         role = {0}
         sdkkey = ''
         sdkSecret = 'MaRofWccEkQD1eUybIm88fTk43aMh1ZH'
         password = 'phK9v1'
         userName = 'Testing'
         userEmail = ''
         leaveurl = 'https://localhost:4000'
         
         />}  /> */}
</Route>
        {/* <Route path='/signup'  element={<Signup/>}/>
        <Route path='/login'  element={<Login />}/>
         */}
        
      </Routes>
</BrowserRouter>
<Footer/>
     
    </div>
  );
}

export default App;
