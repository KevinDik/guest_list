import {Link} from 'react-router-dom';

export default function Menu() {
    return(
        <div>
            <ul>
                <Link to="/">Events</Link>
                <Link to="/convidados">Guests</Link>
            </ul>
        </div>)
}