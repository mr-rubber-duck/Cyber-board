export default function FeaturesSection() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row text-center mb-5">
          <div className="col-12">
            <h2 className="display-5 fw-bold">Platform Features</h2>
            <p className="lead text-muted">Everything you need to master cybersecurity</p>
          </div>
        </div>
        
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center p-4">
                <div className="mb-3">
                  <i className="fas fa-flag fa-3x text-primary"></i>
                </div>
                <h5 className="card-title">CTF Challenges</h5>
                <p className="card-text text-muted">
                  Practice with real-world cybersecurity challenges across multiple categories: 
                  Web, Crypto, Forensics, Reverse Engineering, and more.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center p-4">
                <div className="mb-3">
                  <i className="fas fa-trophy fa-3x text-warning"></i>
                </div>
                <h5 className="card-title">Leaderboard</h5>
                <p className="card-text text-muted">
                  Compete with your peers and track your progress. 
                  Climb the rankings by solving challenges and earning points.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center p-4">
                <div className="mb-3">
                  <i className="fas fa-book fa-3x text-success"></i>
                </div>
                <h5 className="card-title">Learning Resources</h5>
                <p className="card-text text-muted">
                  Access tutorials, articles, and resources to enhance your 
                  cybersecurity knowledge and skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
