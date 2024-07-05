import Footer from './customer/components/Footer/Footer';

import HomePage from './customer/components/pages/HomePage';
import Navigation from './customer/components/Navigation/Navigation.jsx';
import Product from './customer/components/Product/Product.jsx';

function App() {
  return (
    <div>
      <Navigation/>
      <main>
        {/* <HomePage /> */}
        <Product/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
