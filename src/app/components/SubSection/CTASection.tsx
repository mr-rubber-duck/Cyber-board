import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-5">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <h2 className="display-6 fw-bold mb-3">Ready to Start?</h2>
            <p className="lead mb-4">
              Join the GeekDz cybersecurity community and start your journey 
              to becoming a cybersecurity expert.
            </p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <Link href="/register" className="btn btn-primary btn-lg px-4">
                <i className="fas fa-user-plus me-2"></i>
                Join Now
              </Link>
              <Link href="/login" className="btn btn-outline-primary btn-lg px-4">
                <i className="fas fa-sign-in-alt me-2"></i>
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
