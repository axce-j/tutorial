import { useNavigate } from "react-router-dom";
import CustomButton from "../../Components/customButton";
import FilterTags from "../../Components/filterTags.jsx";
import FirstDisplayModeInBrowse from "../Browse  Modules/firstDisplayModeInBrowse.jsx";
import SecondDisplayModeInBrowse from "../Browse  Modules/secondDisplayModeInBrowse.jsx";
import ThirdDisplayModeInBrowse from "../Browse  Modules/ThirdDisplayModeInBrowse.jsx";
import BrowsePagePaginationComponent from "../../Components/browsePagePaginationComponent.jsx"
// import { useNavigate } from "react-router-dom";

const BrowseMiddleSection = ({
  animeBlocks,
  viewPortWidth,
  handleTabData,
  tabState,
  tabsData,
  reviewsData,
  animeData,
  filterDisplay,
  manageFilterDisplay,
  animeGenreData,
  filterList,setFilterList,
  filterDisplayArray,
  // paginationNumbers,
  paginationNumbersCurrentPage,
  manageNextButton,
  managePaginationOnClick,
  managePreviousButton,
  paginationNumbersArray,
  // setPaginationNumbers,
  setToPaginationEnd,
  searchOption,
  setSearchOption,
  animeSearchData
}) => {
  const reviewsDataContent = reviewsData?.data?.data;
  const animeDataContent = animeData?.data?.data;
  // console.log( animeSearchData);
  const navigate = useNavigate();
  return (
    <>
      <div className="mt-8 p-3 w-full flex flex-col gap-10">
        <div className="flex flex-col w-full gap-3 text-gray-300">
          <div className="text-gray-400">
            {" "}
            <span onClick={() => navigate("/home")} className="text-gray-600">
              <a href="">Home</a>
            </span>{" "}
            /Filter
          </div>
          <div className="text-4xl ">Browse</div>
        </div>

        <div className="grid xl:grid-cols-[2.5fr,1fr] gap-12">
          <div className="flex flex-col gap-4">
            <div>
              <FilterTags
                animeDataContent={animeDataContent}
                animeBlocks={animeBlocks}
                animeGenreData={animeGenreData}
                filterList={filterList} 
                setFilterList={setFilterList}
                filterDisplayArray={filterDisplayArray}
                setSearchOption={setSearchOption}
              />
            </div>
            <div className="w-full flex gap-3  justify-end pr-5">
              <CustomButton
                onClick={() => manageFilterDisplay("firstDisplaySection")}
              >
                {" "}
                <i>
                  <img src="book.png" alt="" />
                </i>
                we
              </CustomButton>
              <CustomButton
                onClick={() => manageFilterDisplay("secondDisplaySection")}
              >
                <i>
                  <img src="arrow.png" alt="" />
                </i>
                op
              </CustomButton>
              <CustomButton
                onClick={() => manageFilterDisplay("thirdDisplaySection")}
              >
                <i>
                  <img src="dash.png" alt="" />
                </i>
                tr
              </CustomButton>
            </div>
            <div>
              <FirstDisplayModeInBrowse
                filterDisplay={filterDisplay}
                animeBlocks={animeBlocks}
                animeDataContent={animeDataContent}
                filterList={filterList} 
                setFilterList={setFilterList}
                navigate={navigate}
              />
              <SecondDisplayModeInBrowse
                filterDisplay={filterDisplay}
                animeBlocks={animeBlocks}
                reviewsDataContent={reviewsDataContent}
                animeDataContent={animeDataContent}
                filterList={filterList} 
                setFilterList={setFilterList}
                navigate={navigate}
              />
              <ThirdDisplayModeInBrowse
                filterDisplay={filterDisplay}
                reviewsDataContent={reviewsDataContent}
                animeDataContent={animeDataContent}
                filterList={filterList} 
                setFilterList={setFilterList}
                navigate={navigate}
              />
            </div>
          </div>

          <div
            className={`w-full grid grid-rows-[auto,1fr]  gap-2 py-2 ${
              viewPortWidth ? `hidden` : `block`
            }`}
          >
            <div className="flex flex-row justify-between items-center max-h-[30px]">
              {" "}
              <div className="pl-2 text-xl">Top anime</div>
              <div className="bg-gray-700 flex rounded flex-row p-1 gap-2">
                {tabsData?.map((items, index) => (
                  <span
                    onClick={() => handleTabData(index)}
                    key={index}
                    className={` ${
                      tabState === items ? `bg-red-400` : ``
                    } rounded p-1 text-[12px] cursor-pointer`}
                  >
                    {items}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              {reviewsDataContent
                ?.sort((a, b) => b.favorites - a.favorites)
                ?.slice(0, 10)
                ?.map((response, index) => {
                  const images = response?.entry?.images?.jpg?.image_url;
                  const titles = response?.entry?.title;
                  //  const rank=response?.rank;
                  const type = response?.type;
                  const score = response?.score;
                  const animeId=response?.entry?.mal_id
                  //  const popularity=response?.popularity
                  //  const favorites=response?.favorites
                  //  console.log(response);
                  return (
                    <div
                      key={index}
                      onClick={()=> navigate(`/special/${animeId}`)}
                      className="grid rounded-lg grid-cols-[1fr,2fr,6fr] gap-2 items-center px-2 bg-[#101010] "
                    >
                      <div className="text-[3.3rem] font-bold text-center">
                        {index}
                      </div>
                      <div>
                        {" "}
                        <img src={images} className="h-fill" alt="" />
                      </div>
                      <div className="flex flex-col items-start gap-1">
                        <div>{titles}</div>
                        <div className="flex flex-row gap-3 items-center">
                          {/* <CustomButton classname=" flex flex-row gap-3 bg-teal-900 p-1 text-xs font-medium rounded-lg">
                          <span>{favorites}</span>
                        
                        </CustomButton> */}
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
          className=" w-full
              justify-center items-center flex   jsutify-between text-xs flex-row"
        >
          <BrowsePagePaginationComponent  paginationNumbersArray={paginationNumbersArray}   manageNextButton={manageNextButton} managePreviousButton={managePreviousButton} managePaginationOnClick={managePaginationOnClick} paginationNumbersCurrentPage={paginationNumbersCurrentPage} setToPaginationEnd={setToPaginationEnd}/>
        </div>
      </div>
    </>
  );
};
export default BrowseMiddleSection;
