import React from "react"
import {
    Card, CardImg, CardText, CardBody,
} from 'reactstrap';

import Img from "../../c1.jpg"
import "./style.css"


const Courses = () => {
    return (
        <div className="notification-container">

            <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-2 card-container">

                    <Card className="card-box">
                        <CardImg top width="100%" src={Img} alt="Card image cap" />
                        <CardBody>

                            <CardText> Free workshop with Topper's Meet</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-lg-2 card-container">
                    <Card className="card-box">
                        <CardImg top width="100%" src={Img} alt="Card image cap" />
                        <CardBody>

                            <CardText> Free workshop with Topper's Meet</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-lg-2 card-container">
                    <Card className="card-box">
                        <CardImg top width="100%" src={Img} alt="Card image cap" />
                        <CardBody>

                            <CardText> Free workshop with Topper's Meet</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-lg-2 card-container">
                    <Card className="card-box">
                        <CardImg top width="100%" src={Img} alt="Card image cap" />
                        <CardBody>

                            <CardText> Free workshop with Topper's Meet</CardText>
                        </CardBody>
                    </Card>
                </div>

            </div>
        </div >
    );
};

export default Courses;