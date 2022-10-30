import React from 'react'
import { Link } from 'react-router-dom';
import logo from './logo.png';
import {Container, Card, Button, Row, Col} from 'react-bootstrap';
import Footer from './Footer'
import Navbars from './Navbar.js'

export default function Project()  {
    return (
        <>
     <Navbars/>

        <div class="container-fluid bg-2 text-center" id="initiatives">
		<div class="container">
        <h2 class="heading margin">Projects</h2>
        
        </div></div>
        <div class="row gx-5 justify-content-center m-2">
        <Col className={"px-4 py-2"} xs={12} sm={6} lg={4}>
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
        </Card>        </Col>


        <Col className={"px-4 py-2"} xs={12} sm={6} lg={4}>
  
  <div class="card">
<div class="card-header" id="headingTwo">
<h5 class="mb-0">
  <button class="btn btn-link" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
    project 2
  </button>
</h5>
</div>

<div id="collapseTwo" class="collapse show" aria-labelledby="headingTwo" data-parent="#accordion">
<div class="card-body">
  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
</div>
</div>
</div>
  </Col>


  <Col className={"px-4 py-2"} xs={12} sm={6} lg={4}>
  
  <div class="card">
<div class="card-header" id="headingTree">
<h5 class="mb-0">
  <button class="btn btn-link" data-toggle="collapse" data-target="#collapseTree" aria-expanded="true" aria-controls="collapseTree">
    project 3
  </button>
</h5>
</div>

<div id="collapseTree" class="collapse show" aria-labelledby="headingTree" data-parent="#accordion">
<div class="card-body">
  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
</div>
</div>
</div>
  </Col>


  <Col className={"px-4 py-2"} xs={12} sm={6} lg={4}>
  
  <div class="card">
<div class="card-header" id="headingFour">
<h5 class="mb-0">
  <button class="btn btn-link" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
    project 4
  </button>
</h5>
</div>

<div id="collapseFour" class="collapse show" aria-labelledby="headingFour" data-parent="#accordion">
<div class="card-body">
  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
</div>
</div>
</div>
  </Col>

  <Col className={"px-4 py-2"} xs={12} sm={6} lg={4}>
  
  <div class="card">
<div class="card-header" id="headingFive">
<h5 class="mb-0">
  <button class="btn btn-link" data-toggle="collapse" data-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
    project 5
  </button>
</h5>
</div>

<div id="collapseFive" class="collapse show" aria-labelledby="headingFive" data-parent="#accordion">
<div class="card-body">
  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
</div>
</div>
</div>
  </Col>

  <Col className={"px-4 py-2"} xs={12} sm={6} lg={4}>
  
  <div class="card">
<div class="card-header" id="headingSix">
<h5 class="mb-0">
  <button class="btn btn-link" data-toggle="collapse" data-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
    project 6
  </button>
</h5>
</div>

<div id="collapseSix" class="collapse show" aria-labelledby="headingSix" data-parent="#accordion">
<div class="card-body">
  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
</div>
</div>
</div>
  </Col>


  
        </div>


        <Footer/>

      
        </>
    )
  }
