import { FaGoogle, FaFacebook, FaGithub } from 'react-icons/fa';
import authentication1 from '../../assets/others/authentication1.png';

import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from 'react-simple-captcha';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const { sigin } = useContext(AuthContext);

  const [disable, setDisabale] = useState(true);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleSubmitLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    sigin(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        toast.success('Login successful!');
        navigate(from, { replace: true });
      })
      .catch(error => {
        console.error(error);
        toast.error('Login failed! Please check your credentials.');
      });
  };

  const handleValidateCaptcha = e => {
    const user_captch_value = e.target.value;
    if (validateCaptcha(user_captch_value)) {
      setDisabale(false);
    } else {
      setDisabale(true);
    }
    console.log(user_captch_value);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4">
      <Helmet>
        <title>BISTRO | login</title>
      </Helmet>
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row items-center">
        {/* Left Section (Image) */}
        <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
          <img
            src={authentication1}
            alt="Authentication"
            className="w-3/4 md:w-full object-contain"
          />
        </div>

        {/* Right Section (Form) */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold text-center md:text-left mb-4">
            Login
          </h2>
          <form onSubmit={handleSubmitLogin}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                className="mt-1 block w-full p-3  border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your password"
              />
            </div>

            {/* Captcha */}
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                <LoadCanvasTemplate />
              </label>
              <input
                onBlur={handleValidateCaptcha}
                type="text"
                name="captcha"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your captcha"
              />
            </div>
            <input
              disabled={disable}
              type="submit"
              className=" w-full btn btn-primary"
              value="Login"
            />
          </form>

          {/* New Account / Social Login */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              New here?{' '}
              <a
                href="/register"
                className="text-indigo-600 hover:text-indigo-800 font-medium"
              >
                Create a New Account
              </a>
            </p>
            <p className="mt-4 text-sm text-gray-600">Or sign in with</p>
            <div className="mt-3 flex justify-center space-x-4">
              <button className="p-3 bg-gray-100 rounded-full shadow hover:bg-gray-200">
                <FaGoogle className="text-red-500 text-lg" />
              </button>
              <button className="p-3 bg-gray-100 rounded-full shadow hover:bg-gray-200">
                <FaFacebook className="text-blue-600 text-lg" />
              </button>
              <button className="p-3 bg-gray-100 rounded-full shadow hover:bg-gray-200">
                <FaGithub className="text-gray-800 text-lg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
