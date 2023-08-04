import React from "react"
import { useNavigate } from 'react-router-dom';

const NotFound = (props) => {
    console.log("not found props: ", props)

    const navigate = useNavigate();

    const redirectToHome = () => {
        navigate('/');
    }

    return (
        <div>
            <h2>Page not found!</h2>
            <br />
            <button
                onClick={() => redirectToHome()}
                className="bg-red-400 text-white px-2 py-1"
                >Return to Home</button>
        </div>
    )
}

export default NotFound