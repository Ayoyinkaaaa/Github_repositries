import { Link } from "react-router-dom";
function Welcome() {
  return (
    <section className="Welcome">
      <div className= 'Hello'>
        <h1 >
          Hi, I am a<br />
          <span className="job-title">Front end developer</span>
        </h1>
       
          <h3>Welcome to my GitHub repository.</h3> 
          <p>Here you can find projects I&apos;ve worked on.
        and view existing repositories and go to my github profile</p>
        
      </div>
      <div className="button-container">
      <button onClick={() => window.open('https://github.com/Ayoyinkaaaa')} className="cta-button">
  Go to GitHub
</button>

        <Link to="/Repo">
        <button className="cta-button">See Repositories</button>
        </Link>
      </div>
    </section>
  );
}
export default Welcome;
