import React from 'react';
import AddToy from '../AddToy/AddToy';
import AllToy from '../AllToy/AllToy';
import SingleToy from '../SingleToy/SingleToy';

const Blog = () => {
    return (
        <div className='min-h-[calc(100vh-136px)]'>
            This is Blog
            <SingleToy></SingleToy>
        </div>
    );
};

export default Blog;