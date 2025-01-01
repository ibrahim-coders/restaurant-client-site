import { FaGoogle, FaFacebook, FaGithub } from 'react-icons/fa';
import authentication1 from '../../assets/others/authentication1.png';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const { creactUser, updateUserProfile } = useContext(AuthContext);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    console.log(data);
    creactUser(data.email, data.password)
      .then(result => {
        const loginUser = result.user;
        console.log(loginUser);
        toast.success('Successfully registered!');
        updateUserProfile(data.name, data.photourl)
          .then(() => {
            toast.success('Profile updated successfully!');
          })
          .catch(error => {
            console.error('Error updating profile:', error);
            toast.error('Profile update failed');
          });
        navigate(from, { replace: true });
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4">
      <Helmet>
        <title>BISTRO | SingUp</title>
      </Helmet>
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row items-center">
        {/* Right Section (Form) */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold text-center md:text-left mb-4">
            Login
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              {errors.name && (
                <span className="text-red-600">This name is required</span>
              )}
              <input
                type="text"
                name="name"
                {...register('name', { required: true })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                PhotoUrl
              </label>
              {errors.photourl && (
                <span className="text-red-600">This Photourl is required</span>
              )}
              <input
                type="text"
                name="name"
                {...register('photourl', { required: true })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              {errors.email && (
                <span className="text-red-600">This email is required</span>
              )}
              <input
                type="email"
                name="email"
                {...register('email', { required: true })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
              {/* Error for required */}
              {errors.password && errors.password.type === 'required' && (
                <span className="text-red-600">Password is required</span>
              )}
              {/* Error for pattern */}
              {errors.password && errors.password.type === 'pattern' && (
                <span className="text-red-600">
                  Password must include uppercase, lowercase, a special
                  character, and be at least 6 characters long.
                </span>
              )}
              {/* Error for minLength */}
              {errors.password && errors.password.type === 'minLength' && (
                <span className="text-red-600">
                  Password must be at least 6 characters long.
                </span>
              )}
              {/* Input Field */}
              <input
                type="password"
                name="password"
                {...register('password', {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern:
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
                })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your password"
              />
            </div>

            {/* Captcha */}
            {/* <div className="mb-4 flex items-center justify-between">
              <div className="text-sm text-gray-600">Captcha Image</div>
              <button
                type="button"
                onClick={handleReloadCaptcha}
                className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
              >
                Reload Captcha
              </button>
            </div> */}

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Sigin
            </button>
          </form>

          {/* New Account / Social Login */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already registered?
              <a
                href="/login"
                className="text-indigo-600 hover:text-indigo-800 font-medium"
              >
                Go to log in
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
        {/* Left Section (Image) */}
        <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
          <img
            src={authentication1}
            alt="Authentication"
            className="w-3/4 md:w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
