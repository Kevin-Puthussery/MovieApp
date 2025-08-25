import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[url('/Footer4.jpg')] bg-cover bg-center bg-gray-200 text-gray-300 py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo and Description */}
        <div>
          
         <div className='m-2'>
          <img src="https://img.freepik.com/premium-vector/movie-star-logo-design-vector-illustration_685330-3231.jpg?w=2000" alt="no-image" srcset="" style={{width:"250px", height:"180px"}} />
         </div>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-2">Explore</h3>
            <ul className="space-y-2 text-sm">
             
              <li><a href="#" className="hover:text-green-400">Contact Us</a></li>
              <li><a href="#" className="hover:text-green-400">Terms of Service</a></li>
              <li><a href="#" className="hover:text-green-400">FAQ</a></li>
              <li><a href="#" className="hover:text-green-400">Premium</a></li>
              <li><a href="#" className="hover:text-green-400">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-white mb-2">Highlights</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-green-400">You Must Watch</a></li>
              <li><a href="#" className="hover:text-green-400">Recent Release</a></li>
              <li><a href="#" className="hover:text-green-400">Top IMDB</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-4">Stay Connected</h3>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="bg-cyan-700 hover:bg-zinc-500 text-white px-4 py-2 rounded"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-red-800 pt-6 text-center text-sm text-gray-200">
       Copyright @2025 All rights Reserved | The website is made with by Movie review
      </div>
    </footer>
  );
};

export default Footer;