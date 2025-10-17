import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="hero-section text-center py-5" style={{ 
      background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
      color: 'white',
      minHeight: '70vh',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h1 className="display-4 fw-bold mb-4">
              Welcome to <span className="text-warning">Cyber Board</span>
            </h1>
            <p className="lead mb-4">
              The ultimate cybersecurity platform for GeekDz club at Khenchela University. 
              Learn, practice, and compete in cybersecurity challenges.
            </p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <Link href="/challenges" className="btn btn-warning btn-lg px-4">
                <i className="fas fa-flag me-2"></i>
                Start Challenges
              </Link>
              <Link href="/leaderboard" className="btn btn-outline-light btn-lg px-4">
                <i className="fas fa-trophy me-2"></i>
                View Leaderboard
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
