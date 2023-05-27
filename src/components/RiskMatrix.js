import React from 'react'
{/* First design it statically then dynamically passing data using array */}
const RiskMatrix = () => {
    const riskMatrixData = [
        [{id: 0,val: 1},{id:1 ,val: 2},{id:2 ,val: 3},{id: 3,val: 4},{id:4 , val: 5}],
        [{id:5 ,val: 6},{id:6,val: 7},{id:7,val: 8},{id:8,val: 9},{id:9,val: 10}],
        [{id: 10,val: 11},{id:11,val: 12},{id:12,val: 13},{id:13,val: 14},{id:14,val: 15}],
        [{id:15,val: 16},{id:16,val: 17},{id:17,val: 18},{id:18,val: 19},{id:19,val: 20}],
        [{id:20,val: 21},{id:21,val: 22},{id:22,val: 23},{id:23,val: 24},{id:24,val: 25}],
      ];


  return (
    <div className=' w-full h-full'>
         <h1 className="text-3xl font-bold text-center  justify-center items-center  underline text-yellow-600">       
      </h1>
         
         {/* Start Horizontal Heading Likelihood */}
      <div className=" max-w-[1400px] max-auto grid  grid-rows-1 grid-cols-6  gap-0  text-center  justify-center items-center ">
         <div className="hidden md:block h-16  col-start-4 col-end-5 	text-2xl font-bold justify-center items-center" >Likelihood</div>
         <div className="sm:hidden h-16  col-span-6 pt-6	text-xs font-bold justify-center items-center" >Likelihood X Consequences</div>
      </div>
      {/* End Horizontal Heading Likelihood */}
       {/* Start Vertical  Column Heading */}
      <div className=" max-w-[1400px] grid  grid-rows-1 grid-cols-6 gap-0  text-center  justify-center items-center ">
          <div className=" w-full  h-16 flex justify-center items-center " ></div>
          <div className=" w-full  h-16 flex justify-center items-center border-2 border-gray-200 text-xs" >Very unlikely to Happen</div>
          <div className=" w-full h-16 flex justify-center items-center border-2 border-gray-200 text-xs">Unlikely to happen</div>
          <div  className=" w-full h-16 flex justify-center items-center border-2 border-gray-200 text-xs" > Possibly could happen</div>
          <div   className=" w-full h-16 flex justify-center items-center border-2 border-gray-200 text-xs">Likely to happen</div>
          <div className=" w-full h-16 flex justify-center items-center border-2 border-gray-200 text-xs" >Very unlikely to happen</div> 
      </div>
      {/* End Vertical  Column Heading */}
      <div className=" max-w-[1400px] max-auto grid  grid-rows-5 grid-cols-6 gap-1  text-center  justify-center items-center ">
          <div className=" w-full  h-full row-span-5 flex justify-center text-center item-center" >
            <div className="max-w-[150px] grid  grid-rows-5 sm:grid-cols-1 md:grid-cols-2 gap-1  text-center  justify-center items-center">
                {/* Start Vertical Heading text rotate 90 degree */}
                <div className="hidden md:block w-[20px] h-10 row-span-5  justify-center items-center transform -rotate-90 text-2xl font-bold" >Impact</div>
                {/* End Vertical Heading text rotate 90 degree */}
                  {/* Start Rows Heading   */}
                <div className="  md:w-[75px] sm:w-full h-16 lg:w-[118px]  flex justify-center text-center truncate hover:scale-110 duration-500 items-center border-2  border-gray-200 text-xs " >Catastrophic</div>
                <div className=" md:w-[75px] sm:w-full lg:w-[118px] h-16 flex pr-2 justify-center items-center truncate hover:text-clip border-2 border-gray-200 text-xs" >Significant</div>
                <div  className=" md:w-[75x] sm:w-full lg:w-[118px] h-16 flex justify-center items-center truncate hover:text-clip  border-2 border-gray-200 text-xs" > Moderate</div>
                <div   className=" md:w-[75px] sm:w-full lg:w-[118px] h-16 flex justify-center items-center truncate hover:text-clip  border-2 border-gray-200 text-xs">Low</div>
                <div className=" md:w-[75px] sm:w-full lg:w-[118px] h-16 flex justify-center items-center truncate hover:text-clip  border-2 border-gray-200 text-xs"  >Negligible</div>
                 {/* End Rows Heading   */}
            </div>
          </div>
          {/* Start Matrix data and boxed flows here using grid*/}
          {/*  */}
        
          {riskMatrixData.map((rowMatrix) => {
            return(
          <>
          {rowMatrix.map(object => <div key={object.id} className=" w-full h-16 flex justify-center items-center" style={{background :`${getRandomColor()}`}}>{object.val}</div>)}
          {/*
          <div className=" w-full  h-16 flex justify-center items-center" style={{background :`${getRandomColor()}`}}>01</div>
          <div className=" w-full h-16 flex justify-center items-center" style={{background :`${getRandomColor()}`}}>02</div>
          <div  className=" w-full h-16 flex justify-center items-center" style={{background :`${getRandomColor()}`}}> 03</div>
          <div   className=" w-full h-16 flex justify-center items-center"style={{background :`${getRandomColor()}`}}>04</div>
          <div className=" w-full h-16 flex justify-center items-center"  style={{background :`${getRandomColor()}`}}>05</div>
            */}
          </>)
            }
          )}

          {/*<div  className=" w-full h-16 flex justify-center items-center" style={{background :`${getRandomColor()}`}}>06</div>
          <div className=" w-full h-16 flex justify-center items-center"  style={{background :`${getRandomColor()}`}}>07</div>
          <div className=" w-full h-16 flex justify-center items-center"  style={{background :`${getRandomColor()}`}}>08</div>
          <div className=" w-full h-16 flex justify-center items-center" style={{background :`${getRandomColor()}`}}> 09</div>
          <div className=" w-full  h-16 flex justify-center items-center" style={{background :`${getRandomColor()}`}}>10</div>
          <div className=" w-full h-16 flex justify-center items-center" style={{background :`${getRandomColor()}`}}>11</div>
          <div className=" w-full h-16 flex justify-center items-center" style={{background :`${getRandomColor()}`}}>12</div>
          <div className=" w-full h-16 flex justify-center items-center"  style={{background :`${getRandomColor()}`}}>13</div>
          <div className=" w-full h-16 flex justify-center items-center" style={{background :`${getRandomColor()}`}}>14</div>
          <div className=" w-full h-16 flex justify-center items-center" style={{background :`${getRandomColor()}`}}>15</div>
          <div className=" w-full h-16 flex justify-center items-center" style={{background :`${getRandomColor()}`}}>15</div>
          <div className=" w-full h-16 flex justify-center items-center" style={{background :`${getRandomColor()}`}}>16</div>
          <div className=" w-full h-16 flex justify-center items-center" style={{background :`${getRandomColor()}`}}>17</div>
          <div className=" w-full h-16 flex justify-center items-center" style={{background :`${getRandomColor()}`}}>18</div>
          <div className=" w-full h-16 flex justify-center items-center" style={{background :`${getRandomColor()}`}}>19</div>
          <div className=" w-full h-16 flex justify-center items-center" style={{background :`${getRandomColor()}`}}>20</div>
          <div className=" w-full h-16 flex justify-center items-center" style={{background :`${getRandomColor()}`}}>21</div>
          <div className=" w-full h-16 flex justify-center items-center" style={{background :`${getRandomColor()}`}}>22</div>
          <div className=" w-full h-16 flex justify-center items-center" style={{background :`${getRandomColor()}`}}>23</div>
          <div  className=" w-full h-16 flex justify-center items-center" style={{background :`${getRandomColor()}`}}>24</div> */}
          {/* End Matrix data and boxed flows here using grid*/}
      </div>
    </div>
  )
}
function getRandomColor(){
    return "#"+ ((1<<24)*Math.random()| 0).toString(16);
  }

export default RiskMatrix