import React, { Component } from 'react';
import Auxillary from '../../hoc/Auxillary/Auxillary';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
class Layout extends Component {
    state = {
        section:''
    }
    componentDidMount = () =>{
        this.setState({
            section:"home"
        });
    }
    selectMenuHandler = (name) =>{
        this.setState({
            section:name
        });
    }

    render(){
        return (
            <Auxillary>
                <Header selectedMenu = {this.state.section} clicked = {this.selectMenuHandler}></Header>
                <div>
                    {this.props.children}
                </div>
                <Footer></Footer>
            </Auxillary>
        )
    }
}
export default Layout;
