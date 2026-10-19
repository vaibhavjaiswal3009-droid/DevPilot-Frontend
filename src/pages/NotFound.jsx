import { Link } from "react-router-dom";
import "./Legal.css";

function NotFound(){
    return(
        <main className="legal-page">
      <article className="legal-content">
        <p>404 — PAGE NOT FOUND</p>

        <h1>Looks like you're lost.</h1>

        <p>
          The page you're looking for doesn't exist
          or may have been moved.
        </p>

        <Link to="/" className="legal-back">
          ← Return to DevPilot
        </Link>
      </article>
    </main>
    );
}

export default NotFound;