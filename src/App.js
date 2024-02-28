// import logo from './logo.svg';
//import './App.css';
import HomePage from './pages/homePage.js';
import AboutPage from './pages/aboutPage.js'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import AppNavBar from './pages/appNavBar';
import CustomerPage from './pages/customerPage.js';
import Counter from './components/customers/counter';
import UseEffectDemo from './components/customers/useEffectDemo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppNavBar/>
        <br/>
        <br/>
        <div className='container'>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/home" component={HomePage}/>
          <Route path="/customers" component={CustomerPage}/>
          <Route path="/about" component={AboutPage}/>
          <Route path="/counter" component={Counter}/>
          <Route path="/useeffect" component={UseEffectDemo}/>
        </Switch></div>
      </BrowserRouter>
    </div>
  );
}

export default App;
