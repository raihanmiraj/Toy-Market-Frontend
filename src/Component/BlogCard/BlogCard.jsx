import React from 'react';

const BlogCard = ({question,answer}) => {
    return (
        <>
           <div className="mb-8 max-w-2xl mx-auto px-6">
      <h1 href="#" className="text-gray-900 font-bold text-3xl mb-2">
       {question}
      </h1>
      <p className="text-gray-700 mt-5">
      {answer}
      </p>
      
    </div> 
        </>
    );
}

export default BlogCard;
