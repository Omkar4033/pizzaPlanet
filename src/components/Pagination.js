import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Pagination = ({currpage,Total_pages,changepage}) => {
    
  return (
    <div className="pagination flex-col my-4   text-center mx-auto">
        {currpage !== 1 && <button onClick={()=>changepage(currpage-1)} ><ArrowBackIcon/></button>}
        {[...Array(Total_pages)].map((v, idx) => {
          return (
            <button
              key={idx}
              onClick={() => changepage(idx + 1)}
              className= {idx+1 === currpage ? "mx-3 bg-yellow-500 w-8 font-mono rounded-xl text-xl ":"mx-3 w-8 font-mono rounded-xl text-xl"}
            >
              {idx + 1}
            </button>
          );
        })}
        {currpage !== Total_pages && <button onClick={()=>changepage(currpage+1)} ><ArrowForwardIcon/></button>}
      </div>
  )
}

export default Pagination