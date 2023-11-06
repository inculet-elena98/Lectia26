

const Input = ({ value, setValue }) => {
  const handleInput = (event) => {
    setValue(event.target.value)
  }
  return (
    <input
      value={value}
      onChange={handleInput}
      placeholder="Type text here"
    />)
}
export default Input