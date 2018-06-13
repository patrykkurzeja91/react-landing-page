import React, { Component } from 'react';


class Testimonials extends Component {
  render() {
    if (this.props.data) {
      var testimonials = this.props.data.testimonials.map((testimonial) => {
          return (
            <li key={testimonial.user}>
                          <blockquote>
                             <p>{testimonial.text}</p>
                             <cite>{testimonial.user}</cite>
                          </blockquote>
                       </li> 
          )
      });
  }
    return (
        <section id="testimonials">
        <div className="text-container">
           <div className="row">
              <div className="two columns header-col">
                 <h1><span>Client Testimonials</span></h1>
              </div>
              <div className="ten columns flex-container">
                    <ul className="slides">
                       {testimonials}
                    </ul>
              </div> 
           </div> 
         </div> 
     </section>
    );
  }
}

export default Testimonials;
