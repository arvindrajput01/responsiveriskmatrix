import React from 'react'

const RiskMatrix = () => {
    const riskMatrixData = [
        [{id: 0,val: 1},{id:1 ,val: 2},{id:2 ,val: 3},{id: 3,val: 4},{id:4 , val: 5}],
        [{id:5 ,val: 6},{id:6,val: 7},{id:7,val: 8},{id:8,val: 9},{id:9,val: 10}],
        [{id: 10,val: 11},{id:11,val: 12},{id:12,val: 13},{id:13,val: 14},{id:14,val: 15}],
        [{id:15,val: 16},{id:16,val: 17},{id:17,val: 18},{id:18,val: 19},{id:19,val: 20}],
        [{id:20,val: 21},{id:21,val: 22},{id:22,val: 23},{id:23,val: 24},{id:24,val: 25}],
      ];


  return (
    <div>
         <h1 className="text-3xl font-bold text-center  justify-center items-center  underline text-yellow-600">       
      </h1>
         
         {/* Start Horizontal Heading Likelihood */}
      <div className=" w-[1400px] grid  grid-rows-1 grid-cols-6  gap-0  text-center  justify-center items-center ">
         <div className=" h-16  col-start-4 col-end-5 flex	text-2xl font-bold justify-center items-center" >Likelihood</div>
      </div>
      {/* End Horizontal Heading Likelihood */}
       {/* Start Vertical  Column Heading */}
      <div className=" w-[1400px] grid  grid-rows-1 grid-cols-6 gap-0  text-center  justify-center items-center ">
          <div className=" w-full  h-16 flex justify-center items-center " ></div>
          <div className=" w-full  h-16 flex justify-center items-center border-2 border-gray-200" >Very unlikely to Happen</div>
          <div className=" w-full h-16 flex justify-center items-center border-2 border-gray-200">Unlikely to happen</div>
          <div  className=" w-full h-16 flex justify-center items-center border-2 border-gray-200" > Possibly could happen</div>
          <div   className=" w-full h-16 flex justify-center items-center border-2 border-gray-200">Likely to happen</div>
          <div className=" w-full h-16 flex justify-center items-center border-2 border-gray-200" >Very unlikely to happen</div> 
      </div>
      {/* End Vertical  Column Heading */}
      <div className=" w-[1400px] grid  grid-rows-5 grid-cols-6 gap-1  text-center  justify-center items-center ">
          <div className=" w-full grow h-full row-span-5 flex justify-center items-center " >
            <div className="w-[150px] grid  grid-rows-5 grid-cols-2 gap-1  text-center  justify-center items-center">
                {/* Start Vertical Heading text rotate 90 degree */}
                <div className="  w-full grow h-full row-span-5 flex justify-center items-center transform -rotate-90 text-2xl font-bold" >Impact</div>
                {/* End Vertical Heading text rotate 90 degree */}
                  {/* Start Rows Heading   */}
                <div className=" w-[118px]  h-16 flex justify-center items-center border-2 border-gray-200" >Catastrophic</div>
                <div className=" w-[118px] h-16 flex justify-center items-center border-2 border-gray-200" >Significant</div>
                <div  className=" w-[118px] h-16 flex justify-center items-center border-2 border-gray-200" > Moderate</div>
                <div   className=" w-[118px] h-16 flex justify-center items-center border-2 border-gray-200">Low</div>
                <div className=" w-[118px] h-16 flex justify-center items-center border-2 border-gray-200" >Negligible</div>
                 {/* End Rows Heading   */}
            </div>
          </div>
          {/* Start Matrix data and boxed flows here using grid*/}
          {/*  */}
        
          {riskMatrixData.map((rowMatrix) => {
            return(
          <>
          {rowMatrix.map(object => <div key={object.id} className=" w-full  h-16 flex justify-center items-center" style={{background :`${getRandomColor()}`}}>{object.val}</div>)}
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