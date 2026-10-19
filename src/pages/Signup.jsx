import { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css"

function Signup(){
    const [name,setName]= useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");
    const [error,setError]=useState("");
    const [success,setSuccess]=useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    function handleSubmit(event){
        event.preventDefault();
        setError("");
        setSuccess("");
        if(!name.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()){
           setError("Please fill in all fields");
            return;
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailPattern.test(email.trim())){
            setError("Please enter a valid email address");
            return;
        }
        if(password!==confirmPassword){
            setError("Passwords do not match");
            return;
        }
         
        setSuccess("All fields are filled");
    }
    return(
        <main className="signup-page">
            <section className="signup-card">
                <Link to="/" className="signup-brand">DevPilot</Link>

                <h1>Create your account</h1>
                <p className="signup-subtitle">Get started with AI-powered code reviews</p>

                <form onSubmit={handleSubmit} noValidate>
                     {error && <p className="form-error">{error}</p>}
                     {success && <p className="form-success">{success}</p>}
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" placeholder="Enter your full name" value={name} 
                    onChange={(event)=>setName(event.target.value)} />

                    <label htmlFor="email">Email address</label>
                    <input type="email" id="email" placeholder="user@example.come" value={email}
                    onChange={(event)=>{setEmail(event.target.value);
                        setError("");}
                    
                    } />

                    <label htmlFor="password">Password</label>
                    <input type={showPassword? "text":"password"} id="password" placeholder="create a password" value={password}
                    onChange={(event)=>setPassword(event.target.value)}/>
                    <button type="button"
                    onClick={()=> setShowPassword((previous)=>!previous)}>
                        {showPassword?"Hide":"Show"}
                    </button>

                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type={showConfirmPassword? "text":"password"} id="confirmPassword" placeholder="Enter your password again" value={confirmPassword}
                    onChange={(event)=>setConfirmPassword(event.target.value)} />
                    <button type="button"
                    onClick={()=> setShowConfirmPassword((previous)=>!previous)}>
                        {showConfirmPassword?"Hide":"Show"}
                    </button>

                    <button type="submit">Create account</button>

                    <p className="signup-footer">Already have an account? 
                        <Link to="/">Sign in</Link>
                    </p>
                </form>
            </section>
        </main>
    );
}

export default Signup;