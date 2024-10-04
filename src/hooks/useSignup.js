import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuthContext } from "../context/authContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);

  const { setAuthUser } = useAuthContext();

  const signup = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputErrors({
      fullName,
      username,
      password,
      confirmPassword,
      gender,
    });
    if (!success) return;
    setLoading(true);
    try {
      const res = await axios.post(
        `/api/v1/auth/signup`,
        {
          fullName,
          username,
          password,
          confirmPassword,
          gender,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(res.data?.user);

      if (res.error) {
        throw new Error(res.error);
      }
      // local storage

      localStorage.setItem("chat-user", JSON.stringify(res.data?.user));
      // context
      setAuthUser(res.data?.user);

    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSignup;

const handleInputErrors = ({
  fullName,
  username,
  password,
  confirmPassword,
  gender,
}) => {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error("Please fill in all fields");
    return false;
  }
  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }
  return true;
};
