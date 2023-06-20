import { Redirect, useHistory } from 'react-router-dom'

function Stocks() {
  let history = useHistory()
  console.log(history)

  // this would be more like a cookie grab
  let loggedIn = true;

  if (!loggedIn) {
    return <Redirect to="/not-logged-in"></Redirect>
  }
  const handleClick = () => {
    window.alert('Sending info to the DB!');
    history.push("/")
  };

  return (
    <div className='comp orange'>
      <h1>Stocks Component</h1>
      <button onClick={handleClick}>Home</button>
    </div>
  );
}

export default Stocks;
