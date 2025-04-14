import { useState, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

export default function Error404(){

    const navigate = useNavigate();
    return (
        <div className="error-container">
            <p>Ooops Seems like you've lost your way a bit.
                Use the navigation links to get you back to 
                where you want to go.
            </p>

            <div className="previous">
        <button onClick={() => navigate("/")}>prev page</button>
      </div>
        </div>
    )
}