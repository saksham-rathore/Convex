import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto px-4 md:py-8">
        <div className="flex justify-between items-center align-center">
          <div>
            <img src="/convex.png" height={50} width={50}/>
          </div>

          <div>
            <ul>
              <li>Solutions</li>
              <li>Use cases</li>
              <li>Technology</li>
              <li>Enterprise</li>
            </ul>
          </div>

          <div>
            <div>
              <button>Log in</button>
            </div>

            <div>
              <button>Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
