import AnchorButton from "../../components/buttons/AnchorButton";
import FormButton from "../../components/buttons/FormButton";
import image1 from '../../assets/images/99.png';
import image2 from '../../assets/images/62.jpg';
import cardImage from '../../assets/images/66.png';
import cardImage2 from '../../assets/images/67.png';
import cardImage3 from '../../assets/images/68.png';
import cardImage4 from '../../assets/images/69.png';
import blogImg from '../../assets/images/70.jpg';
import blogImg2 from '../../assets/images/71.jpg';
import blogImg3 from '../../assets/images/72.jpg';

function Home() {
    return (
        <>
            <div className="container-fluid ">
                <div id="carouselExampleFade" className="py-5 carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="container">
                                <div className='row align-items-center '>

                                    <div className='col-lg-6 col-md-6 col-12'>
                                        <div className=" text-start">
                                            <h1>Donate us to support
                                                flood-affected families in Pakistan</h1>
                                            <p>Saylani Welfare is on the ground and already working with local communities to assess how best to
                                                support affected families, who urgently need food, Ration, shelter, bedding, Medical Facility and
                                                hygiene items.</p>
                                            <p>
                                                <AnchorButton link='' >Sign up today</AnchorButton></p>
                                        </div>
                                    </div>
                                    <div className='col-lg-6 col-md-6 col-12'>
                                        <img src={image1} height='450px' className="d-block w-100" alt="..." />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="container">
                                <div className='row align-items-center'>

                                    <div className='col-lg-6 col-md-6 col-12'>
                                        <div className=" text-start">
                                            <h1>Chairman Message</h1>
                                            <p>The purpose of sending this message to you is so that you not only spread this message to others
                                                but also play your part in helping us to continue serving and helping the needy till the Day of
                                                Judgment.</p>
                                            <p>
                                                <AnchorButton link='' >About - Chairman Message</AnchorButton>
                                            </p>
                                        </div>
                                    </div>
                                    <div className='col-lg-6 col-md-6 col-12'>
                                        <img src={image2} height='450px' className="d-block w-100" alt="..." />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="container">
                                <div className='row align-items-center'>

                                    <div className='col-lg-6 col-md-6 col-12'>
                                        <div className=" text-start">
                                            <h1>Donate us to support
                                                flood-affected families in Pakistan</h1>
                                            <p>Saylani Welfare is on the ground and already working with local communities to assess how best to
                                                support affected families, who urgently need food, Ration, shelter, bedding, Medical Facility and
                                                hygiene items.</p>
                                            <p>
                                                <AnchorButton link='' >Sign up today</AnchorButton></p>
                                        </div>
                                    </div>
                                    <div className='col-lg-6 col-md-6 col-12'>
                                        <img src={image1} height='450px' className="d-block w-100" alt="..." />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button> */}
                </div>
                <div className='container card-container text-center mt-5 pt-5'>
                    <h2>NEW COURSES</h2>
                    <div className="under-line"></div>
                    <div className='row py-5'>
                        <div className='col-12 col-lg-6 col-md-6 col-sm-12'>
                            <div className="mb-3 new-course-card text-start">
                                <div className="row g-0">
                                    <div className="col-lg-4 col-12 d-md-flex align-items-center justify-content-center">
                                        <img src={cardImage} className="img-fluid rounded-start card-image" alt="SS" />
                                    </div>
                                    <div className="col-lg-8 col-12">
                                        <div className="card-body text-lg-start text-md-center">
                                            <h5 className="card-title">Food Daily</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-lg-6 col-md-6 col-sm-12'>
                            <div className="mb-3 new-course-card text-start">
                                <div className="row g-0">
                                    <div className="col-lg-4 col-12 d-md-flex align-items-center justify-content-center">
                                        <img src={cardImage2} className="img-fluid rounded-start card-image" alt="SS" />
                                    </div>
                                    <div className="col-lg-8 col-12">
                                        <div className="card-body">
                                            <h5 className="card-title">Family Adoption</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div><div className='col-12 col-lg-6 col-md-6 col-sm-12'>
                            <div className="mb-3 new-course-card text-start">
                                <div className="row g-0">
                                    <div className="col-lg-4 col-12 d-md-flex align-items-center justify-content-center">
                                        <img src={cardImage3} className="img-fluid rounded-start card-image" alt="SS" />
                                    </div>
                                    <div className="col-lg-8 col-12">
                                        <div className="card-body">
                                            <h5 className="card-title">Education</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div><div className='col-12 col-lg-6 col-md-6 col-sm-12'>
                            <div className="mb-3 new-course-card text-start">
                                <div className="row g-0">
                                    <div className="col-lg-4 col-12 d-md-flex align-items-center justify-content-center">
                                        <img src={cardImage4} className="img-fluid rounded-start card-image" alt="SS" />
                                    </div>
                                    <div className="col-lg-8 col-12">
                                        <div className="card-body">
                                            <h5 className="card-title">Medical</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div><div className='col-12 col-lg-6 col-md-6 col-sm-12'>
                            <div className="mb-3 new-course-card text-start">
                                <div className="row g-0">
                                    <div className="col-lg-4 col-12 d-md-flex align-items-center justify-content-center">
                                        <img src={cardImage} className="img-fluid rounded-start card-image" alt="SS" />
                                    </div>
                                    <div className="col-lg-8 col-12">
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div><div className='col-12 col-lg-6 col-md-6 col-sm-12'>
                            <div className="mb-3 new-course-card text-start">
                                <div className="row g-0">
                                    <div className="col-lg-4 col-12 d-md-flex align-items-center justify-content-center">
                                        <img src={cardImage2} className="img-fluid rounded-start card-image" alt="SS" />
                                    </div>
                                    <div className="col-lg-8 col-12">
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <AnchorButton link='courses' >View All Courses</AnchorButton>
                </div>
                <div className='container blog-container text-center py-5'>
                    <h2>Our Blogs</h2>
                    <div className="under-line"></div>
                    <div className='row pt-4'>
                        <div className='col-lg-4 col-md-6 col-sm-6 col-12 p-3'>
                            <div className="card text-start" >
                                <img src={blogImg} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Blog title</h5>
                                    <p className="card-text">Some quick example text to build on the Blog title and make up the bulk of the card's content.</p>
                                    <AnchorButton link='' >Read More</AnchorButton>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-6 col-12 p-3'>
                            <div className="card text-start" >
                                <img src={blogImg2} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Blog title</h5>
                                    <p className="card-text">Some quick example text to build on the Blog title and make up the bulk of the card's content.</p>
                                    <AnchorButton link='' >Read More</AnchorButton>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-6 col-12 p-3'>
                            <div className="card text-start" >
                                <img src={blogImg3} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Blog title</h5>
                                    <p className="card-text">Some quick example text to build on the Blog title and make up the bulk of the card's content.</p>
                                    <AnchorButton link='' >Read More</AnchorButton>
                                </div>
                            </div>
                        </div>
                    </div>
                    <AnchorButton link='blogs' >View All Blogs</AnchorButton>
                </div>
                <div className='container news-container text-center mt-5 pt-5'>
                    <h5>NEWS</h5>
                    <h2>Our Top News</h2>
                    <div className="under-line"></div>
                    <div className='row py-3'>
                        <div className='col-lg-4 col-md-6 col-sm-6 col-12 p-3'>
                            <div className="card text-start" >
                                <div className='card-img card-img-top'></div>
                                <div className="card-body">
                                    <h5 className="card-title">Blog title</h5>
                                    <p className="card-text">Some quick example text to build on the Blog title and make up the bulk of the card's content.</p>
                                    <AnchorButton link=''>Read More</AnchorButton>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-6 col-12 p-3'>
                            <div className="card text-start" >
                                <div className='card-img'></div>
                                <div className="card-body">
                                    <h5 className="card-title">Blog title</h5>
                                    <p className="card-text">Some quick example text to build on the Blog title and make up the bulk of the card's content.</p>
                                    <AnchorButton link=''>Read More</AnchorButton>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-6 col-12 p-3'>
                            <div className="card text-start" >
                                <div className='card-img'></div>
                                <div className="card-body ">
                                    <h5 className="card-title">Blog title</h5>
                                    <p className="card-text">Some quick example text to build on the Blog title and make up the bulk of the card's content.</p>
                                    <AnchorButton link=''>Read More</AnchorButton>
                                </div>
                            </div>
                        </div>
                    </div>
                    <AnchorButton link='news'>View All News</AnchorButton>
                </div>
                <div className='container subscribe-container text-center mt-5 pt-5 mb-3 pb-3'>
                    <h1>Subscribe <span>Newsletter</span></h1>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 p-0">
                            <form className='subscripe-form'>
                                <div className="input-group mb-3">
                                    <input type="email"
                                        className="form-control" placeholder="Your Email"
                                        aria-label="Your email" />
                                    <FormButton click={() => { }} type='submit'>Submit</FormButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;