import React, { Component } from "react";

export default class Home extends Component {
    render() {
        return (
            <div>
                <section className="home_banner_area">
                    <div className="container box_1620">
                        <div className="banner_inner d-flex align-items-center">
                            <div className="banner_content">
                                <div className="media">
                                    <div className="d-flex">
                                        <img src={`${process.env.PUBLIC_URL}/images/portrait.png`} style={{maxWidth: 700}} alt=""/>
                                    </div>
                                    <div className="media-body">
                                        <div className="personal_text">
                                            <h6>Hello Everybody, i am</h6>
                                            <h3>Xavier Lien</h3>
                                            <h4>Computer science student</h4>
                                            <p>With a passion for artificial intelligence, machine learning, data science and mathematics</p>
                                            <ul className="list basic_info">
                                                <li><a href="https://www.facebook.com"><i className="lnr lnr-envelope" />xavilien@gmail.com</a></li>
                                                <li><a href="https://www.facebook.com"><i className="lnr lnr-home" />Singapore</a></li>
                                            </ul>
                                            <ul className="list personal_social">
                                                <li><a href="https://www.linkedin.com/in/xavilien/"><i className="fa fa-linkedin" /></a></li>
                                                <li><a href="https://www.github.com/xavilien"><i className="fa fa-github" /></a></li>
                                                <li><a href="https://www.medium.com/@xavilien"><i className="fa fa-medium" /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
