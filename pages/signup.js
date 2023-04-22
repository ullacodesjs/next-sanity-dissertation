import React from "react";

const LoginIn = () => {
  return (
    <div className="flex flex-col items-center">
      <h1> Sign Up</h1>
      <form className="bg-gray-100 p-8" action="/send-data-here" method="post">
        <label className="block mb-2" htmlFor="first">
          First name:
        </label>
        <input
          className="border border-gray-400 p-2 mb-4"
          type="text"
          id="first"
          name="first"
        />
        <label className="block mb-2" htmlFor="last">
          Last name:
        </label>
        <input
          className="border border-gray-400 p-2 mb-4"
          type="text"
          id="last"
          name="last"
        />
        <label className="block mb-2" htmlFor="email">
          Email:
        </label>
        <input
          className="border border-gray-400 p-2 mb-4"
          type="email"
          id="email"
          name="email"
        />
        <label className="block mb-2" htmlFor="pswrd">
          Password:
        </label>
        <input
          className="border border-gray-400 p-2 mb-4"
          type="password"
          id="pswrd"
          name="pswrd"
          pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/"
          title="Password should be digits (0 to 9) or alphabets (a to z)."
        />
        <br />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Submit
        </button>
      </form>

      {/* <form action="/send-data-here" method="post">
        <label for="first">First name:</label>
        <input type="text" id="first" name="first" />
        <label for="last">Last name:</label>
        <input type="text" id="last" name="last" />
        <label for="pswrd">Password:</label>
        <input
          type="password"
          id="pswrd"
          name="pswrd"
          pattern="[a-z0-9]{1,15}"
          title="Password should be digits (0 to 9) or alphabets (a to z)."
        />
        <button type="submit">Submit</button>
      </form> */}
    </div>
  );
};

export default LoginIn;
