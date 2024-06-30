import Footer from './customer/components/Footer/Footer';
import Navigation from './customer/components/Navigation';
import HomePage from './customer/components/pages/HomePage';

function App() {
  return (
    <>
      <Navigation />
      <div>
        <HomePage />
      </div>
      <Footer/>
    </>
  );
}

export default App;
