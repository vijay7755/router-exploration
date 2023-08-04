import React, { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import SinglePost from "./components/SinglePost/SinglePost";

const Home = lazy(() =>
  import(/*webpackChunkName: "home" */ "./components/Home/Home")
);
const About = lazy(() =>
  import(/*webpackChunkName: "about" */ "./components/About/About")
);
const Contact = lazy(() =>
  import(/*webpackChunkName: "contact" */ "./components/Contact/Contact")
);
const Posts = lazy(() =>
  import(/*webpackChunkName: "posts" */ "./components/Posts/Posts")
);
const NotFound = lazy(() =>
  import(/*webpackChunkName: "notfound" */ "./components/NotFound/NotFound")
);

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container mx-auto">
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/posts/*" element={<Posts />}>
                {/* Nested route for SinglePost */}
                <Route path=":id" element={<SinglePost />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
