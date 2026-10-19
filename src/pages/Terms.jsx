import { Link } from "react-router-dom";
import "./Legal.css"
function Terms(){
    return(
        <main className="legal-page">
            <article className="legal-content">
            <h1>Terms of Service</h1>

            <p>
                Welcome to the DevPilot. These terms explain the rules for using our AI-powered code review platform
            </p>

            <h2>Using DevPilot</h2>

            <p>
                You are responsible for ensuring that you have permission to access and review the repositories you connect to DevPilot.
            </p>

            <h2>AI-generated reviews</h2>

            <p>
                AI findings are suggestions, not guarantees. Always verify recommendations before changing or mergin code.
            </p>
            <Link to="/" className="legal-back">← Back to login</Link>
            </article>
        </main>
    );
}

export default Terms;