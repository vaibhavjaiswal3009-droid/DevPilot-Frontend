import { Link } from "react-router-dom";
import "./Legal.css";

function Docs(){
    return(
        <main className="legal-page">
            <article className="legal-content">
                 <h1>DevPilot Documentation</h1>

        <p>
          Learn how to use DevPilot to understand and
          review your code with AI assistance.
        </p>

        <h2>Getting started</h2>
        <p>
          Sign in to DevPilot and connect a repository
          that you are authorized to access.
        </p>

        <h2>Code reviews</h2>
        <p>
          Select a supported pull request to inspect its
          changes and review the AI-generated findings.
          Verify suggestions before applying them.
        </p>

        <h2>Security</h2>
        <p>
          Avoid sharing secrets such as API keys,
          passwords, or private credentials in code
          submitted for analysis.
        </p>

        <Link to="/" className="legal-back">
          ← Back to login
        </Link>
            </article>
        </main>
    );
}

export default Docs;