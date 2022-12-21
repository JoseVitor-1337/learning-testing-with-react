import { useEffect, useState } from 'react'

interface IPersonSkillsProps {
  skills: string[]
  isLogged?: boolean
}

const PersonSkills: React.FC<IPersonSkillsProps> = ({
  skills,
  isLogged = false,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(isLogged)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoggedIn(true)
    }, 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <ul>
      {skills.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}

      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Desconnect</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Connect</button>
      )}
    </ul>
  )
}

export default PersonSkills
