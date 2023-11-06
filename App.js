import './App.css';
import Title from './components/Title';
import BodyText from './components/BodyText';
import Input from './components/Input';
import Button from './components/Buton';
import { useState } from 'react';
function App() {
  const [value, setValue] = useState('')
  const showValue = () => {
    console.log('Input value:' + value,)
  }
  return (
    <div className='wrapper'>
      <Title title='Hello world' subTitle='sub title' />
      <BodyText text='Body text long one' />
      <Input value={value} setValue={setValue} />
      <Button name='Show input value' onClick={showValue} />
    </div>
  );
}
export default App;
