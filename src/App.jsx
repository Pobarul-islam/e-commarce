import Footer from './customer/components/Footer/Footer';
import Navigation from './customer/components/Navigation/Navigation.jsx';
import HomePage from './customer/components/pages/HomePage';

function App() {
  return (
    <div>
      <Navigation />
      <main>
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
