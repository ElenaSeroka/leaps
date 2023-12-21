import react from 'react';
import '../../css/dashboard.css';


const DashBoard: React.FC = () => {

    return (
        <nav className="Dashboard">
            <ul>
                <li>Leaps</li>
                <li>Daily Goals</li>
                <li>Reports</li>
                <li>Goals setting</li>
                <li>Add tracker</li>
                <li>Settings</li>
                <li>Log out</li>
            </ul>
        </nav>
    );
}

export default DashBoard;
