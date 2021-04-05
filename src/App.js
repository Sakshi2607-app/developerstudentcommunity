
import { Card, Carousel,CarouselItem,Col,Container, Navbar, Row, Table } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
    <Navbar className="nav" bg="dark" variant="dark">
    <Navbar.Brand href="#home">
     <h2>🔥 Developer Student Community 🔥</h2>
    </Navbar.Brand>
  </Navbar>
<Container>
<Carousel fade className="gallery"> 

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media.discordapp.net/attachments/767750297933316179/827224854096248861/Screenshot_871.png?width=1043&height=586"
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media.discordapp.net/attachments/767750297933316179/827224854096248861/Screenshot_871.png?width=1043&height=586"
      alt="Second slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media.discordapp.net/attachments/767750297933316179/826464664787222548/LHD__Share_LinkedIn_template_5.png?width=1120&height=586"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media.discordapp.net/attachments/767750297933316179/826464664787222548/LHD__Share_LinkedIn_template_5.png?width=1120&height=586"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media.discordapp.net/attachments/767750297933316179/826473488839737424/Screenshot_2195.png?width=1043&height=586"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
<Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media.discordapp.net/attachments/767750297933316179/826109207010082856/Pink_Cute_Chic_Vintage_90s_Virtual_Trivia_Quiz_Presentations.png?width=1043&height=586"
      alt="Third slide"
    />
  </Carousel.Item> 
  <h1>Meet Our Team</h1>
  <Table striped bordered hover className="table">
  <thead className="head">
    <tr>
      <th> Name</th>
      <th>LinkedIn Id</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Vinayak🔥</td>
      <td><a href="https://mobile.twitter.com/Vinayak97153885/status/1378429515769114629">Vinayak's LinkedIn</a></td>
    </tr>
    <tr>
      <td>Ghulamyazdani🔥</td>
      <td><a href="https://ghulamyazdani-portfolio.web.app/">Ghulamyazdani's Portfolio</a></td>
      
    </tr>
    <tr>
      <td>Vishesh🔥</td>
      <td><a href="https://www.linkedin.com/in/vishesh-tamrakar-2258511bb">Vishesh's LinkedIn</a></td>
    </tr>
    <tr>
      <td>Athulya🔥</td>
      <td><a href="https://www.linkedin.com/in/rashmi-sidar-b0a7141a7">Athulya's LinkedIn</a></td>
    </tr>
    <tr>
      <td>Rashmi🔥</td>
      <td><a href="https://www.linkedin.com/in/atulya-singh-28b7041b1">Rashmi's LinkedIn</a></td>
    </tr>
    <tr>
      <td>Vishnu🔥</td>
      <td><a href="https://www.linkedin.com/in/vipul-dewangan-60b999202">Vishnu's LinkedIn</a></td>
    </tr>
    <tr>
      <td>Yash🔥</td>
      <td><a href="https://www.linkedin.com/in/yash-sakre-07ab081b8">Yash's LinkedIn</a></td>
    </tr>
  </tbody>
</Table>
</Container>
    </div>

    
  );
}

export default App;
