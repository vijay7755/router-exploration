import { Link, NavLink } from "react-router-dom"
import "./header.css"

export function Header(props) {
    return (
        <div className="flex bg-purple-900 text-purple-100 justify-between p-2">
            <div className="m-2 font-bold">
                <Link to={{
                    pathname: '/',
                    hash: '#vijay',
                    search: '?channel=vijay',
                    state: { dashboard: true }
                }}>React Router</Link>
            </div>
            <div>
                <ul className="flex font-medium">
                    <li className="m-2">
                        <NavLink to="/" exact activeClassName="py-1 text-pink-400 active-route">Home</NavLink>
                    </li>
                    <li className="m-2">
                        <NavLink to="/about" activeClassName="py-1 text-pink-400 active-route">About</NavLink>
                    </li>
                    <li className="m-2">
                        <NavLink to="/contact" activeClassName="py-1 text-pink-400 active-route">Contact</NavLink>
                    </li>
                    <li className="m-2">
                        <NavLink to="/posts" activeClassName="py-1 text-pink-400 active-route">Posts</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}
