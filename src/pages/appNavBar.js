import {Link} from 'react-router-dom'
import Separator from "./separator";

export default function AppNavBar() {
    return (
        <nav className='navbar navbar-inverse'>
            <div className='container-fluid'>
                <Link to="/"> CS Bank</Link>
                <Separator />
                <Link to="/home">Home Page</Link>
                <Separator />
                <Link to="/customers">Customers List</Link>
                <Separator />
                <Link to="/about">About Page</Link>
                <Separator />
                <Link to="/counter">Counter With Use State</Link>
                <Separator />
                <Link to="/useeffect">Use Effect Demo</Link>
                <Separator />
                <Link to="/users">Users with Custom Hook</Link>
                <Separator />
            </div>
        </nav>
    )
}