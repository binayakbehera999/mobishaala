import React from "react"
import GoogleMapReact from 'google-map-react';
import "./style.css"

const ContactUs = () => {
    return (
        <div className="contact-container">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 " style={{ textAlign: "left", marginTop: "2rem", marginBottom: "2rem" }}>
                        <h1>Contact</h1>
                        <h3>Delhi office</h3>
                        <br></br>
                        <br></br>


                        <div class="message">
                            <div>
                                Call : +91 9818073460<br></br>
                                <br></br>

                                Email: born2lead.rahul@gmail.com<br></br>
                                <br></br>

                                B-4, 37-39,<br></br>
                                Ansal Building,<br></br>
                                Delhi - 110009
                </div>
                        </div>
                    </div>
                    <div className="col-lg-6 map-container">
                        <div style={{ height: '100%', width: '100%' }}>
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: "AIzaSyD4cycr5XWZaSxP7JmMhWraFhCk4mBhCGo" }}
                                defaultCenter={{ lat: 59.95, lng: 30.33 }}
                                defaultZoom={11}
                            >

                            </GoogleMapReact>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ContactUs;