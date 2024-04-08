import { Box } from "@chakra-ui/react";
import CustomButton from "./customButton";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

 

// import required modules
import { Pagination } from 'swiper/modules';
const SwiperSliding=({subtitle,rating,viewPortWidth,animeTitles})=>{
    return(
        <>
      <div className=" w-[96vw]  ">
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper w-full  py-6 ">

{animeTitles.map((titles,index)=>{
    return(
        <>
        <SwiperSlide key={index}   > 
        <div className={`grid  mt-10  ${
      !viewPortWidth
        ? `grid-cols-[1fr,2fr] p-5 `
        : `block bg-[url(/img2.jpg)] bg- bg-cover bg-fit bg-no-repeat bg-center min-h-[30vh]  w-[100%] h-[30rem]`
    }`}>
       <div className={` flex flex-col  text-start px-4 box-border   h-full gap-4 text-[#9797a596] mobile:w-full mobile:items-center lgMobile:w-[70%] ${viewPortWidth? `justify-end w-[50%]   py-2`:`w-full justify-center`} `}>
   
   <Box className="text-[3rem] text-white font-bold md:text-xl sm:text-xl lgMobile:text-xl mobile:text-xl">
     <h1 >
    {titles}
     </h1>
   </Box>
   <Box className={` flex flex-row bg- items-center justify-start gap-2 md:hidden sm:hidden mobile:hidden lgMobile:hidden`}>
     <CustomButton
       classname=" border-[3px] rounded-lg 
                              border-teal-900    text-center font-bold flex items-center text-xs w-[50px] 
                              h-[30px] justify-center"
     >
       PG {rating}
     </CustomButton>

     <CustomButton
       classname="  bg-teal-900 rounded-lg flex justify-center items-center font-black text-xs w-[30px] h-[30px]
             "
     >
       HD
     </CustomButton>
     <CustomButton
       classname="  bg-teal-900 rounded-lg flex justify-center items-start font-bold text-lg w-[30px] h-[30px]
             "
     >
       {subtitle}
     </CustomButton>
     <i>
       <img
         src="/mic.png"
         className="w-[20px] h-[20px]"
         alt="mic"
       />
     </i>
     <span
       className="
             flex jsutify-center items-center text-center"
     >
       time-e-e
     </span>
   </Box>
   <Box className="mobile:text-center">
     niggas tryna pull up type shiiii but i aint stressing
     ............ ............. ................... ..........
     .............. ..... ................. .............. ......
     ....................... ............
     .................................... ...................
     .............
   </Box>


     <div  className="   w-full flex justify-start mobile:justify-center"> 
       <CustomButton
             classname=" flex flex-row text-white rounded-xl p-3 items-center gap-3  font-bold
               bg-teal-800 mobile:items-centerhover:bg-teal-900
               "
           >
             <i>
               <img src="/playBut.png" className=" w-3  " alt="play button" />
             </i>{" "}
             Play Now
           </CustomButton></div>
         

 
</div>
 
<div
 className={`  ${
   !viewPortWidth
     ? `border-2 border-[#767676a7] rounded-xl  max-h-[500px] overflow-hidden flex justify-center items-center`
     : `hidden`
 }`}
>
 <img className="rounded-xl   w-[100%]" src="/img10.jpg" alt="" />
</div>
    </div>
        </SwiperSlide>
        </>
    )
})}


</Swiper>

      </div>

      
         
        </>
    )
}
export default SwiperSliding;