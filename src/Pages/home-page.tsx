import react from 'react';
import { Link } from 'react-router-dom';
// import '../../css/home-page.css';
import '../css/home-page.css';

const HomePage: React.FC = () => {

  function ButtonLink({ to, children }: { to: string; children: React.ReactNode }) {
    return <Link to={to}><button>{children}</button></Link>;
  }

    return (
        <div className='HomePage'>
          <h1 className="text-2xl font-bold underline text-black-600">
            HOME PAGE
          </h1>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">    
            <ButtonLink to="/">Go to home page!</ButtonLink>
          </button>

          <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <ButtonLink to="/test-page">Go to test page!</ButtonLink>
          </button>
        </div>
    );
}
export default HomePage;






// Usage
