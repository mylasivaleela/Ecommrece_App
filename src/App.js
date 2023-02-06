import Banner from './components/Banner';
import './App.css';
import Products from './components/Products';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className='app'>
      {/* <Header /> */}
      <Banner />
      <Products /> 
      <Footer />
    </div>
  );
}

export default App;
