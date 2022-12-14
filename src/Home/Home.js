import {Link} from 'react-router-dom';

function Home() {
  return (
    <>
      <p className="text-3xl font-bold underline mb-10"> Home page </p>
      <Link to="/interview-prep">
        <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mb-5">
          My preparation for technical interviews
        </button>
      </Link>
      <Link to="/math-prep">
        <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ">
          Math related
        </button>
      </Link>
    </>
  );
}

export {Home};
