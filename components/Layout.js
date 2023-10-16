import Navbar from '../components/Navbar';
import Header from '../components/Header';
import TopLeftImg from '../components/TopLeftImg';

const Layout = ({ children }) => {
  return (
    <div className={'page bg-site text-white bg-cover bg-no-repeat relative'}>
      <TopLeftImg />
      <Navbar />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
