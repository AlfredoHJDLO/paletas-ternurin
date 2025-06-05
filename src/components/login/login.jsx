import { useState } from "react";
import "./login.css"
import { useNavigate } from "react-router-dom";
import { username_get } from "../../services/user";

export function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        const formData = new URLSearchParams();
        formData.append("username", username);
        formData.append("password", password);

        const response = await fetch("http://localhost:8000/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: formData,
        });

        const data = await response.json();

        if (response.ok) {
            localStorage.setItem("token", data.access_token); // Guardas el token
            const user1 = await username_get(localStorage.getItem("token"))
            localStorage.setItem("Id", user1.id);
            localStorage.setItem("user", user1.username)
            localStorage.setItem("type", user1.is_admin)
            if (user1.is_admin){
                navigate("/admin")
            }
            else{
                navigate("/")
            }
        } else {
            alert("Error al iniciar sesión");
        }
    };

    return (
        <>
            <div className="background">

                <div className="container">
                    <h1>LOGIN</h1>
                    <div><input type="email" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" /></div>
                    <div><input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" /></div>
                    <a className="a" onClick={() => navigate('/signup')}>Registrate aqui</a>
                    <button className="button" onClick={handleLogin}>Login</button>
                </div>
            </div>
        </>
    );
}