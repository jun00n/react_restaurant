import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import Carousel from 'react-bootstrap/Carousel';


function Header() {
     return (
          <div>
               <Navbar className="bg-body-tertiary" style={{ height: 50 }}>
                    <Container>
                         <Navbar.Brand href="#home">
                              <img
                                   alt=""
                                   src="https://skyconsultingservices.in/wp-content/uploads/2020/10/cropped-restaurants.png"
                                   width="110"
                                   height="50"
                                   className="d-inline-block align-top"
                              />
                              <p className=' d-inline p-3' style={{ marginTop: 20, marginLeft: 2 }}>List-My-Restaurants</p>
                         </Navbar.Brand>
                    </Container>
               </Navbar>



               <div>
                    <Carousel fade>
                         <Carousel.Item>
                              <img
                                   className="d-block w-100" 
                                   src="https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill_2829-18813.jpg?w=900&t=st=1689519568~exp=1689520168~hmac=d6e72e3ff66621b2578605e569db1d46027bd388609b59892ece11aa1edea31a"
                                   alt="First slide"
                              />
                              <Carousel.Caption>
                                   <h1 style={{marginRight:700,marginTop:10}}>Finger Licking Experience</h1>
                                   <p style={{marginRight:500}}>Try the delicious dishes from the greatest chef</p>
                              </Carousel.Caption>
                         </Carousel.Item>
                         <Carousel.Item>
                              <img
                                   className="d-block w-100"
                                   src="https://img.freepik.com/free-photo/gourmet-chicken-biryani-with-steamed-basmati-rice-generated-by-ai_188544-13480.jpg?t=st=1689519603~exp=1689523203~hmac=f800bc75a933de767fedf494340b2f02be17efd149cf094790269401e1b15aec&w=996"
                                   alt="Second slide"
                              />

                              <Carousel.Caption style={{marginTop:100}}>
                            
                              <h3 style={{fontSize:50,marginTop:100}}>Indian Flavour<strong>Biriyani</strong></h3>
                            
                              </Carousel.Caption>
                         </Carousel.Item>
                         <Carousel.Item>
                              <img
                                   className="d-block w-100" 
                                   src="https://img.freepik.com/free-photo/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai_188544-9469.jpg?w=996&t=st=1689519519~exp=1689520119~hmac=d116c2b50fb43b3c292ec11aaf87fabdb5ee0342dbace99cd2ca154888aac66e"

                                   alt="Third slide"
                              />
                              <Carousel.Caption>
                                   <h4>Try the best restaurants for best experience</h4>
                                   
                              </Carousel.Caption>
                         </Carousel.Item>
                    </Carousel>
               </div>
          </div>

     )
}

export default Header