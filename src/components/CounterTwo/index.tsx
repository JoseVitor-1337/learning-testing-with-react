type ICounterTwoProps = {
  count?: number
  handleIncrement?: () => void
  handleDecrement?: () => void
}

export const CounterTwo: React.FC<ICounterTwoProps> = (props) => {
  return (
    <div>
      <h1>Count two</h1>
      <p>{props.count}</p>
      {props.handleIncrement && (
        <button onClick={props.handleIncrement}>Increment</button>
      )}
      {props.handleDecrement && (
        <button onClick={props.handleDecrement}>Decrement</button>
      )}
    </div>
  )
}
