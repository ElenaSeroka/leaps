import react from 'react';
import '../../css/dashboard.css';


const DashBoard: React.FC = () => {

    return (
        <nav className="Dashboard">
            <ul>
                <li>
                    <h1 className="text-4xl font-bold text-center text-indigo-800">
                        Leaps
                    </h1>
                </li>
                <li>
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
                    <h2 className="text-4xl font-bold text-center text-indigo-800">
                        Goals setting
                    </h2>
                </li>
                <li>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded opacity-50">
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
