import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Content Creator Management</h4>
                <h5>Brand & Talent Support</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Coordinated creator calendars, deliverables, and approvals to keep
              campaigns on schedule while maintaining a consistent brand voice.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Sponsor Analyst</h4>
                <h5>Partnership Operations</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Supported sponsor outreach, offer tracking, reporting, and partner
              communication to turn opportunities into organized, high-quality
              collaborations.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Manager & Personal Assistant</h4>
                <h5>Nihar Patil Portfolio</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Managing day-to-day priorities, coordinating meetings, handling
              follow-ups, and keeping sponsor, content, and personal management
              workflows clear, timely, and stress-free.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
