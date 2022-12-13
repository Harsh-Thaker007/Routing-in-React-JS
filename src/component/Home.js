

function Home() {
    return (
        <header>
            <section className="container main-hero-container">
                <div className="row">
                    <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start">
                        <h1 className="display-2">Online Payment Made Easy For You</h1>
                        <p className="main-hero-para">
                            Aenean sed elementum quam. In vestibulum convallis lobortis. Morbi eu sagittis dolor, at dapibus urna. Nulla facilisis commodo hendrerit. In maximus tortor nec justo finibus, vel imperdiet turpis consectetur. Nullam velit nisl, elementum ac viverra sit amet, tristique vitae purus. Nulla pretium, enim eu posuere cursus, eros metus rhoncus libero, et aliquet ante elit in ante.
                        </p>
                        <h3>Get early acces for u</h3>
                        <div className="input-group">
                            <input type="text" className="rounded-pill w-75 me-3 form-control-text" placeholder="Enter your email"/>
                            <div className="input-group-button">GET IT NOW</div>
                        </div>
                    </div>
                    {/* main header */}
                    <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-image">
                        <img src="./images/h1.jpg" className="img-fluid" />
                        <img src="./images/h2.jpg" className="img-fluid main-img2" />
                    </div>
                </div>

            </section>
        </header>

    );
}

export default Home;