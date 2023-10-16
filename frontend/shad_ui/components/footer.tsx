import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold">AI Agent-powered Platform</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <a href="#" className="hover:underline text-gray-400 hover:text-white">About us</a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:underline text-gray-400 hover:text-white">Support</a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:underline text-gray-400 hover:text-white">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold">Influencer-Brand Collaborations</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <a href="#" className="hover:underline text-gray-400 hover:text-white">Partnerships</a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:underline text-gray-400 hover:text-white">Brands</a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:underline text-gray-400 hover:text-white">Influencers</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto pt-8 border-t border-gray-600">
        <div className="w-full flex flex-col md:flex-row py-6">
          <div className="flex-1 mb-6 text-center md:text-left">
            <a className="text-gray-400 no-underline hover:underline" href="#">© 2022 AI Agent-powered Platform</a>
          </div>
          <div className="flex-1 text-center md:text-right">
            <a className="text-gray-400 no-underline hover:underline" href="#">Terms</a>
            <a className="text-gray-400 no-underline hover:underline ml-4" href="#">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;