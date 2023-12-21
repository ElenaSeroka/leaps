import react from 'react';
import { Link } from 'react-router-dom';
// import '../../css/home-page.css';
import '../css/test-page.css';

const TestPage: React.FC = () => {

// TODO Understand the function ButtonLink 
  function ButtonLink({ to, children }: { to: string; children: React.ReactNode }) {
    return <Link to={to}><button>{children}</button></Link>;
  }

    return (
        <div className='TestPage'>
          <h1>TEST PAGE</h1>
          <ButtonLink to="/">Go home!</ButtonLink>
        </div>
    );
}
export default TestPage;






// Usage
