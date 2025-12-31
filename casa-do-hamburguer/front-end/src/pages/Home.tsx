import { Link } from "react-router";

const Home = () => {
  return (
    <div>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
    </div>
  );
};

export default Home;
