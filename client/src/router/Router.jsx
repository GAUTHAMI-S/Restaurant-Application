import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Menu from "../pages/shop/Menu";
import SignUp from "../components/SignUp";
import PrivateRoute from "../PrivateRouter/PrivateRouter";
import UpdateProfile from "../pages/dashboard/UpdateProfile";
import CartPage from "../pages/shop/CartPage";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../pages/dashboard/admin/Dashboard";
import Users from "../pages/dashboard/admin/Users";
import AddMenu from "../pages/dashboard/admin/AddMenu";
import ManageItem from "../pages/dashboard/admin/ManageItem";
import UpdateMenu from "../pages/dashboard/admin/UpdateMenu";
import Order from "../pages/dashboard/Order";
import UserProfile from "../pages/dashboard/admin/UserProfile";
import Payment from "../pages/shop/Payment";
;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/order",
        element: (
          <PrivateRoute>
            <Order />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-profile",
        element: <UserProfile />,
      },
      {
        path: "/cart-page",
        element: <CartPage />,
      },
      { path: "/update-profile", element: <UpdateProfile /> },{
        path: "/process-checkout",
        element: <Payment />,
      },
    ],
  },
  { path: "/signup", element: <SignUp /> },

  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),

    children: [
      { path: "", element: <Dashboard /> },
      { path: "users", element: <Users /> },
      { path: "add-menu", element: <AddMenu /> },
      { path: "manage-items", element: <ManageItem /> },
      {
        path: "update-menu/:id",
        element: <UpdateMenu />,
        loader: ({ params }) =>
          fetch(`http://localhost:6001/menu/${params.id}`),
      },
    ],
  },
]);
export default router;
