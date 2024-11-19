import './App.css'
import Button from './components/Button/Button'

function App() {
  const handleClick = () => {
    console.log(1);
  }

  return (
    <div className='wrapper'>
      <Button onClick={handleClick} isDisabled={false} title={'Push me!'} />
      <Button onClick={handleClick} isDisabled={false} title={'Push me!'} size='medium' />
      <Button onClick={handleClick} isDisabled={false} title={'Push me!'} size='big' />
      <Button onClick={handleClick} isDisabled={false} title={'Push me!'} size='big' variant='primary' />
      <Button onClick={handleClick} isDisabled={false} title={'Push me!'} size='medium' variant='primary' />
      <Button onClick={handleClick} isDisabled={false} title={'Push me!'} size='small' variant='primary' />
    </div>
  )
}

export default App
