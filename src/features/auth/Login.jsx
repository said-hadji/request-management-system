import { useState } from "react";

const LOGIN_FORM_FIELDS = [
  { id: 1, name: "email", label: "Email" },
  { id: 2, name: "password", label: "Password" },
];

export default function Login({ setIsAdmin }) {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const isAdmin =
    credentials.email === "admin" && credentials.password === "admin";
  const isUser =
    credentials.email === "user" && credentials.password === "user";

  const handleSubmit = () => {
    const role = isAdmin ? true : isUser ? false : null;
    setIsAdmin(role);
    localStorage.setItem("isAdmin", JSON.stringify(role));
  };

  const handleInputChange = (e) => {
    setCredentials((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validUsers = ["admin", "user"];
  const isEmailValid = validUsers.includes(credentials.email);
  const isPasswordValid = validUsers.includes(credentials.password);

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
          {LOGIN_FORM_FIELDS.map((input) => {
            const name = input.name;
            const isInvalid =
              name === "email" ? !isEmailValid : !isPasswordValid;
            return (
              <div key={input.id}>
                <div className="relative">
                  <input
                    onChange={(e) => handleInputChange(e)}
                    value={credentials[name]}
                    name={name}
                    type={name === "email" ? "text" : "password"}
                    placeholder=""
                    className="peer w-full outline-none bg-gray-100 rounded-2xl px-4 py-6"
                  />
                  <span className="absolute top-1/2 -translate-y-1/2 left-4 pointer-events-none text-gray-600 peer-focus:top-4 peer-focus:text-sm peer-focus:text-gray-400 peer-not-placeholder-shown:top-4 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-gray-400 duration-150">
                    {input.label}
                  </span>
                </div>
                <span
                  className={`text-red-500 ${isFormSubmitted && !credentials[name] ? "" : "hidden"}`}
                >
                  Enter your {name}
                </span>
                {credentials[name] && isInvalid && (
                  <span className={`text-red-500`}>Incorrect {name}</span>
                )}
              </div>
            );
          })}

          <button
            onClick={() => {
              setIsFormSubmitted(true);
              if (!credentials.email || !credentials.password) return;
              handleSubmit();
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
