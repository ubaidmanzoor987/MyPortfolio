import './main.css';
import {Route, Switch } from 'react-router-dom'
import Sidebar from './sidebar/sidebar'
import Home from './pages/home/home';
import About from './pages/about/about';
import Resume from './pages/resume/resume';
import Contact from './pages/contact/contact';
import Portfolios from './pages/portfolios/porfolio';


function Main() {
  return (
      <div className='main' >
        <Sidebar/>
        <div className="submain">
           <Switch>
           <Route path="/" exact component={Home} /> 
           <Route path="/home" component={Home} />
           <Route path="/about" component={About} />
           <Route path="/resume" component={Resume} />
           <Route path="/portfolios" component={Portfolios} />
           <Route path="/contact" component={Contact} />
           </Switch> 
           
        </div>
      </div>
  );
}

export default Main;