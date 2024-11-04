import { useState, useEffect } from 'react';
import axios from 'axios';

function Generator() {
  const [advise, setAdvise] = useState({});

  const getAdvise = async () => {
    try {
      const response = await axios.get('https://api.adviceslip.com/advice');
      const advise = response.data.slip;
      setAdvise(advise);
    } catch (error) {
      console.error('Error fetching advice:', error);
    }
  };

  useEffect(() => {
    getAdvise();
  }, []);

  return (
    <div className="w-screen h-screen flex items-center justify-center p-4">
      <div className="flex flex-col items-center text-center justify-center bg-gray-500 rounded-xl w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 h-auto py-10 px-8 relative">
        {advise && advise.id ? (
          <>
            <p className="text-xs text-advise-id pb-4">Advice #{advise.id}</p>
            <p className="text-lg pb-6">"{advise.advice}"</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
         <svg width="220" height="16" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <path fill="#4F5D74" d="M0 8h100v1H0zM120 8h100v1H120z" />
              <g transform="translate(100)" fill="#CEE3E9">
                <rect width="6" height="16" rx="3" />
                <rect x="14" width="6" height="16" rx="3" />
              </g>
            </g>
          </svg>
        <button
          className="bg-advise-id rounded-3xl p-2 flex items-center justify-center absolute -bottom-5  hover:shadow-custom"
          onClick={getAdvise}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
              fill="#202733"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Generator;
