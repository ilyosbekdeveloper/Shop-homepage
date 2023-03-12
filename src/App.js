import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div className="App">

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="#!">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item"><a class="nav-link active" aria-current="page" href="#!">Home</a></li>
                        <li className="nav-item"><a class="nav-link" href="#!">About</a></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#!">All Products</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                                <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <button className="btn btn-outline-dark img-btn" type="submit">
                            <img src="https://cdn-icons-png.flaticon.com/512/34/34568.png" className="p-2" alt="" />
                            Cart
                            <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
                        </button>
                    </form>
                </div>
            </div>
        </nav>

        {/* header */}
        <header className="bg-dark py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">Shop in style</h1>
                    <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                </div>
            </div>
        </header>

        {/* Section */}
        <section className="container mt-5">
          <div className="row">

            <div className="col col-3">

              <div className="box border">
                <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
                <div className="box-title text-center">
                  <h4>Fancy Product</h4>
                  <div className="price d-flex justify-content-center mb-4">
                    <div className="price-1"><span>$40.00 - </span></div>
                    <div className="price-2"><span>$80.00</span></div>
                  </div>
                  <button className="btn btn-outline-dark m-4">View options</button>
                </div>
              </div>

            </div>

            <div className="col col-3">

              <div className="box border sale">
                <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
                <div className="box-title text-center">
                  <h4>Special item</h4>

                  <div className="d-flex justify-content-center small text-warning mb-2 icon-img">                            <div class="bi-star-fill"></div>
                      <div><img src="https://freesvg.org/img/1289679474.png" alt="" /></div>
                      <div><img src="https://freesvg.org/img/1289679474.png" alt="" /></div>
                      <div><img src="https://freesvg.org/img/1289679474.png" alt="" /></div>
                      <div><img src="https://freesvg.org/img/1289679474.png" alt="" /></div>
                      <div><img src="https://freesvg.org/img/1289679474.png" alt="" /></div>
                    </div>

                  <div className="price d-flex justify-content-center mb-4">
                    <div className="price-1"><span className="under p-1">$40.00  </span></div>
                    <div className="price-2"><span> $18.00</span></div>
                  </div>
                  <button className="btn btn-outline-dark m-4 btn-block">Add to cart</button>
                </div>
              </div>

            </div>

            <div className="col col-3">

              <div className="box border sale">
                <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
                <div className="box-title text-center">
                  <h4>Sale Item</h4>
                  <div className="price d-flex justify-content-center mb-4">
                    <div className="price-1"><span className="under">$50.00 - </span></div>
                    <div className="price-2"><span>$25.00</span></div>
                  </div>
                  <button className="btn btn-outline-dark m-4">View options</button>
                </div>
              </div>

            </div>

            <div className="col col-3">

              <div className="box border">
                <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
                <div className="box-title text-center">
                  <h4>Popular Item</h4>

                  <div className="d-flex justify-content-center small text-warning mb-2 icon-img">                            <div class="bi-star-fill"></div>
                      <div><img src="https://freesvg.org/img/1289679474.png" alt="" /></div>
                      <div><img src="https://freesvg.org/img/1289679474.png" alt="" /></div>
                      <div><img src="https://freesvg.org/img/1289679474.png" alt="" /></div>
                      <div><img src="https://freesvg.org/img/1289679474.png" alt="" /></div>
                      <div><img src="https://freesvg.org/img/1289679474.png" alt="" /></div>
                    </div>

                  <div className="price d-flex justify-content-center mb-4">
                    <div className="price-1"></div>
                    <div className="price-2"><span>$40.00</span></div>
                  </div>
                  <button className="btn btn-outline-dark m-4">Add to cart</button>
                </div>
              </div>

            </div>

            <div className="col col-3">

              <div className="box border sale">
                <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
                <div className="box-title text-center">
                  <h4>Sale Item</h4>
                  <div className="price d-flex justify-content-center mb-4">
                    <div className="price-1"><span className="under">$50.00 - </span></div>
                    <div className="price-2"><span>$25.00</span></div>
                  </div>
                  <button className="btn btn-outline-dark m-4">Add to cart</button>
                </div>
              </div>

            </div>

            <div className="col col-3">

              <div className="box border">
                <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
                <div className="box-title text-center">
                  <h4>Fancy Product</h4>
                  <div className="price d-flex justify-content-center mb-4">
                    <div className="price-1"><span>$120.00 - </span></div>
                    <div className="price-2"><span>$280.00</span></div>
                  </div>
                  <button className="btn btn-outline-dark m-4">View options</button>
                </div>
              </div>

            </div>

            <div className="col col-3">

              <div className="box border sale">
                <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
                <div className="box-title text-center">
                  <h4>Fancy Product</h4>

                  <div className="d-flex justify-content-center small text-warning mb-2 icon-img">                            <div class="bi-star-fill"></div>
                      <div><img src="https://freesvg.org/img/1289679474.png" alt="" /></div>
                      <div><img src="https://freesvg.org/img/1289679474.png" alt="" /></div>
                      <div><img src="https://freesvg.org/img/1289679474.png" alt="" /></div>
                      <div><img src="https://freesvg.org/img/1289679474.png" alt="" /></div>
                      <div><img src="https://freesvg.org/img/1289679474.png" alt="" /></div>
                    </div>

                  <div className="price d-flex justify-content-center mb-4">
                    <div className="price-1"><span className="under">$20.00 - </span></div>
                    <div className="price-2"><span>$180.00</span></div>
                  </div>
                  <button className="btn btn-outline-dark m-4">Add to cart</button>
                </div>
              </div>

            </div>

            <div className="col col-3">

              <div className="box border">
                <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
                <div className="box-title text-center">
                  <h4>Fancy Product</h4>

                  <div className="d-flex justify-content-center small text-warning mb-2 icon-img">                            <div class="bi-star-fill"></div>
                      <div><img src="https://freesvg.org/img/1289679474.png" alt="" /></div>
                      <div><img src="https://freesvg.org/img/1289679474.png" alt="" /></div>
                      <div><img src="https://freesvg.org/img/1289679474.png" alt="" /></div>
                      <div><img src="https://freesvg.org/img/1289679474.png" alt="" /></div>
                      <div><img src="https://freesvg.org/img/1289679474.png" alt="" /></div>
                    </div>

                  <div className="price d-flex justify-content-center mb-4">
                    <div className="price-1"></div>
                    <div className="price-2"><span>$40.00</span></div>
                  </div>
                  <button className="btn btn-outline-dark m-4">View options</button>
                </div>
              </div>

            </div>

          </div>
        </section>

        <footer className="mt-5 bg-dark">
          <p className="text-center text-white m-0 p-5">
            Copyright © Your Website 2022
          </p>
        </footer>

    </div>
  );
}

export default App;