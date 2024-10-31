import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a] text-center lg:text-left">
          REACT.
        </h1>
        <p className="py-4 text-center lg:text-justify max-w-96 lg:w-[75%] mx-auto lg:mx-0">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit
          ullam iste repellat consequatur libero reiciendis, blanditiis
          accusantium.
        </p>
        <div className="flex justify-center lg:justify-between lg:w-[75%] my-6">
          <FaFacebookSquare size={30} className="mx-2 sm:mx-6 lg:mx-0" />
          <FaInstagram size={30} className="mx-2 sm:mx-6 lg:mx-0" />
          <FaTwitterSquare size={30} className="mx-2 sm:mx-6 lg:mx-0" />
          <FaGithubSquare size={30} className="mx-2 sm:mx-6 lg:mx-0" />
          <FaDribbbleSquare size={30} className="mx-2 sm:mx-6 lg:mx-0" />
        </div>
      </div>
      <div className="lg:col-span-2 mt-6 grid grid-cols-4">
        <div className="col-span-2 lg:col-span-1 text-center lg:text-left mb-10">
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Insights</li>
          </ul>
        </div>
        <div className="col-span-2 lg:col-span-1 text-center lg:text-left mb-10">
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Documentation</li>
            <li className="py-2 text-sm">Guides</li>
            <li className="py-2 text-sm">API Status</li>
          </ul>
        </div>
        <div className="col-span-2 lg:col-span-1 text-center lg:text-left mb-10">
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Blog</li>
            <li className="py-2 text-sm">Jobs</li>
            <li className="py-2 text-sm">Press</li>
            <li className="py-2 text-sm">Careers</li>
          </ul>
        </div>
        <div className="col-span-2 lg:col-span-1 text-center lg:text-left mb-10">
          <h6 className="font-medium text-gray-400">Legal</h6>
          <ul>
            <li className="py-2 text-sm">Claim</li>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2 text-sm">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
