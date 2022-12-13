import React, { useState } from "react";
import { useActionData } from "react-router-dom";
import Howtouse from "../API/Howtouse";

function Demo() {
    const [aboutData, setAboutData] = useState(Howtouse);

    return (

        <section className="common-section our-services">
            <div className="container mb-5">
                <div className="row">
                    
                    <div className="col-12 col-lg-7 our-services-rightside-content align-item-start">
                        <h3 className="mini-title"> -- Avaiable on @ gooogel play store</h3>
                        <h1 className="main-heading">How to use app</h1>
                        {
                            aboutData.map((curElem) => {
                                const { id, title, info } = curElem;
                                return (<>
                                    <div className="row our-services-info" key={id}>
                                        <div className="col-1 our-services-number">{id}</div>
                                        <div className="col-10 our-services-data">
                                            <h2>{title}</h2>
                                            <p className="main-hero-para">{info}</p>
                                        </div>
                                    </div>
                                </>);
                            })}
                        <br />
                        <button className="btn-style btn-style-border">LEARN MORE</button>
                    </div>
                    <div className="col-12 col-lg-5 text-center our-services-rightside-img">
                        <img src="./images/p2.jpeg" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Demo;