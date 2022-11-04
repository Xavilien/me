import React, { Component } from "react";

export default class Cv extends Component {
    render() {
        return (
            <section className="mytabs_area p_120">
                <div className="container">
                    <div className="tabs_inner">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="profile-tab" data-toggle="tab" href={"#profile"} role="tab"
                                   aria-controls="profile" aria-selected="false">My Education</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="home-tab" data-toggle="tab" href={"#home"} role="tab"
                                   aria-controls="home" aria-selected="true">My Experiences</a>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <ul className="list">
                                    <li>
                                        <span></span>
                                        <div className="media">
                                            <div className="d-flex">
                                                <p>Aug 2023 to May 2027</p>
                                            </div>
                                            <div className="media-body">
                                                <h4>Carnegie Mellon University</h4>
                                                <p>Computer Science </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <span></span>
                                        <div className="media">
                                            <div className="d-flex">
                                                <p>Jan 2019 to Dec 2020</p>
                                            </div>
                                            <div className="media-body">
                                                <h4>Raffles Junior College</h4>
                                                <p>GCE 'A' Levels <br />H3 Mathematics, H2 Mathematics, Biology, Chemistry, Knowledge and Inquiry, H1 Economics</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <span></span>
                                        <div className="media">
                                            <div className="d-flex">
                                                <p>Jan 2015 to Dec 2018</p>
                                            </div>
                                            <div className="media-body">
                                                <h4>Raffles Institution</h4>
                                                <p>Integrated Programme <br />Computer Elective Programme</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <ul className="list">
                                    <li>
                                        <span></span>
                                        <div className="media">
                                            <div className="d-flex">
                                                <p>Jan 2021 to Nov 2022</p>
                                            </div>
                                            <div className="media-body">
                                                <h4>Singapore Armed Forces</h4>
                                                <p>Signals Officer</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <span></span>
                                        <div className="media">
                                            <div className="d-flex">
                                                <p>Apr 2019 to Jul 2020</p>
                                            </div>
                                            <div className="media-body">
                                                <h4>Science Research Programme</h4>
                                                <p>Student Researcher <br />in AI and NLP</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <span></span>
                                        <div className="media">
                                            <div className="d-flex">
                                                <p>Mar 2019 to Jul 2020</p>
                                            </div>
                                            <div className="media-body">
                                                <h4>The Food Bank Singapore</h4>
                                                <p>Student Leader </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <span></span>
                                        <div className="media">
                                            <div className="d-flex">
                                                <p>May 2019 to Apr 2020</p>
                                            </div>
                                            <div className="media-body">
                                                <h4>Raffles Tennis Team</h4>
                                                <p>Tennis Captain </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
