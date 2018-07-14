import React, { Component } from 'react';


class ContactForm extends Component {
  render() {

    return (
      <form onSubmit={this.handleSubmit} method="post" id="contactForm" name="contactForm">
        <fieldset>
          <div>
            <label htmlFor="name">Name <span className="required">*</span></label>
            <input type="text" size="35" id="name" name="name" />
          </div>
          <div>
            <label htmlFor="email">Email <span className="required">*</span></label>
            <input type="text" size="35" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="message">Message <span className="required">*</span></label>
            <textarea cols="50" rows="10" id="message" name="message" maxLength='500'></textarea>
          </div>
          <div>
            <button onClick={this.props.sendMail} className="submit">Submit</button>
            {/* <span id="image-loader">
                       <img alt="" src="images/loader.gif"/>
                    </span> */}
          </div>
        </fieldset>
      </form>
    );
  }
}

export default ContactForm;
