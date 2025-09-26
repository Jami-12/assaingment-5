import { Link } from 'react-router';
import Container from '../global/Container';

const Banner = () => {
  return (
    <div>
      <Container>
        <section className="bg-white py-16 px-6 md:px-12 mt-3 rounded-2xl lg:px-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div className="flex justify-center md:justify-end items-start order-first md:order-last">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2910/2910768.png"
                alt="Student tasks illustration"
                className="w-80 md:w-96 drop-shadow-xl"
              />
            </div>
            <div className="text-center md:text-left flex flex-col justify-start">
              <h1 className="text-4xl md:text-5xl font-extrabold text-black">
                Student Task Management System
              </h1>
              <p className="mt-4 text-lg text-black">
                Stay organized, track your tasks, and boost productivity with our
                easy-to-use student task manager.
              </p>
              <div className="mt-6 flex justify-center md:justify-start gap-4">
                <Link to="/task">
                  <button className="px-6 py-3 rounded-xl bg-cyan-700 hover:bg-cyan-800 cursor-pointer text-white font-semibold shadow-lg transition">
                    View Tasks
                  </button>
                </Link>
                <Link to="/completed">
                  <button className="px-6 py-3 rounded-xl border border-gray-300 bg-cyan-950 cursor-pointer hover:bg-gray-100 text-white font-semibold transition">
                    View Completed
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Banner;
