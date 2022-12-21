import { memo } from 'react'

type IGreetProps = {
  name?: string
}

const Greet: React.FC<IGreetProps> = ({ name }) => {
  return (
    <div>
      <h1>Hello {name}</h1>
    </div>
  )
}

export default memo(Greet)
