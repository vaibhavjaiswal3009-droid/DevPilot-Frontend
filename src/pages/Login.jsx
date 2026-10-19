import { useState } from "react";
import {Link} from "react-router-dom";
import "./Login.css";

function Login() {
  const [showEmail, setShowEmail] = useState(false);

  return (
    <main className="login-page">
      <section className="login-container">
        <div className="brand">
          <span className="brand-icon">➤</span>
          <span>devpilot</span>
        </div>

        <div className="login-card">
          <p className="terminal-text">
            <span>$</span> devpilot login
          </p>

          <h1>
            {showEmail ? "Sign in with email" : "Sign in to continue"}
          </h1>

          <p className="subtitle">
            {showEmail
              ? "Enter your account credentials below."
              : "Use the account you push code with."}
          </p>

          {!showEmail ? (
            <div className="login-options">
              <button
                className="github-button"
                onClick={() => alert("GitHub login will be connected later.")}
              >
                ● Continue with GitHub
              </button>

              <button
                className="secondary-button"
                onClick={() => alert("Google login will be connected later.")}
              >
                🌐 Continue with Google
              </button>

              <button
                className="secondary-button"
                onClick={() => setShowEmail(true)}
              >
                Use email instead <span>→</span>
              </button>
            </div>
          ) : (
            <form
              className="login-options"
              onSubmit={(event) => {
                event.preventDefault();
                alert("Email authentication will be connected later.");
              }}
            >
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                required
              />

              <div className="password-label">
                <label htmlFor="password">Password</label>
                <a href="#forgot-password">Forgot password?</a>
              </div>

              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                required
              />

              <button className="github-button" type="submit">
                Sign in
              </button>

              <button
                className="secondary-button"
                type="button"
                onClick={() => setShowEmail(false)}
              >
                ← Back to other options
              </button>
            </form>
          )}

          <p className="legal-text">
            By continuing you agree to the{" "}
            <Link to="/terms">Terms</Link> and{" "}
            <Link to="/privacy">Privacy Policy</Link>.
          </p>
        </div>

        <footer className="login-footer">
          <span>
            No account yet? <Link to="/signup">Create one</Link>
          </span>
          <Link to="docs">Docs</Link>
        </footer>
      </section>
    </main>
  );
}

export default Login;
