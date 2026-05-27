function Contact() {
  return (
    <section className="page contact-page">
      <h1 className="section-title">Contact Information</h1>
      <div className="contact-grid">
        <div className="contact-card">
          <h2>Get in touch</h2>
          <p>Email: <a href="mailto:shanakar.dutta@example.com">shanakar.dutta@example.com</a></p>
          <p>Location: Kolkata, West Bengal</p>
          <p>Study: B.Tech CSE 4th sem</p>
        </div>
        <div className="contact-card">
          <h2>Social profiles</h2>
          <ul>
            <li><a href="https://www.facebook.com/shanakar.dummy" target="_blank" rel="noreferrer">Facebook</a></li>
            <li><a href="https://www.instagram.com/shanakar.dummy" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="https://www.linkedin.com/in/shanakar-dutta-dummy" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href="https://twitter.com/shanakar_dummy" target="_blank" rel="noreferrer">Twitter</a></li>
          </ul>
        </div>
      </div>
      <p className="note">
        These are placeholder details for the portfolio assignment and not my real
        personal contact details.
      </p>
    </section>
  )
}

export default Contact
