import { signIn, signOut } from "next-auth/react";
import { ChangeEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";

const useLoginForm = () => {
  const [state, setState] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    signOut({
      redirect: false,
    });
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState((s) => ({ ...s, [event.target.name]: event.target.value }));
  };

  const login = async () => {
    setLoading(true);
    const { email, password } = state;
    const login = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (login?.ok) {
      toast.success("Correct login");
      window.location.assign("/");
    } else if (login?.error) {
      console.error(login?.error);
      toast.error("Incorrect login");
    }

    setLoading(false);
  };

  return { login, loading, state, handleChange };
};

export default useLoginForm;
