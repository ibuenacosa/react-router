// Fixed Navigation 
import { Outlet, NavLink } from "react-router-dom";

export default function Layout() {
    return (
      <div>
        {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}

        <nav class="fixed bottom-3 w-full flex justify-center align-center ">
          <ul class="flex bg-white rounded-full px-8 py-4 bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg border-2 border-black rounded-full p-6 font-bold">
            <li class="px-3">
              <NavLink to="/" activeClassName="active">Home</NavLink>
            </li>
            <li class="px-3">
              <NavLink to="/about" activeClassName="active">About</NavLink>
            </li>
            <li class="px-3">
              <NavLink to="/projects" activeClassName="active">Projects</NavLink>
            </li>
            <li class="px-3">
              <NavLink to="/contact" activeClassName="active">Contact</NavLink>
            </li>
          </ul>
        </nav>
  
  
        {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
        <Outlet />
      </div>
    );
  }