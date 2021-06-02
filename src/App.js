import React from 'react';
import "aos/dist/aos.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import LandingPage from './pages/Landingpage';
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () =>{
    return(
     <div>
       <BrowserRouter>
             <Switch>
                 <Route path="/" component={LandingPage} />
             </Switch>
       </BrowserRouter>
     </div>
    )
}

export default App;
