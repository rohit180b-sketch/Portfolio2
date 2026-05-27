import { useState } from 'react'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <section className="page home-page">
      <h1 className="section-title">Welcome to my portfolio</h1>
      <p>
        Hello, I am <strong>Shankar Prasad Dutta</strong>, currently pursuing B.Tech
        in CSE 4th semester. I enjoy building responsive web apps with React and
        learning the latest front-end techniques.
      </p>
      <div className="highlight-box">
        <p>
          I like to combine clean UI design with practical application logic and
          build interactive pages that feel polished and easy to use.
        </p>
      </div>
      <div className="bio-grid">
        <article>
          <h2>About me</h2>
          <p>
            I am passionate about programming, problem solving, and exploring new
            technology trends. I focus on front-end development using React and
            on writing maintainable code.
          </p>
        </article>
        <article>
          <h2>Current study</h2>
          <p>B.Tech Computer Science and Engineering, 4th semester.</p>
        </article>
      </div>
      <button className="primary-button" onClick={() => setCount((value) => value + 1)}>
        Clicked {count} {count === 1 ? 'time' : 'times'}
      </button>
    </section>
  )
}

export default Home
