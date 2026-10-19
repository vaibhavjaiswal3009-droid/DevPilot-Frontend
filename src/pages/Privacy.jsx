import { Link } from "react-router-dom";
import "./Legal.css"

function Privacy(){
    return(
        <main className="legal-page">
            <article className="legal-content">

                <h1>Privacy Policy</h1>

        <p>
          This page explains how DevPilot may handle
          information when you use the platform.
        </p>

        <h2>Repository access</h2>
        <p>
          DevPilot may need repository information to
          analyze code. Only connect repositories you
          are authorized to access.
        </p>

        <h2>AI processing</h2>
        <p>
          Code submitted for analysis may be processed
          by an AI service. The actual handling of code
          depends on the services and configuration used.
        </p>

        <h2>Your information</h2>
        <p>
          Details about data collection, retention, and
          deletion should be documented before DevPilot
          is released to real users.
        </p>

        <Link to="/" className="legal-back">← Back to login</Link>
            </article>
        </main>
    );
}

export default Privacy;     