import './App.css';
import Home from './screens/Home';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <App />
  </Router>,
  document.getElementById('root')
);

import Login from './screens/Login';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';  
import Signup from './screens/Signup.js';
import { CartProvider } from './components/ContextReducer.js';
import MyOrder from './screens/MyOrder.js';

function App() {
    return ( 
        <CartProvider>
       <Router>
       <div> 
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/creatuser" element={<Signup/>}/>
            <Route exact path="/myOrder" element={<MyOrder/>}/>
        </Routes>
       </div>
       </Router> 
       </CartProvider>
    );
}

export default App;