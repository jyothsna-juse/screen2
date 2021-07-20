import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-links',
  template: `
 
  <div class="header">
  
  <i class='fas fa-arrow-left' style="font-size:30px"></i><span style="font-size:25px"><b>Invited</b></span>
  </div>
  <div id="myCarousel" class="carousel slide" data-ride="carousel">
  <!-- Indicators -->
  <ol class="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
  </ol>


  <div class="carousel-inner">
  
    <div class="item active">
   
      <img src="assets/1.jpg" alt="bikeride" style="width:100%;">
      <button type="button">DUCATI</button>
    </div>

    <div class="item">
      <img src="assets/2.jpg" alt="bike" style="width:100%;">
    </div>
  
    <div class="item">
      <img src="assets/3.jpg" alt="bike" style="width:100%;">
    </div>
  </div>
</div>
  
 

<div class="container">
<div class="row">
<div class="col">
  <h1><b>Ride to Coorg</b></h1>
</div>

<div class="col">
<div class="btn  btn-lg active" role="button" aria-pressed="true"><h3>Free Ride</h3></div>
</div>
</div>
<br>
<br>
<p style="font-size:20px">When Carolyn Stafford's leg started hurting her, medical tests couldn't find a cause for the pain. Her doctor suggested that stress might be creating the problem.

At the time, Stafford was working a pressure-filled job in computer support. "I was constantly trying to solve people's problems," she says. "I had a lot of stress coming from that."

Since she enjoyed bicycling, Ms. Stafford decided to see if riding her bike to and from her job would help. She rode five miles each way. "It worked wonders. If it was a frustrating day, I'd get on that bike and I hammered coming home!" she says.</p>

<div class="row">

<div class="col">
<i class="fa fa-calendar" ></i><span style="font-size:15px"><b>July 27</b>03:00pm</span>





</div>
<div class="col">

  <img src="assets/liv.png" class="img1"><span style="font-size:15px"><b>900 KM</b>5Halts</span>
 
</div>
<div class="col">
<i class="fas fa-map-marker-alt"></i><span style="font-size:15px"><b>Gachibowli,Hyd</b>Drivercafe,ORR,Hyderabad</span>
</div>
</div>
</div>
<div class="container">
<div class="jumbotron">
<div class="row">
<div class="col">
<img src="assets/ava.png" class="avatar">
</div>
<div class="col">
<p> <b>Created by </b><br>Manish Surapaneni</p>

</div>
</div>
</div>

<div class="row">

<div class="col" style="background-color:orange;">
<div class="hover">
<h2><a href="#">Decline</a></h2>
</div>
</div>
<div class="col" style="background-color:yellow">
<div class="hover">
<h2><a href="#">Accepted</a></h2>
</div>
</div>
</div>
</div>


  `,
  styles: [`[class*="col-"] {
    width: 100%;
  }
  a,h2{
    text-align:center;
    text-decoration:none;
    color:white;
    padding-top:30px;
    padding-bottom:30px;
    
    
  }
  button{
    
      position: absolute;
      top: 80%;
      left: 20%;
      transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      background-color:red;
      color: white;
      font-size: 16px;
      padding: 12px 24px;
      border: solid;
      cursor: pointer;
      border-radius: 10px;
      text-align: center;
  
  }
  .hover:hover{
    background-color:green;
    color:black;
  }
  .header {
     background: linear-gradient(to right, #ff3300 0%, #ffcc00 100%);
    color: #ffffff;
    padding: 15px;
    height:100px;
  }
  @media only screen and (min-width: 600px) {
    /* For tablets: */
    .col-s-1 {width: 8.33%;}
    .col-s-2 {width: 16.66%;}
    .col-s-3 {width: 25%;}
    .col-s-4 {width: 33.33%;}
    .col-s-5 {width: 41.66%;}
    .col-s-6 {width: 50%;}
    .col-s-7 {width: 58.33%;}
    .col-s-8 {width: 66.66%;}
    .col-s-9 {width: 75%;}
    .col-s-10 {width: 83.33%;}
    .col-s-11 {width: 91.66%;}
    .col-s-12 {width: 100%;}
  }
  @media only screen and (min-width: 768px) {
    /* For desktop: */
    .col-1 {width: 8.33%;}
    .col-2 {width: 16.66%;}
    .col-3 {width: 25%;}
    .col-4 {width: 33.33%;}
    .col-5 {width: 41.66%;}
    .col-6 {width: 50%;}
    .col-7 {width: 58.33%;}
    .col-8 {width: 66.66%;}
    .col-9 {width: 75%;}
    .col-10 {width: 83.33%;}
    .col-11 {width: 91.66%;}
    .col-12 {width: 100%;}
  }[class*="col-"] {
  width: 100%;
}

@media only screen and (min-width: 600px) {
  /* For tablets: */
  .col-s-1 {width: 8.33%;}
  .col-s-2 {width: 16.66%;}
  .col-s-3 {width: 25%;}
  .col-s-4 {width: 33.33%;}
  .col-s-5 {width: 41.66%;}
  .col-s-6 {width: 50%;}
  .col-s-7 {width: 58.33%;}
  .col-s-8 {width: 66.66%;}
  .col-s-9 {width: 75%;}
  .col-s-10 {width: 83.33%;}
  .col-s-11 {width: 91.66%;}
  .col-s-12 {width: 100%;}
}
@media only screen and (min-width: 768px) {
  /* For desktop: */
  .col-1 {width: 8.33%;}
  .col-2 {width: 16.66%;}
  .col-3 {width: 25%;}
  .col-4 {width: 33.33%;}
  .col-5 {width: 41.66%;}
  .col-6 {width: 50%;}
  .col-7 {width: 58.33%;}
  .col-8 {width: 66.66%;}
  .col-9 {width: 75%;}
  .col-10 {width: 83.33%;}
  .col-11 {width: 91.66%;}
  .col-12 {width: 100%;}
}
.fa,.fas{
  font-size:30px;
  color:red;
 background: rgba( 255, 255, 255, 1.00 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 2px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 20px;
border: 10px solid rgba( 255, 255, 255, 0.18 );
}
.avatar {
  vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  paddignd-left:100px;
}
.img1{
  color:red;
  background: rgba( 255, 255, 255, 1.00 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 2px );
  -webkit-backdrop-filter: blur( 4px );
  border-radius: 20px;
  border: 10px solid rgba( 255, 255, 255, 0.18 );
}

.btn{
  background-color:red;
  border-radius:20px;
  color:white;
}
.container{
  padding-top:70px;
}
`
  ]
})
export class LinksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


}
