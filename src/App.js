import {useEffect, lazy, Suspense} from 'react'
import {useDispatch} from 'react-redux'
import { onAuthStateChangedListener, createUserDocumentFromAuth, getCurrentUser } from './utils/firebase/firebase.utils'
import { Routes, Route } from "react-router-dom";
import { checkUserSession } from './store/user/user.action';
// import Home from "./routes/home/home.component";
// import Navigation from "./routes/navigation/navigation.component";
// import Authentication from "./routes/authentication/authentication.component";
// import Shop from "./routes/shop/shop.component";
import Spinner from './components/spinner/spinner.component';
// import CheckOut from "./routes/checkout/checkout.component";

const Home = lazy(() => import("./routes/home/home.component"))
const CheckOut = lazy(() => import("./routes/checkout/checkout.component"))
const Shop = lazy(() => import("./routes/shop/shop.component"))
const Navigation = lazy(() => import("./routes/navigation/navigation.component"))
const Authentication = lazy(() => import("./routes/authentication/authentication.component"))

const App = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(checkUserSession())
  }, [])

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path='/' element={<Navigation/>}>
          <Route index element={<Home/>}/>
          <Route path='shop/*' element={<Shop/>}/>
          <Route path='auth' element={<Authentication/>}/>
          <Route path='checkout' element={<CheckOut/>}/>
        </Route>
      </Routes>
    </Suspense>
  )
};

export default App;
