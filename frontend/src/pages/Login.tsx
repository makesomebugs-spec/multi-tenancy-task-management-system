import { useState } from "react";
import { useNavigate } from "react-router-dom";
const users: { [key: string]: string } = {
  "abc123@email.com": "abc123",
};
export default function Login() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  var attempts = 3;
  const [email, setEmail] = useState("");
  const [pwd, setpwd] = useState("");
  function handleSubmit(e: React.SubmitEvent): void {
    e.preventDefault();
    while (attempts > 0) {
      console.log(attempts);
      if (users[email] && users[email] === pwd && attempts > 0) {
        navigate("/dashboard");
        return;
      } else {
        attempts--;
        setIsVisible(true);
      }
    }
    alert("Too many failed attempts. Please try again later.");
    navigate("/");
  }
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            action="#"
            method="POST"
            className="space-y-6"
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  onChange={(e) => {
                    setpwd(e.target.value);
                  }}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
          {isVisible && (
            <a className="text-red font-small">
              Invalid email or password. {attempts} attempts remaining.
            </a>
          )}

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Not a member?{" "}
            <a
              href="#"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
// import { useState } from "react";

// function SignupForm() {
//   const [email, setEmail] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Submitted email:", email);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="email">Email:</label>
//       <input
//         id="email"
//         name="email"
//         type="email"
//         required
//         autoComplete="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// function Search() {
//   const [showResults, setShowResults] = useState(false);

//   const onClick = () => setShowResults(true);

//   return (
//     <div>
//       <input type="submit" value="Search" onClick={onClick} />
//       {showResults ? <div>Some Results</div> : null}
//     </div>
//   );
// }
