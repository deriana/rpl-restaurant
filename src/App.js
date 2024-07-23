import './App.css';
import Header from './components/header';
import About from './components/about';
import MainCourse from './components/main-course';
import DrinkMenu from './components/drink';
import AnotherCourse from './components/another-course';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <MainCourse />
      <DrinkMenu/>
      <AnotherCourse/>
      <Footer />
    </div>
  );
}

export default App;
