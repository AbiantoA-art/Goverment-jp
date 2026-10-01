import { useState } from 'react'
import StudentDashboard from './StudentDashboard.jsx'

function Login() {

  const [role, setRole] = useState('')

  function handleLogin() {

    if (role === '') {
      alert('Please select your role')
      return
    }

    if (role === 'Student') {
      alert('Student Login Successful')
      return <StudentDashboard />
    }

    if (role === 'Admin') {
      alert('Admin Login Successful')
    }
  }

  return (
    <div className="login-page">
      <div className="login-box">

        <h1>Government Job Portal</h1>
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Enter Email"
        />

        <input
          type="password"
          placeholder="Enter Password"
        />

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="">Select Role</option>
          <option value="Student">Student</option>
          <option value="Admin">Admin</option>
        </select>

        <button onClick={handleLogin}>
          Login
        </button>

        <p>New Student? Create an account</p>

      </div>
    </div>
  )
}

export default Login