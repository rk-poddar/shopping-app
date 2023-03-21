import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Product from './pages/Product'
import ContactUs from './pages/ContactUs'
import Login from './pages/Login'
import Error from './pages/Error'
import Dashboard from './components/Dashboard'
import { useState } from 'react'

function App(props) {

  // for login
  const [user, setUser] = useState(false)

  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/product' element={<Product />}></Route>
            <Route path='/contactus' element={<ContactUs />}></Route>
            
            {!user && <Route exact path='/login' element={<Login auth={() => setUser(true)}/>}></Route>}
            {user && <Route exact path='/dashboard' element={<Dashboard ulogout={() => setUser(false)}/>} />}
            
            <Route path='*' element={<Error />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
