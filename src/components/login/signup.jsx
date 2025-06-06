import { useState } from "react";
import "./login.css"
import { useNavigate } from "react-router-dom";
import { create_user, login, username_get } from "../../services/user";

export function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        const formData = new URLSearchParams();
        formData.append("username", email);
        formData.append("password", password);

        const sign = {
            "username": username,
            "email": email,
            "password" : password,
            "is_admin": false
        }

        const resp1 = await create_user (sign)
        console.log(resp1);

        const response = await login(formData);

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
                    <h1>Registro</h1>
                    <div><input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required placeholder="Username" /></div>
                    <div><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Email" /></div>
                    <div><input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Password" /></div>
                    <a className="a" onClick={() => navigate('/login')}>Iniciar sesion</a>
                    <button className="button" onClick={handleLogin}>Registrarse</button>
                </div>
            </div>
        </>
    );
}