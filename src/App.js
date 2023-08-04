import React, { lazy, Suspense } from 'react'
import './App.css'
import { BrowserRouter, Route, HashRouter, Switch, Redirect } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'

const Home = lazy(() => import(/*webpackChunkName: "home" */'./components/Home/Home'))
const About = lazy(() => import(/*webpackChunkName: "about" */'./components/About/About'))
const Contact = lazy(() => import(/*webpackChunkName: "contact" */'./components/Contact/Contact'))
const Posts = lazy(() => import(/*webpackChunkName: "posts" */'./components/Posts/Posts'))
const NotFound = lazy(() => import(/*webpackChunkName: "notfound" */'./components/NotFound/NotFound'))



function App() {
    return (
        <BrowserRouter>
            <Header />
            <div className="container mx-auto">
                <div>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/about" component={About} />
                            <Route path="/contact" component={Contact} />
                            <Route path="/posts" component={Posts} />
                            <Redirect from="/" to="/posts" exact />
                            <Route path="*" component={NotFound} />
                        </Switch>
                    </Suspense>
                </div>
            </div>
            <Footer />
        </BrowserRouter>
    )
}

export default App
