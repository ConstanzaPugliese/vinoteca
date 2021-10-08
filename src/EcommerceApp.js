import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CartContextProvider } from './context/CartContext';
import Alert from './components/alert/Alert'
import Header from './components/header/Header';
import Search from './pages/search/Search';
import Home from './containers/home/Home';
import Us from './pages/us/Us';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import Buy from './containers/buy/Buy';
import Policies from './pages/policies/Policies';
import Contact from './containers/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="App container-fluid">
          <Alert />
          <Header />
          <Switch>
            <Route exact path="/search" component={Search} />
            <Route exact path='/' component={Home} />
            <Route exact path='/us' component={Us} />
            <Route exact path='/policies' component={Policies} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/buy' component={Buy} />
            <Route exact path='/products' component={ItemListContainer} />
            <Route exact path="/:category" component={ItemListContainer} />
            <Route exact path="/products/:id" component={ItemDetailContainer} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
