import { useEffect, useState } from 'react'

function Skills() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadUsers() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        if (!response.ok) throw new Error('Failed to load users')
        const data = await response.json()
        setUsers(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    loadUsers()
  }, [])

  const skills = [
    'JavaScript',
    'React',
    'HTML & CSS',
    'Git & GitHub',
    'Problem Solving',
  ]

  return (
    <section className="page skills-page">
      <h1 className="section-title">Skills & Users</h1>
      <div className="skills-box">
        <div>
          <h2>My core skills</h2>
          <ul className="dot-list">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Users from API</h2>
          {loading && <p>Loading users…</p>}
          {error && <p className="error-message">{error}</p>}
          {!loading && !error && (
            <ul className="user-list">
              {users.map((user) => (
                <li key={user.id}>
                  <strong>{user.name}</strong>
                  <span>{user.email}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}

export default Skills
