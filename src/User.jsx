import { Children } from "react";
import PropTypes from "prop-types";

const User = ({names, age, city, children}) =>{
    return (
        <>
        {/* <h2>Name:{name}</h2> */}
        <ul>{names.map(name => (<li>{name}</li>))}</ul>
        <p>Age:{age}</p>
        <p>City:{city}</p>
        {children}
        </>
    )
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    city: PropTypes.string,
    children: PropTypes.node,
}

export default User;