import { memo, useState } from 'react'

type ICounterProps = {
  initialCount?: number
}

const Counter: React.FC<ICounterProps> = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount)
  const [amount, setAmount] = useState(0)

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <input
        type="number"
        name="amount"
        value={amount}
        onChange={({ target }) => setAmount(parseInt(target.value))}
      />
      <button onClick={() => setCount(amount)}>Set amount</button>
    </div>
  )
}

export default memo(Counter)
