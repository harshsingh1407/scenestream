import React from 'react';
import { XCircle } from 'lucide-react';

const Movienotfound = ({ query }) => {
  return (
    <div className="text-center p-16 flex flex-col items-center justify-center min-h-[60vh]">
      <XCircle className="w-16 h-16 text-red-500 mb-4 opacity-70" />
      <h2 className="text-3xl font-extrabold text-white mb-2">
        Oops! Movie Not Found
      </h2>
      <p className="text-lg text-gray-400 max-w-lg">
        We couldn't find any results for "{query}".
        Please double-check the spelling or try a different search term.
      </p>
    </div>
  );
};

export default Movienotfound;
