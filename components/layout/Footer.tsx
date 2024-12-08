import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-blue-600">MORENT</h2>
            <p className="text-gray-500 mt-2">
              Our vision is to provide convenience and help increase your sales
              business.
            </p>
          </div>
          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full md:w-auto">
            {/* About */}
            <div>
              <h3 className="font-bold text-gray-800">About</h3>
              <ul className="mt-2 space-y-1 text-gray-600">
                <li>
                  <a href="#">How it works</a>
                </li>
                <li>
                  <a href="#">Featured</a>
                </li>
                <li>
                  <a href="#">Partnership</a>
                </li>
                <li>
                  <a href="#">Business Relation</a>
                </li>
              </ul>
            </div>
            {/* Community */}
            <div>
              <h3 className="font-bold text-gray-800">Community</h3>
              <ul className="mt-2 space-y-1 text-gray-600">
                <li>
                  <a href="#">Events</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Podcast</a>
                </li>
                <li>
                  <a href="#">Invite a friend</a>
                </li>
              </ul>
            </div>
            {/* Socials */}
            <div>
              <h3 className="font-bold text-gray-800">Socials</h3>
              <ul className="mt-2 space-y-1 text-gray-600">
                <li>
                  <a href="#">Discord</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Facebook</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="mt-8 flex justify-between items-center text-sm text-gray-500">
          <p>©2022 MORENT. All rights reserved</p>
          <div className="space-x-4">
            <a href="#" className="hover:underline">
              Privacy & Policy
            </a>
            <a href="#" className="hover:underline">
              Terms & Condition
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
