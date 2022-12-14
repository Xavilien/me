import React from "react";

export function About() {
    return (
        <section className="welcome_area p_120">
            <div className="container">
                <div className="row welcome_inner">
                    <div className="col-lg-6">
                        <div className="welcome_text">
                            <h4>About Myself</h4>
                            <p>I recently completed my National Service and I will be attending
                                Carnegie Mellon University in Fall 2023, where I will be pursuing
                                Computer Science. I have been coding since 2015, with a passion for
                                artificial intelligence, machine learning, data science and mathematics.</p>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="wel_item">
                                        <i className="lnr lnr-database"/>
                                        <h4>16</h4>
                                        <p>Total Projects</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="wel_item">
                                        <i className="lnr lnr-book"/>
                                        <h4>7</h4>
                                        <p>Years of coding</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="wel_item">
                                        <i className="lnr lnr-users"/>
                                        <h4>12</h4>
                                        <p>Years of formal education</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="tools_expert">
                            <div className="skill_main">
                                <div className="skill_item">
                                    <h4>Python Programming <span className="counter">85</span>%</h4>
                                    <div className="progress_br">
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" aria-valuenow={85}
                                                 aria-valuemin={0} aria-valuemax={100} style={{width: '85%'}}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="skill_item">
                                    <h4>Machine Learning <span className="counter">70</span>%</h4>
                                    <div className="progress_br">
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" aria-valuenow={70}
                                                 aria-valuemin={0} aria-valuemax={100} style={{width: '70%'}}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="skill_item">
                                    <h4>Web Development <span className="counter">40</span>%</h4>
                                    <div className="progress_br">
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" aria-valuenow={40}
                                                 aria-valuemin={0} aria-valuemax={100} style={{width: '40%'}}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}