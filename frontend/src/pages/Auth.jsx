import Login from "./Login";
import Register from "./Register";

export default function Auth() {
  return (
    <div className="flex">
      <Login />

      <hr />

      <Register />
    </div>
  );
}
