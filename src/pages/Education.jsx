function Education() {
  const timeline = [
    {
      year: '2024 - Present',
      title: 'B.Tech in Computer Science and Engineering',
      description: 'Currently enrolled in the 4th semester of B.Tech CSE.',
    },
    {
      year: '2021 - 2024',
      title: 'Higher Secondary Education',
      description: 'Completed 12th grade with a focus on science subjects.',
    },
    {
      year: '2019 - 2021',
      title: 'Secondary Education',
      description: 'Completed 10th grade with a strong academic record.',
    },
  ]

  return (
    <section className="page education-page">
      <h1 className="section-title">Education Timeline</h1>
      <div className="timeline">
        {timeline.map((item) => (
          <div key={item.year} className="timeline-item">
            <span className="timeline-year">{item.year}</span>
            <div>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
