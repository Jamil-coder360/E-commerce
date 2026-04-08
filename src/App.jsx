import Roots from './components/Roots'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Homepage from './pages/Homepage';
import LoginPage from './pages/LoginPage';
import NotfoundPage from './pages/NotfoundPage';
import SignUpPage from './pages/SignUpPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AboutPage from './pages/AboutPage';

const router = createBrowserRouter([
	{
		path: "/",
		element: <Roots/>,
		children: [
			{
				index: true,
				element: <Homepage />,
			},
			{
				path: "login",
				element: <LoginPage />,
			},
			{
				path: "about",
				element: <AboutPage />,
			},
			{
				path: "signup",
				element: <SignUpPage />,
			},
			{
				path: "product/:id",
				element: <ProductDetailPage />,
			},
			{
				path: "*",
				element: <NotfoundPage />,
			},
		],
	},
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App