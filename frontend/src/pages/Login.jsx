import { useState } from 'react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    setStatus('loading')
    setTimeout(() => {
      if (email && password) setStatus('success')
      else setStatus('error')
    }, 1000)
  }

  return (
    <div className="max-w-sm mx-auto mt-10">
      <button
        type="button"
        onClick={() => window.history.back()}
        className="mb-2 text-sm text-gray-600 hover:underline"
        aria-label="Back"
      >
        ← Back
      </button>

      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={handleLogin} className="flex flex-col gap-3 w-80">
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 rounded"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          {status === 'loading' ? 'Logging in...' : 'Login'}
        </button>
      </form>

      {status === 'success' && <p className="text-green-600 mt-3">Logged in!</p>}
      {status === 'error' && <p className="text-red-600 mt-3">Invalid</p>}
    </div>
  )
}
