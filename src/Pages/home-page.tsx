import react from 'react';
import { Link } from 'react-router-dom';
// import '../../css/home-page.css';
import '../css/home-page.css';

const HomePage: React.FC = () => {

  function ButtonLink({ to, children }: { to: string; children: React.ReactNode }) {
    return <Link to={to}><button>{children}</button></Link>;
  }

  const handleClick = () => {
    alert('Button Clicked!');
  };

    return (
        <div className='HomePage'>
          <h1>HomePage</h1>
          <button onClick={handleClick}>CLICK ME</button>
          <ButtonLink to="/test-page">Go to test page!</ButtonLink>
        </div>
    );
}
export default HomePage;






// Usage
