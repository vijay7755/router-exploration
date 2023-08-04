import React, { lazy, useState, Suspense } from "react";
import { Route, Outlet,  Link } from "react-router-dom";
import SinglePost from "../SinglePost/SinglePost";
import { Routes } from "react-router-dom/dist";

// const LazyLoad = lazy(() => import('../LazyLoad/LazyLoad'))

const Posts = (props) => {
  console.log("post props: ", props);
  const [showComponent, setShowComponent] = useState(false);

  const post = () => {
    return (
      <ul>
        <li>
          <Link to="/posts/1">Post 1</Link>
        </li>
        <li>
          <Link to="/posts/2">Post 2</Link>
        </li>
        <li>
          <Link to="/posts/3">Post 3</Link>
        </li>
        <li>
          <Link to="/posts/4">Post 4</Link>
        </li>
      </ul>
    );
  };

  return (
    <div>
      <div className="my-3">{post()}</div>
      <div>
          {/* <Route path=":id" element={<SinglePost />} /> */}
          <Outlet />
      </div>

      {/* <button className="bg-yellow-400 text-white px-2 py-1">
                <a
                    href="#"
                    className="font-medium"
                    onClick={() => setShowComponent(!showComponent)}
                >Toggle Component</a>
            </button> */}

      {/* <Suspense fallback={<div>Loading...</div>}>
                {showComponent &&
                    <div>
                        <LazyLoad />
                    </div>}
            </Suspense>
            <br />

            <div>
                <button
                    onClick={() => { props.history.push('/') }}
                    type="button"
                    className="bg-red-400 text-white px-2 py-1"
                >Back to home</button>
            </div> */}
    </div>
  );
};

export default Posts;
