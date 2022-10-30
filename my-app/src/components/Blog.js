import React from 'react'
import { Link } from 'react-router-dom';
import logo from './logo.png';
import {Container, Card, Button, Row, Col} from 'react-bootstrap';
import {blogList} from './b.js';
import Footer from './Footer'
import Navbars from './Navbar.js'
      
      {/* <div className="container" id='blog-container'>
        <h2>Blogs</h2>
        <div className="row">
          <div className='px-4 py-2 col-lg-4 col-sm-6 col-12'>
          <div className='blog-card hover-box card'>
            <img src={logo} alt="" className='card-img-top'/>
            <div className="card-body">
              <div className="card-title h5">
                Intro to Game Development</div>
                <div className="blog-date mb-2">
                  2018-07-21</div>
                <div className="blog-date mb-2">
                  An overview of how game development works and various
                  roles involved.
                  </div>
                  <div className="blog-author">
                    By <br />
                    Sachin Jain
                  </div>
                   
                  
                  </div>    
                  <a href="https://medium.com/@deepanshnagaria/intro-to-game-development-205193f5c66f"
                   className='btn btn-primary'>Follow Link</a>
            </div>
          </div>

          </div> */}
        {/* </div> */}
const BlogCard = props => {
    return (
        <Card className="blog-card hover-box">
            <Card.Img variant="top" src={props.blog.image}/>
            <Card.Body>
                <Card.Title>{props.blog.title}</Card.Title>

                <div className="blog-date mb-2">{props.blog.date}</div>
                <div className="blog-text mb-2">{props.blog.text}</div>
                <div className="blog-author">By {props.blog.author}</div>
                
                
            </Card.Body>
            <Button variant="primary" href={props.blog.link}>Follow Link</Button>
        </Card>
    )
}

export default function Blog(props){
    return (
        <React.Fragment>
        <Navbars/>
            <Container id="blog-container">
                <h3>Blogs</h3>
                <Row>
                    {
                        blogList.map((obj, i) => {
                            return (
                                <Col key={i} xs={12} sm={6} lg={4} className={"px-4 py-2"}>
                                    <BlogCard blog={obj}/>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
            <Footer/>
        </React.Fragment>
        
    )
}

        
        
   

