import React from "react";
import "./css/login.css"
import Header from "./Header";
import LoginForm from "./form/LoginForm";

function Login () {
    return (
        <div className="main">
            <Header />

            {/* Login Form */}
            <LoginForm />
            {/* End Login Form */}
        </div>
    );
}

export default Login;