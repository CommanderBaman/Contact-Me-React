import { Link } from 'react-router-dom';

function Error() {
  return (
    <div className='home'>
      <div>
        Error! Page not found!
      </div>
      <Link to='/'>Home</Link>
    </div>
  );
}

export default Error;
