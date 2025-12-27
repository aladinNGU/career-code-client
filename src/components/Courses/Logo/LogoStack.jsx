import React from "react";
import htmlLogo from "../../../assets/logo/html.svg";
import cssLogo from "../../../assets/logo/css.svg";
import javascriptLogo from "../../../assets/logo/javascript.svg";
import reactLogo from "../../../assets/logo/react.svg";
import nodejsLogo from "../../../assets/logo/nodejs.svg";
import expressjstLogo from "../../../assets/logo/expressjs.svg";
import mongodbLogo from "../../../assets/logo/mongodb.svg";

const LogoStack = () => {
  return (
    <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 p-4">
      {/* HTML Card */}
      <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 p-4 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-orange-200">
        <div className="absolute top-0 right-0 w-16 h-16 bg-orange-200 rounded-full -translate-y-8 translate-x-8 opacity-50 group-hover:opacity-70 transition-opacity"></div>
        <div className="flex flex-col items-center gap-3 relative z-10">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white shadow-md group-hover:shadow-lg transition-shadow">
            <img className="w-8" src={htmlLogo} alt="html-logo" />
          </div>
          <p className="font-bold text-gray-800 text-lg">HTML</p>
          <span className="text-xs text-orange-600 font-semibold bg-orange-50 px-3 py-1 rounded-full">
            Markup
          </span>
        </div>
      </div>

      {/* CSS Card */}
      <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 p-4 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-blue-200">
        <div className="absolute top-0 right-0 w-16 h-16 bg-blue-200 rounded-full -translate-y-8 translate-x-8 opacity-50 group-hover:opacity-70 transition-opacity"></div>
        <div className="flex flex-col items-center gap-3 relative z-10">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white shadow-md group-hover:shadow-lg transition-shadow">
            <img className="w-8" src={cssLogo} alt="css-logo" />
          </div>
          <p className="font-bold text-gray-800 text-lg">CSS</p>
          <span className="text-xs text-blue-600 font-semibold bg-blue-50 px-3 py-1 rounded-full">
            Styling
          </span>
        </div>
      </div>

      {/* JavaScript Card */}
      <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-yellow-50 to-yellow-100 p-4 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-yellow-200">
        <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-200 rounded-full -translate-y-8 translate-x-8 opacity-50 group-hover:opacity-70 transition-opacity"></div>
        <div className="flex flex-col items-center gap-3 relative z-10">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white shadow-md group-hover:shadow-lg transition-shadow">
            <img className="w-8" src={javascriptLogo} alt="javascript-logo" />
          </div>
          <p className="font-bold text-gray-800 text-lg">JavaScript</p>
          <span className="text-xs text-yellow-600 font-semibold bg-yellow-50 px-3 py-1 rounded-full">
            Language
          </span>
        </div>
      </div>

      {/* React Card */}
      <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-cyan-50 to-cyan-100 p-4 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-cyan-200">
        <div className="absolute top-0 right-0 w-16 h-16 bg-cyan-200 rounded-full -translate-y-8 translate-x-8 opacity-50 group-hover:opacity-70 transition-opacity"></div>
        <div className="flex flex-col items-center gap-3 relative z-10">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white shadow-md group-hover:shadow-lg transition-shadow">
            <img className="w-8" src={reactLogo} alt="react-logo" />
          </div>
          <p className="font-bold text-gray-800 text-lg">React</p>
          <span className="text-xs text-cyan-600 font-semibold bg-cyan-50 px-3 py-1 rounded-full">
            Library
          </span>
        </div>
      </div>

      {/* Node.js Card */}
      <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-green-50 to-green-100 p-4 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-green-200">
        <div className="absolute top-0 right-0 w-16 h-16 bg-green-200 rounded-full -translate-y-8 translate-x-8 opacity-50 group-hover:opacity-70 transition-opacity"></div>
        <div className="flex flex-col items-center gap-3 relative z-10">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white shadow-md group-hover:shadow-lg transition-shadow">
            <img className="w-8" src={nodejsLogo} alt="nodejs-logo" />
          </div>
          <p className="font-bold text-gray-800 text-lg">Node.js</p>
          <span className="text-xs text-green-600 font-semibold bg-green-50 px-3 py-1 rounded-full">
            Runtime
          </span>
        </div>
      </div>

      {/* Express.js Card */}
      <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 p-4 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-300">
        <div className="absolute top-0 right-0 w-16 h-16 bg-gray-300 rounded-full -translate-y-8 translate-x-8 opacity-50 group-hover:opacity-70 transition-opacity"></div>
        <div className="flex flex-col items-center gap-3 relative z-10">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white shadow-md group-hover:shadow-lg transition-shadow">
            <img className="w-8" src={expressjstLogo} alt="expressjs-logo" />
          </div>
          <p className="font-bold text-gray-800 text-lg">Express.js</p>
          <span className="text-xs text-gray-600 font-semibold bg-gray-50 px-3 py-1 rounded-full">
            Framework
          </span>
        </div>
      </div>

      {/* MongoDB Card */}
      <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 p-4 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-emerald-200">
        <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-200 rounded-full -translate-y-8 translate-x-8 opacity-50 group-hover:opacity-70 transition-opacity"></div>
        <div className="flex flex-col items-center gap-3 relative z-10">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white shadow-md group-hover:shadow-lg transition-shadow">
            <img className="w-8" src={mongodbLogo} alt="mongodb-logo" />
          </div>
          <p className="font-bold text-gray-800 text-lg">MongoDB</p>
          <span className="text-xs text-emerald-600 font-semibold bg-emerald-50 px-3 py-1 rounded-full">
            Database
          </span>
        </div>
      </div>
    </div>
  );
};

export default LogoStack;
