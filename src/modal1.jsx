import React from 'react';

class Modal1 extends React.Component {
    render() {
        const { text, onClose } = this.props;
        <div id="modal-01" className="popup-modal mfp-hide">

            <img className="scale-with-grid" src="images/portfolio/modals/m-coffee.jpg" alt="" />

            <div className="description-box">
                <h4>Coffee Cup</h4>
                <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                <span className="categories"><i className="fa fa-tag"></i>Branding, Webdesign</span>
            </div>

            <div className="link-box">
                <a href="http://www.behance.net">Details</a>
                <a className="popup-modal-dismiss close" onClick={() => onClose()}>Close</a>
            </div>

        </div>
    }

};

export default Modal1;
