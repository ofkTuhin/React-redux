
import Product from './Components/Product/Product';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import ProductContainer from './Components/ProductContainer/ProductContainer';
import ProductDetails from './Components/ProductDetails/ProductDetails';


function App() {
  

  return (
    <div className="App">
       <Router>
      
        <Switch>
          <Route path="/productContainer">
            <ProductContainer></ProductContainer>
          </Route>
          <Route path="/productDetails/:id">
            <ProductDetails />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
     
    </Router>
    
    </div>
  );
}

export default App;
