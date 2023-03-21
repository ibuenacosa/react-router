// No Match Screen 

import { Link } from "react-router-dom";

export default function NoMatch() {
    return (
      <div class="flex w-full flex-col justify-center items-center p-4 h-screen text-center ">
        <h2 class="text-6xl font-bold mb-4">Nothing to see here!</h2>
        <p class="text-2xl">
          <Link to="/">Go to the home page</Link>
        </p>
      </div>
    );
  }