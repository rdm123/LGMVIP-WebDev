import React from 'react';
const Navbar = ({ onSetIsClicked }) => {
    const clicked = () => {
        onSetIsClicked(1);
    }
    return (
        <div className="Navbar">
            <ul>
                <li><a className="brand">Welcome TO XYZ Company</a></li>
                <button onClick={clicked}className="button button1">Get Users</button>
            </ul>
        </div>
    )
}
export default Navbar;