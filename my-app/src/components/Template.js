import React from 'react'
import logo from './logo.png';
import Test from './home-test.242bb8bd.svg'
import Footer from './Footer'
import { Link } from 'react-router-dom';
import {Container, Card, Button, Row, Col, Navbar} from 'react-bootstrap';
import Navbars from './Navbar.js'
export default function Template()  {
  
    return (
      <>

<Navbars/>
        
        <header class="bg-dark py-5">
            <span class="container px-5">
                <div class="row gx-5 justify-content-center">
                    <div class="col-lg-6">
                        <div class="text-center my-5">
                            <h1 class="display-5 fw-bolder text-white mb-2">ACM IITR <br></br>
                         </h1>
                            <h4 class="display-10 fw-bolder text-white mb-2">    Association of Computing Machinery<br></br>IIT ROORKEE </h4>
                            <p class="lead text-white-50 mb-4">We are a bunch of enthusiatic students who aim at uniting the computing fraternity at IIT Roorkee under one tag and allows the students to learn together and share their knowledge to cater the interests of the individuals as well as the institute as a whole.</p>
                            <div class="d-grid gap-3 d-sm-flex justify-content-sm-center">
                                <a class="btn btn-primary btn-lg px-4 me-sm-3" href="#features">About Us</a>
                                <a class="btn btn-outline-light btn-lg px-4" href="#!">Know More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <span xs={12} md={5} className={"text-center mb-3 d-none d-md-block"}>
                        <img src={Test} alt="logo" width={400} />
                    </span>    
            </span>
           
        </header>

        <section class="py-5 border-bottom" id="features">
            <div class="container px-5 my-5">
                <div class="row gx-5">
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-collection"></i></div>
                        <h2 class="h4 fw-bolder">EVENTS </h2>
                        <p>We conduct many events like discussions,open projects and hackathons.</p>
                        <a class="text-decoration-none" href="#!">
                            Click to get more details
                            <i class="bi bi-arrow-right"></i>
                        </a>
                    </div>
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-building"></i></div>
                        <h2 class="h4 fw-bolder">BLOGS</h2>
                        <p>We have published some blogs on various topics like Operating System,Deep learning etc.</p>
                        <a class="text-decoration-none" href="#!">
                        Click to get more details
                            <i class="bi bi-arrow-right"></i>
                        </a>
                    </div>
                    <div class="col-lg-4">
                        <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-toggles2"></i></div>
                        <h2 class="h4 fw-bolder">PROJECTS</h2>
                        <p>We have made many projects.</p>
                        <a class="text-decoration-none" href="#!">
                        Click to get more details
                            <i class="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
               
            </div>
        </section>
       

        <section class="bg-light py-5 border-bottom">
            <div class="container px-5 my-5"> 
                {/* <div>
                    <span class="fw-bolder text-left" >Events</span>
                    <button ><p class="lead mb-0 text-sm-right">Show All</p></button>
                </div> */}
                <h3 className='pt-5 pb-3 d-flex justify-content-between'>
                    <span>Projects</span>
                    <a href="#" className='car-button btn btn-outline-primary btn-sm'>Show All</a>
                </h3>
                <div class="row gx-5 justify-content-center">
                    {/* <!-- Pricing card free--> */}
                    
                                <Col>
                                <Card className="blog-card hover-box">
            <Card.Img variant="top" src={logo} width="80"/>

        <div class="card">
    <div class="card-header" id="headingOne">
      <h5 class="mb-0">
        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
           Project: Genre Classifier
        </button>
      </h5>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
      <div class="card-body">
      A music genre classifier which classifies songs based on their audio frequencies. A mini project for making students learn how to implement various Machine Learning Algorithms and gain a clearer insight over various concepts of Machine Learning under "Learning through Projects" series.
        </div>
    </div>
  </div>
        </Card>
        </Col>     
          
    <Col>
        <Card className="blog-card hover-box">
            <Card.Img variant="top" src={logo} width="80"/>

        <div class="card">
    <div class="card-header" id="headingOne">
      <h5 class="mb-0">
        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
           Project: Genre Classifier
        </button>
      </h5>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
      <div class="card-body">
      A music genre classifier which classifies songs based on their audio frequencies. A mini project for making students learn how to implement various Machine Learning Algorithms and gain a clearer insight over various concepts of Machine Learning under "Learning through Projects" series.
        </div>
    </div>
  </div>
        </Card>
        </Col>
    <Col> 
        <Card className="blog-card hover-box">
            <Card.Img variant="top" src={logo} width="80"/>

        <div class="card">
    <div class="card-header" id="headingOne">
      <h5 class="mb-0">
        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
           Project: Genre Classifier
        </button>
      </h5>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
      <div class="card-body">
      A music genre classifier which classifies songs based on their audio frequencies. A mini project for making students learn how to implement various Machine Learning Algorithms and gain a clearer insight over various concepts of Machine Learning under "Learning through Projects" series.
        </div>
    </div>
  </div>
        </Card>
        </Col>
      
                                
        
                     

         
            </div>
            </div>
        </section>



        <section class="bg-light py-5 border-bottom">
            <div class="container px-5 my-5">
            <h3 className='pt-5 pb-3 d-flex justify-content-between'>
                    <span>Blogs</span>
                    <a href="#" className='car-button btn btn-outline-primary btn-sm'>Show All</a>
                </h3>
                <div class="row gx-5 justify-content-center">
                    {/* <!-- Pricing card free--> */}
                    <Col> 
        <Card className="blog-card hover-box">
            <Card.Img variant="top" src={logo} width="80"/>

            <Card.Body>
                <Card.Title>Intro to Game Development</Card.Title>

                <div className="blog-date mb-2">28-07-2017</div>
                <div className="blog-text mb-2">Lorem ipsum dolor sit amet.</div>
                <div className="blog-author">By Vasu</div>
                
                
            </Card.Body>
            <Button variant="primary" href='#'>Follow Link</Button>
        </Card>
        </Col>

        <Col> 
        <Card className="blog-card hover-box">
            <Card.Img variant="top" src={logo} width="80"/>

            <Card.Body>
                <Card.Title>Intro to Game Development</Card.Title>

                <div className="blog-date mb-2">28-07-2017</div>
                <div className="blog-text mb-2">Lorem ipsum dolor sit amet.</div>
                <div className="blog-author">By Vasu</div>
                
                
            </Card.Body>
            <Button variant="primary" href='#'>Follow Link</Button>
        </Card>
        </Col>


        <Col> 
        <Card className="blog-card hover-box">
            <Card.Img variant="top" src={logo} width="80"/>

            <Card.Body>
                <Card.Title>Intro to Game Development</Card.Title>

                <div className="blog-date mb-2">28-07-2017</div>
                <div className="blog-text mb-2">Lorem ipsum dolor sit amet.</div>
                <div className="blog-author">By Vasu</div>
                
                
            </Card.Body>
            <Button variant="primary" href='#'>Follow Link</Button>
        </Card>
        </Col>

                </div>
            </div>
        </section>
        {/* <section class="py-5 border-bottom">
            <div class="container px-5 my-5 px-5">
                <div class="text-center mb-5">
                    <h2 class="fw-bolder">Customer testimonials</h2>
                    <p class="lead mb-0">Our customers love working with us</p>
                </div>
                <div class="row gx-5 justify-content-center">
                    <div class="col-lg-6">
                        {/* <!-- Testimonial 1--> */}
                        {/* <div class="card mb-4">
                            <div class="card-body p-4">
                                <div class="d-flex">
                                    <div class="flex-shrink-0"><i class="bi bi-chat-right-quote-fill text-primary fs-1"></i></div>
                                    <div class="ms-4">
                                        <p class="mb-1">Thank you for putting together such a great product. We loved working with you and the whole team, and we will be recommending you to others!</p>
                                        <div class="small text-muted">- Client Name, Location</div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {/* <!-- Testimonial 2--> */}
                        {/* <div class="card">
                            <div class="card-body p-4">
                                <div class="d-flex">
                                    <div class="flex-shrink-0"><i class="bi bi-chat-right-quote-fill text-primary fs-1"></i></div>
                                    <div class="ms-4">
                                        <p class="mb-1">The whole team was a huge help with putting things together for our company and brand. We will be hiring them again in the near future for additional work!</p>
                                        <div class="small text-muted">- Client Name, Location</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> */} 


        <section class="bg-light py-5">
            <div class="container px-5 my-5 px-5">
                <div class="text-center mb-5">
                    <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-envelope"></i></div>
                    <h2 class="fw-bolder">Get in touch</h2>
                    <p class="lead mb-0">We'd love to hear from you</p>
                </div>
                <div class="row gx-5 justify-content-center">
                    <div class="col-lg-6">
                       
                         {/* <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                        
                             <div class="form-floating mb-3">
                                <input class="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                                 <label for="name">Full name</label>
                                <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                             </div>
                           
                             <div class="form-floating mb-3">
                                <input class="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                                <label for="email">Email address</label>
                                <div class="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                <div class="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                             </div>
                       
                             <div class="form-floating mb-3">
                                 <input class="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                                 <label for="phone">Phone number</label>
                                 <div class="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                             </div>
                            <div class="form-floating mb-3">
                                 <textarea class="form-control" id="message" type="text" placeholder="Enter your message here..." style="height: 10rem" data-sb-validations="required"></textarea>
                                 <label for="message">Message</label>
                                 <div class="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                             </div>
                             {/* <div class="d-none" id="submitSuccessMessage">
                                 <div class="text-center mb-3">
                                    <div class="fw-bolder">Form submission successful!</div>
                                   To activate this form, sign up at
                                    <br />
                                     <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                 </div>
                             </div><div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div> */}
{/*                         
                             <div class="d-grid"><button class="btn btn-primary btn-lg disabled" id="submitButton" type="submit">Submit</button></div>
                        </form> */} 
                    </div>
                </div>
            </div>
        </section> 
        {/* <footer class="py-5 bg-dark">
            <div class="container px-5"><p class="m-0 text-center text-white">The IIT Roorkee ACM Student Chapter is an official open student body under the aegis of the Student Technical Council, IIT Roorkee.</p></div>
        </footer> */}
        <Footer/>

        
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>

        <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
      </>
    )
  }
