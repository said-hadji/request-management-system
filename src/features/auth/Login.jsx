import { useState } from "react";

export default function Login({ setIsAdmin }) {
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleLogin = () => {
    if (
      loginInfo.email === "admin" &&
      loginInfo.password === "admin"
    ) {
      localStorage.setItem("isAdmin", JSON.stringify(true));
      setIsAdmin(true);
    } else if (
      loginInfo.email === "user" &&
      loginInfo.password === "user"
    ) {
      localStorage.setItem("isAdmin", JSON.stringify(false));
      setIsAdmin(false);
    } else {
      localStorage.setItem("isAdmin", JSON.stringify(null));
      setIsAdmin(null);
    }
  };

  const handleInputChange = (e) => {
    setLoginInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const isEmailValid =
    loginInfo.email === "admin" ||
    loginInfo.email === "user";

  const isPasswordValid =
    loginInfo.password === "admin" || loginInfo.password === "user";

  return (
    <div className="container mx-auto w-7xl h-full flex justify-center items-center">
      <div className="space-y-8">
        <h1 className="text-4xl font-extrabold">Welcome in our Bank</h1>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h2>
              If you want to browse the user interface use this login info:
            </h2>
            <div className="flex flex-col gap-2">
              <span>
                <span className="font-medium">Email: </span>user
              </span>
              <span>
                <span className="font-medium">Password: </span>user
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h2>
              If you want to browse the admin interface use this login info:
            </h2>
            <div className="flex flex-col gap-2">
              <span>
                <span className="font-medium">Email: </span>admin
              </span>
              <span>
                <span className="font-medium">Password: </span>admin
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <div className="relative">
              <input
                onChange={(e) => {
                  handleInputChange(e);
                }}
                value={loginInfo.email}
                name="email"
                type="text"
                placeholder=""
                className="peer w-full outline-none bg-gray-100 rounded-2xl px-4 py-6"
              />
              <span className="absolute top-1/2 -translate-y-1/2 left-4 pointer-events-none text-gray-600 peer-focus:top-4 peer-focus:text-sm peer-focus:text-gray-400 peer-not-placeholder-shown:top-4 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-gray-400 duration-150">
                Email
              </span>
            </div>
            <span
              className={`text-red-500 ${isSubmitted && !loginInfo.email ? "" : "hidden"}`}
            >
              Enter your email
            </span>
            {loginInfo.email && !isEmailValid && (
              <span className={`text-red-500`}>Incorrect email</span>
            )}
          </div>

          <div>
            <div className="relative">
              <input
                onChange={(e) => handleInputChange(e)}
                value={loginInfo.password}
                name="password"
                type="password"
                placeholder=""
                className="peer w-full outline-none bg-gray-100 rounded-2xl px-4 py-6"
              />

              <span className="absolute top-1/2 -translate-y-1/2 left-4 pointer-events-none text-gray-600 peer-focus:top-4 peer-focus:text-sm peer-focus:text-gray-400 peer-not-placeholder-shown:top-4 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-gray-400 duration-150">
                Password
              </span>
            </div>
            <span
              className={`text-red-500 ${isSubmitted && !loginInfo.password ? "" : "hidden"}`}
            >
              Enter your password
            </span>
            {loginInfo.password && !isPasswordValid && (
              <span className={`text-red-500`}>Incorrect password</span>
            )}
          </div>
          <button
            onClick={() => {
              setIsSubmitted(true);
              handleLogin();
            }}
            className="text-white bg-gray-950 hover:bg-gray-900 rounded-3xl py-6 cursor-pointer"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
