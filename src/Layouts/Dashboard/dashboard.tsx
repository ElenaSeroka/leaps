import react from 'react';
import '../../css/dashboard.css';
import { Link } from 'react-router-dom';



const DashBoard: React.FC = () => {

    function ButtonLink({ to, children }: { to: string; children: React.ReactNode }) {
        return <Link to={to}><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded opacity-50">{children}</button></Link>;
      }

    const handleClick = () => {
    alert('Button Clicked!');
    };

    return (
        <nav className="Dashboard">
            <ul>
                <li>
                    <h1 className="text-4xl font-bold text-center">
                        Leaps
                    </h1>
                </li>
                <li>
                    <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    CLICK ME
                    </button>

                    <ButtonLink to="/test-page">Go to test page!</ButtonLink>
                    <ButtonLink to="/">Go to home page!</ButtonLink>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded opacity-50">
                    Daily Goals
                    </button>


                </li>
                <li>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Reports
                    </button>
                </li>
                <li>
                    <h2 className="text-2xl font-bold text-center">
                        Goals setting
                    </h2>
                </li>
                <li>
                    <button className="inline-flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded opacity-50">
                        <svg className="h-8 w-8 text-blue-700"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        Add tracker
                    </button>
                </li>
                <li>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded opacity-50">
                        Settings
                    </button>
                </li>
                <li>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded opacity-50">
                        Log out
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default DashBoard;
