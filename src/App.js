import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Resume from "./components/Resume";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeData: {},
      modal: false,
    }
  }
  componentDidMount(){
    this.getResumeData();
  }
  getResumeData(){
    $.ajax({
      url: 'http://localhost:3000/resumeData.json',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({resumeData: data})
      }.bind(this),
      error: function (xhr, status, err)   { 
        console.log(err);
        alert(err);
       }
    })
  }
//   renderModal(){
//     if(this.state.modal) {
//         return(
//             <Modal1 text={"Modal Text"} onClose={()=> this.setState({modal: false})} />
//         )
//     }
//     return null;
// }
  render() {
    console.log(this.state.resumeData);
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main} />
        <Resume data={this.state.resumeData.resume}/>
        <Portfolio data={this.state.resumeData.portfolio}/>
        <Testimonials data={this.state.resumeData.testimonials} />
        <Contact data={this.state.resumeData.main}/>
        <Footer />
      </div>
    );
  }
}

export default App;
