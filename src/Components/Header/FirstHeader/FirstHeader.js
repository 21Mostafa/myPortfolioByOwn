import React from 'react';
 
 
 

const FirstHeader = () => {
    return (
        <div className="p-1">
             
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/Work">Work</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active " aria-current="page" href="/about/contact">about / contact</a>
        </li>       
      </ul>
      <div class="text-center  me-auto ">
        <h5>  <a class="nav-link active " style={{color: 'black'}} aria-current="page" href="/"> <b>Mostafa Kamal</b></a></h5>
       
        
</div>

      <form class="d-flex" >
        
     <a target="_blank" rel="noreferrer"  href="https://www.facebook.com/mostafa.kamalmk.12/"> <i style={{color: 'black'}}   class="fab fa-facebook p-3"></i></a>
     <a target="_blank" rel="noreferrer"  href="https://www.instagram.com/iammostafakamal/"> <i style={{color: 'black'}} class="fab fa-instagram-square p-3"></i></a>
    <a target="_blank" rel="noreferrer"  href="https://twitter.com/home">  <i style={{color: 'black'}} class="fab fa-twitter p-3"></i></a>
    <a target="_blank" rel="noreferrer"  href="https://www.linkedin.com/in/mostafa-kamal-82b774213/"> <i  style={{color: 'black'}}class="fab fa-linkedin p-3"></i></a>
      </form>
    </div>
  </div>
</nav>
        </div>
    );
};

export default FirstHeader;