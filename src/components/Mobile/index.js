import React from "react"
import "./style.css"
import Img from "../../playstore.png"
import ScreenImg from "../../screen.png"


const Mobile = () => {
    return (
        <div className="container">
            <div className="row class-container">

                <div className="col-lg-6 description-container">
                    <h1>Join Classes</h1>
                    <h3>Download Mobishaala</h3>
                    <br></br>

                    <h3>Use instiute code SASASA</h3>
                    <br></br>
                    <div className="row">
                        <div className="col-lg-6">
                            <img src={Img} className="playstore"></img>
                        </div>
                        <div className="col-lg-6">

                            <img src={Img} className="playstore"></img>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <img className="mob-img" src={ScreenImg}></img>

                </div>

            </div>
        </div>
    )
}

export default Mobile;