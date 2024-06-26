import CustomButton from "./customButton";
import ReleaseSectionHomepage from "./releaseSectionHomepage.jsx";
import NewlyAddedSectionHomepage from "./newlyAddedSecionHompage.jsx";
import JustCompletedSectionHomepage from "./justCompletedSectionHomepage.jsx";
const SeriesDisplaySection = ({
  rating,
  subtitle,
  viewPortWidth,
  animeBlocks,
  method,
  Days,
  viewPortWidth2,
  handleDisplaysection,
  displaySection,
  setDisplaySection,
  seasonData,
  reviewsData,
  tabsData,
  tabState,
  handleTabData,
  contentData,
  contentState,
  handleContentData,
  managePreviousButtonHome,
  manageNextButtonHome,
  topAnimeData,
  navigate,
}) => {
  const seasonDataContent = seasonData?.data?.data;
  const reviewsDataContent = reviewsData?.data?.data;
  const topAnimeDataContent = topAnimeData?.data?.data;

  console.log(reviewsDataContent);
  return (
    <>
      <section className=" flex mt-20 box-border   px-4   flex-col gap-[10rem] w-full">
        <div
          className={` gap-4 ${
            viewPortWidth ? `block` : `grid grid-cols-[3fr,1fr]`
          }`}
        >
          <div className="flex flex-col gap-3">
            <div className="w-full h-48 bg-teal-700 rounded-xl flex justify-between px-12 items-center">
              <div className="w-24 h-24 rounded-full bg-black  flex items-center justify-center">
                <img src="logo3.png" alt="logo" className="w-12 " />
              </div>
              <div className="text-white font-black text-xl">Welcome</div>
              <div className="w-24 h-24 rounded-full bg-black italic flex items-center font-bold text-lg justify-center text-blue-700 text-center">
                to
              </div>
              <div className="text-white font-black text-xl">
                <span>Anime</span>
                <span className="text-blue-800">Wave</span>
              </div>

              <div className="w-24 h-24 rounded-full bg-black  flex items-center justify-center">
                <img src="logo3.png" alt="logo" className="w-12 " />
              </div>
            </div>

            <div className="flex md:flex-row  items-center min-h-[80px] justify-between mobile:flex-col mobile:items-start mobile:min-h-[60px]">
              <div className="text-2xl mobile:text-[15px] mobile:font-medium">
                seasonly Updated
              </div>
              <div className="flex gap-2 mobile:text-xs  ">
                <span>
                  <CustomButton>All</CustomButton>
                </span>
                <span>
                  {" "}
                  <CustomButton>Sub</CustomButton>
                </span>
                <span>
                  <CustomButton>Dub</CustomButton>
                </span>
                <span>
                  <CustomButton>Chinese</CustomButton>
                </span>
                <span>
                  <CustomButton>Trending</CustomButton>
                </span>
                <span>
                  <CustomButton>Random</CustomButton>
                </span>

                <span className="flex flex-row gap-4">
                  <CustomButton onClick={() => managePreviousButtonHome()}>
                    {"<"}
                  </CustomButton>
                  <CustomButton onClick={() => manageNextButtonHome()}>
                    {">"}
                  </CustomButton>
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-6">
              <div
                className="grid 
              ml:grid-cols-[repeat(5,minmax(150px,2fr))] 
              xl:grid-cols-[repeat(5,minmax(150px,2fr))] 
              lg:grid-cols-[repeat(5,minmax(150px,2fr))]
              md:grid-cols-[repeat(4,minmax(150px,1fr))]
              sm:grid-cols-[repeat(3,minmax(100px,1fr))]
              lgMobile:grid-cols-[repeat(3,minmax(100px,1fr))]
              mobile:grid-cols-[repeat(2,minmax(100px,1fr))]
              grid-rows-auto  gap-x-6 gap-y-9 box-border"
              >
                {reviewsDataContent?.slice(0, 10)?.map((response, index) => {
                  const images = response?.entry?.images?.jpg?.image_url;
                  const titles = response?.entry?.title;
                  const rank = response?.rank;
                  const date = response?.date;
                  const type = response?.type;
                  const tags=response?.tags
                  const score = response?.score;
                  const animeId = response?.entry?.mal_id;
                  const review = response?.review;
                  console.log(reviewsDataContent);
                  return (
                    <div
                      className="flex flex-col gap-4 cursor-pointer  relative "
                      key={index}
                      onClick={() => navigate(`/special/${animeId}`)}
                    >
                      <div className="bg-gray-800 rounded-[.2rem] w-full">
                        {" "}
                        <div className="w-full  relative">
                          <img
                            className="h-[15rem]   w-[100%] "
                            src={images}
                            alt=""
                          />
                          {/* <div className="text-xl text-red-800  absolute bottom-[50%] left-[44%] top-[50%]">
                            {" "}
                            <img
                              src="playBut.png"
                              className="text-xs w-12  "
                              alt="play button"
                            />
                          </div> */}
                        </div>
                        <div className="flex flex-row justify-between px-1 py-1">
                          <div className="flex flex-row  gap-2 items-center justify-start ">
                            <span className="bg-teal-900 p-1 text-xs rounded">
                              {score}
                            </span>
                            <span>
                              <i>
                                <img
                                  className="bg-teal-900 p-1 rounded"
                                  src="mic.png"
                                  width="20"
                                  alt=""
                                />
                              </i>
                            </span>
                            <span className="bg-teal-900 p-1 text-xs rounded">
                              {rank}
                            </span>
                          </div>
                          <div>{type}</div>
                        </div>
                      </div>
                      <div className={`bg-[#0e1212fa] w-64 z-30 absolute right-[-15rem] h-[300px] ${onmouseenter?`flex flex-col`:`hidden`}   justify-between px-4 py-3`}>
                        <div className="text-[12px] font-bold"> {titles}</div>

                        <div className=" text-xs">
                          {" "}
                          <span>review</span>
                          {review.split(" ").slice(0, 35).join(" ") + " ...."}
                        </div>

                        <div className="w-full flex justify-center   ">
                          <div className="flex items-center p-1 text-center w-fit text-[10px] bg-indigo-700 ">Remarks</div>
                          <div  className="w-full  grid grid-cols-[1fr,auto,auto] gap-2 h-8 bg-teal-200 text-center justify-between  px-4 text-black text-[10px] items-center font-bold"> <span>{tags}</span> <span className="w-2 h-8 bg-indigo-700"></span> <span className="text-sm">{score}</span></div>
                        </div>
                        <CustomButton classname="w-full  h-8 bg-teal-200 text-center text-black font-bold"> Watch</CustomButton>
                      </div>

                      <div> {titles}</div>
                    </div>
                  );
                })}
              </div>
              <div
                className={`flex justify-between w-full box-border ${
                  viewPortWidth ? `flex` : `hidden`
                }`}
              >
                <CustomButton
                  onClick={() => managePreviousButtonHome()}
                  classname=" bg-[rgba(32,32,35,1)] w-[45vw] h-[40px] rounded-lg hover:bg-[rgba(32,32,135,.2)] "
                >
                  {"<"}
                </CustomButton>
                <CustomButton
                  onClick={() => manageNextButtonHome()}
                  classname=" bg-[rgba(32,32,35,1)] w-[45vw]  h-[40px] rounded-lg hover:bg-[rgba(32,32,135,.2)] "
                >
                  {">"}
                </CustomButton>
              </div>
            </div>
          </div>

          <div
            className={`w-full grid grid-cols-auto  gap-3 py-2 ${
              viewPortWidth ? `hidden` : `block`
            }`}
          >
            <div className="flex flex-row justify-between items-center max-h-[50px]">
              {" "}
              <div className="pl-2 text-2xl">Top anime</div>
              <div className="bg-gray-700 flex rounded flex-row p-1 gap-2">
                {/* {console.log(tabsData)} */}
                {tabsData?.map((items, index) => (
                  <span
                    onClick={() => handleTabData(index)}
                    key={index}
                    className={` ${
                      tabState === items ? `bg-red-400` : ``
                    } rounded p-2 text-xs`}
                  >
                    {items}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              {topAnimeDataContent
                ?.sort((a, b) => b.score - a.score)
                ?.slice(0, 10)
                ?.map((response, index) => {
                  const images = response?.images?.jpg?.image_url;
                  const titles = response?.title;
                  const rank = response?.rank;
                  const type = response?.type;
                  const score = response?.score;
                  const animeId = response?.mal_id;
                  return (
                    <div
                      key={index}
                      onClick={() => navigate(`/special/${animeId}`)}
                      className="grid rounded-lg grid-cols-[1fr,2fr,6fr] gap-2 items-center px-2 bg-[#101010] "
                    >
                      <div className="text-[3.3rem] font-bold text-center">
                        {index}
                      </div>
                      <div>
                        {" "}
                        <img src={images} className="h-fill " alt="" />
                      </div>
                      <div className="flex flex-col items-start gap-1">
                        <div>{titles}</div>
                        <div className="flex flex-row gap-3 items-center">
                          <CustomButton classname=" flex flex-row gap-3 bg-teal-900 p-1 text-xs font-medium rounded-lg">
                            <span>{rank}</span>
                          </CustomButton>
                          <CustomButton classname="flex flex-row gap-2 bg-teal-900 p-1 text-xs font-medium items-center rounded-lg ">
                            <img src="mic.png" width="10" alt="" />{" "}
                            <span>{score}</span>
                          </CustomButton>
                          <span>. {type}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div
          className={`flex  gap-4 ${
            viewPortWidth ? `flex-col w-full` : `flex-row w-[70vw]`
          }`}
        >
          <div
            className={`bg-[#202023] px-1 py-1 flex   rounded-lg gap-1 ${
              viewPortWidth2 ? `block` : `hidden`
            }`}
          >
            {contentData?.map((items, index) => (
              <div
                className="flex-[1] flex justify-center items-center"
                key={index}
              >
                <CustomButton
                  onClick={() => {
                    handleDisplaysection(index);
                    handleContentData(index);
                  }}
                  classname={` hover:bg-[rgba(152,213,172,.2)] focus:bg-teal-800 py-1 px-2 w-full flex justify-center items-center  ${
                    contentState === items ? `bg-teal-800` : ``
                  } rounded-lg w-full gap-3 flex flex-row mobile:flex-col mobile:text-xs mobile:justify-center mobile:items-center mobile:px-0 mobile:gap-2  lgMobile:text-xs lgMobile:px-0 lgMobile:gap-2 lgMobile:justify-center`}
                >
                  {" "}
                  {items}
                </CustomButton>
              </div>
            ))}

            {/* <span>New</span>
              <span>Release</span>
            </CustomButton>
            <CustomButton
              onClick={() => handleDisplaysection(2)}
              classname={` py-1 px-2 ${displaySection===2? `hover:bg-gray-600 focus:bg-teal-800`:''} rounded-lg w-full gap-3 flex flex-row mobile:flex-col mobile:text-xs mobile:justify-center mobile:items-center mobile:px-0 mobile:gap-2  lgMobile:text-xs lgMobile:px-0 lgMobile:gap-2 lgMobile:justify-center`}
            >
              <span>Newly</span>
              <span>Added</span>
            </CustomButton>
            <CustomButton
              onClick={() => handleDisplaysection(3)}
              classname={` py-1 px-2 ${displaySection===3? `hover:bg-gray-600 focus:bg-teal-800`:''} rounded-lg w-full gap-3 flex flex-row mobile:flex-col mobile:text-xs mobile:justify-center mobile:items-center mobile:px-0 mobile:gap-2  lgMobile:text-xs lgMobile:px-0 lgMobile:gap-2 lgMobile:justify-center`}
            >
              <span>Just</span>
              <span>Completed</span>
            </CustomButton> */}
          </div>
          <ReleaseSectionHomepage
            subtitle={subtitle}
            method={method}
            animeBlocks={animeBlocks}
            viewPortWidth={viewPortWidth}
            viewPortWidth2={viewPortWidth2}
            displaySection={displaySection}
            seasonData={seasonData}
            navigate={navigate}
          />
          <NewlyAddedSectionHomepage
            subtitle={subtitle}
            method={method}
            animeBlocks={animeBlocks}
            viewPortWidth={viewPortWidth}
            viewPortWidth2={viewPortWidth2}
            displaySection={displaySection}
            seasonData={seasonData}
            navigate={navigate}
          />
          <JustCompletedSectionHomepage
            subtitle={subtitle}
            method={method}
            animeBlocks={animeBlocks}
            viewPortWidth={viewPortWidth}
            viewPortWidth2={viewPortWidth2}
            displaySection={displaySection}
            seasonData={seasonData}
            navigate={navigate}
          />
        </div>
        <div
          className={`flex flex-col mb-20 ${
            viewPortWidth ? `w-full` : `w-[70vw]`
          }`}
        >
          <div
            className="bg-[url(/img13.png)] bg-cover bg-no-repeat bg-center grid grid-rows-2 justify-center w-full items-center gap-6  p-3 px-6 text-3xl mobile:text-lg "
            style={{
              backgroundColor: "rgba(0,0,0,0.65)",
              backgroundBlendMode: "overlay",
            }}
          >
            <div className="flex sm:flex-row  gap-3 mobile:flex-col lgMobile:flex-col ">
              <span className="font-medium">Estimated Schedule- </span>
              <span className="text-gray-500 text-[80%]">
                {" "}
                Now: 27/03/2024 14:07:59
              </span>
            </div>
            <div className="flex w-full flex-row gap-8 mobile:gap-5 mobile:text-2xl  lgMobile:gap-5 lgMobile:text-2xl text-5xl font-bold overflow-hidden">
              {Days.map((items, index) => {
                return <div key={index}>{items}</div>;
              })}
            </div>
          </div>
          <div>
            {animeBlocks.map((items, index) => {
              return (
                <div
                  key={index}
                  className="bg-[#101010] grid grid-cols-[.5fr,4fr,1fr] w-full gap-4 p-3 text-lg"
                >
                  <span className="flex justify-end"> {`${index}:00`}</span>
                  <span className="flex justify-start">{items}</span>
                  <span className="flex justify-start">
                    <CustomButton classname="bg-[rgba(5,12,13,.8)] p-2 rounded-xl text-xs">
                      Episode 50
                    </CustomButton>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div
          className={` w-full grid grid-cols-auto  gap-3 py-2 ${
            viewPortWidth ? `block` : `hidden`
          } `}
        >
          <div className="flex flex-row justify-between items-center max-h-[50px]">
            {" "}
            <div className="pl-2 text-2xl">Top anime</div>
            <div className="bg-gray-700 flex rounded flex-row p-1 gap-2">
              {tabsData?.map((items, index) => (
                <CustomButton
                  onClick={() => handleTabData(index)}
                  key={index}
                  classname={` ${
                    tabState === items ? `bg-red-400` : ``
                  } rounded p-2 text-xs`}
                >
                  {items}
                </CustomButton>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {reviewsDataContent
              ?.sort((a, b) => b.favorites - a.favorites)
              ?.slice(0, 10)
              ?.map((response, index) => {
                const images = response?.entry?.images?.jpg?.image_url;
                const titles = response?.title_english;
                //  const rank=response?.rank;
                const type = response?.type;
                const score = response?.score;
                const animeId = response?.mal_id;
                //  const popularity=response?.popularity
                const favorites = response?.favorites;
                return (
                  <div
                    onClick={() => navigate(`/special/${animeId}`)}
                    key={index}
                    className="grid rounded-lg md:grid-cols-[0.2fr,auto,6fr]
                  mobile:grid-cols-[.6fr,auto,2fr] mobile:gap-2 lgMobile:grid-cols-[.6fr,1fr,3fr] gap-4 items-center 
                         px-2 bg-[#101010] "
                  >
                    <div className="text-[3.3rem] mobile:text-[2rem] font-bold text-center">
                      {index}
                    </div>
                    <div className="mobile:w-[45px]">
                      {" "}
                      <img
                        src={images}
                        className="h-20 mobile:w-full "
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col justify-start w-full items-start mobile:text-[12px] gap-1">
                      <div>{titles}</div>
                      <div className="flex flex-row gap-3 mobile:gap-1 w-full items-center">
                        <CustomButton classname=" flex flex-row gap-3 bg-teal-900 p-1 text-xs mobile:text-[.7rem] mobile:gap-1 font-medium rounded-lg">
                          <span>{score}</span>
                          <span>1098</span>
                        </CustomButton>
                        <CustomButton classname="flex flex-row gap-2 bg-teal-900 p-1 text-xs mobile:text-[.7rem] mobile:gap-1  font-medium items-center rounded-lg ">
                          <img
                            src="mic.png"
                            width="10"
                            className="mobile:w-[5px]"
                            alt=""
                          />{" "}
                          <span>1061</span>
                        </CustomButton>
                        <span>. {method}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default SeriesDisplaySection;
