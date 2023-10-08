import { Outlet, Link } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>Design by Lawted</h1>
        <nav>
          <ul>
            <li>
              <Link to={`/demo/1`}>Without GPT Demo</Link>
            </li>
            <li>
              <Link to={`/demo/2`}>GPT Demo</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
