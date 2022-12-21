import { useEffect, useState } from 'react'

export const Users = () => {
  const [users, setUsers] = useState<string[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => {
        setUsers(users.map((user: { name: string }) => user.name))
      })
      .catch(() => setError('Erro ao lista os usuários'))
  }, [])

  return (
    <div>
      <h1>Usuários</h1>
      <p>{error}</p>
      {users.map((user) => (
        <li key={user}>{user}</li>
      ))}
    </div>
  )
}
