import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import {AboutUs,Chef,FindUs,Footer,Gallery,Header,Intro,Laurels,SpecialMenu}  from './container'
function App() {
  return (
  <div>
      <Navbar/>
      <Header/>
      <AboutUs/>
      <SpecialMenu/>
      <Chef/>
      <Intro/>
      <Laurels/>
      <Gallery/>
      <FindUs/>
      <Footer/>
  </div>
  );
}

export default App;
