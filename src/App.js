import React, {Component} from 'react';
import Layout from './containers/Layout/Layout';
import AboutMe from './components/AboutMe/AboutMe';
import Experience from './components/Experience/Experience';
import Technology from './components/Technology/Technology';
import Certification from './components/Certification/Certification';


class App extends Component{
    render(){
        return(
            <Layout>
                <AboutMe></AboutMe>
                <Experience></Experience>
                <Technology></Technology>
                <Certification></Certification>
            </Layout>
        )
    }
}

export default App;