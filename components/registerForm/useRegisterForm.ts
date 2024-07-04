import axios from "axios";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";

const useRegisterForm = () => {
  const [state, setState] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    signOut({
      redirect: false,
    });
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState((s) => ({ ...s, [event.target.name]: event.target.value }));
  };
  const register = async () => {
    setLoading(true);
    try {
      const { email, password } = state;
      await axios.post("/api/register", {
        email,
        password,
      });

      toast.success("Successfully registered");

      router.push("/login");
    } catch (err: any) {
      console.log(err?.response?.data);
      toast.error("Something went wrong while creating user!");
    } finally {
      setLoading(false);
    }
  };
  return { state, handleChange, loading, register };
};

export default useRegisterForm;
