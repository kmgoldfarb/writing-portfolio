import React from 'react';
import { Route } from 'react-router-dom';
import Footer from '../Footer/Footer';
import About from '../About/About';
import Post from '../Post/Post';
import AllPosts from '../AllPosts/AllPosts';
import classes from './Blog.css';
import Header from '../Header/Header';

function Blog() {
    return (
        <div className={classes.Blog}>
            <Header />
            <div>
                <Route path='/' exact component={AllPosts} />
                <Route path='/about/' component={About} />
                <Route path='/posts/:slug' exact component={Post} />
            </div>
            <Footer />
        </div>
    ) 
}

export default Blog;