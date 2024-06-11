import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";

const useCart = () => {
  const { user } = useContext(AuthContext);

  const token = localStorage.getItem("accessToken");

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      if (token) {
        const res = await fetch(
          `http://localhost:6001/carts?email=${user?.email}`,
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        );
        return res.json();
      }
    },
  });
  return [cart, refetch];
};
export default useCart;
