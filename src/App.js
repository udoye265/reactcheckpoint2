import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Card, } from "react-bootstrap";

const App = () => {
  return (
    <>
      <div className="App">
        <Nav>
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">Navbar</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Features</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Pricing</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </Nav>

        <Container>
     <Card>
     <div class="card">
  
  <div class="card-body">
    <h2 class="card-title">Card title</h2>
    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
     </Card>

    
     <Card>
     <div class="card">
  
  <div class="card-body">
    <h2 class="card-title">Card title</h2>
    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
     </Card>


     <Card>
     <div class="card">
  
  <div class="card-body">
    <h2 class="card-title">Card title</h2>
    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
     </Card>



        </Container>
      </div>
    </>
  );
};

export default App;
