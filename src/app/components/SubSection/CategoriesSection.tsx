export default function CategoriesSection() {
  const categories = [
    { name: 'Web Exploitation', icon: 'fas fa-globe', color: 'danger' },
    { name: 'Cryptography', icon: 'fas fa-lock', color: 'primary' },
    { name: 'Forensics', icon: 'fas fa-search', color: 'info' },
    { name: 'Reverse Engineering', icon: 'fas fa-code', color: 'warning' },
    { name: 'OSINT', icon: 'fas fa-eye', color: 'success' },
    { name: 'Miscellaneous', icon: 'fas fa-puzzle-piece', color: 'secondary' }
  ];

  return (
    <section className="py-5 bg-color:#212529">
      <div className="container">
        <div className="row text-center mb-5">
          <div className="col-12">
            <h2 className="display-5 fw-bold">Challenge Categories</h2>
            <p className="lead text-muted">Explore different areas of cybersecurity</p>
          </div>
        </div>
        
        <div className="row g-3">
          {categories.map((category, index) => (
            <div key={index} className="col-md-4 col-dr-2">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center p-3">
                  <i className={`${category.icon} fa-2x text-${category.color} mb-2`}></i>
                  <h6 className="card-title small">{category.name}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
