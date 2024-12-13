import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1> Home </h1>
      <Link to='/sign-in'>
        <button>Sign in</button>
      </Link>
      <Link to='/sign-up'>
        <button >Sign up</button>
      </Link>
    </div>
  );
}

export default Home;