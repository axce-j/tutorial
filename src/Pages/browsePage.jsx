import { useEffect, useState } from "react";
// import HomeInput from "../Components/homeInput";
import BrowseMiddleSection from "../modules/Browse  Modules/browseMiddleSection.jsx";
import FooterSection from "../modules/homePage  Modules/footerSection.jsx";
import NavBarSection from "../modules/homePage  Modules/navbarrSection.jsx";
import TopAnimeReviewsData from "../hooks/useTopAnimeReviews.jsx";
import AnimeData from "../hooks/useAnime.jsx"
import AnimeGenre from "../hooks/useAnimeGenre.jsx";
import axios from "../config/axios/index.jsx";
import { Axios } from "axios";
import useFilter from "../modules/Browse  Modules/hooks/useFilter.js";
import AnimeOnSearchData from "../hooks/useAnimeSearch.jsx";
const WatchSection = () => {
  // const topDiv=document.getElementById("topDiv")
  const tabsData = [
    "Day",
    "Week",
    "Month",    ];

    const filterDisplayArray=[[],[],[],[],[],[],[],[]]

  const [clicked, setclick] = useState(false);
  const [viewPortWidth, setViewPortWidth] = useState(false);

  const [searchClick, setSearchClick] = useState(false);
  const [searchClick2, setSearchClick2] = useState(false);
  const [languageEnglish, setToNotEnglish] = useState(false);
  const [displaySection, setDisplaySection] = useState(1);
  const [tabState,setTabState]=useState(tabsData[0])
  const [filterDisplay,setFilterDisplay]=useState("firstDisplaySection")
  const [filterList,setFilterList]= useState(filterDisplayArray)
  const [searchOption,setSearchOption]= useState("")
  // const topWidth=topDiv.offsetWidth
  // console.log(topWidth)



  const [paginationNumbers,setPaginationNumbers]=useState({
    currentPage:1,
    displayedPagebegin:1,
    displayedPageSecondButton:2,
    displayedPageThirdButton:3,
    displayedPageFourthButton:4,
    displayedPageEnd:5,
    totalPages:1065
  });
  // const [pagination,setPagination]=useState(paginationNumbers.currentPage);

  const paginationNumbersArray=[paginationNumbers.displayedPagebegin,paginationNumbers.displayedPageSecondButton,paginationNumbers.displayedPageThirdButton,paginationNumbers.displayedPageFourthButton,paginationNumbers.displayedPageEnd];
 
  // const topWidth=topDiv.offsetWidth
  // console.log(topWidth)

  





    const manageFilterDisplay=(filterSection)=>{
      setFilterDisplay(filterSection)
    }
  useEffect(() => {
    function handleResize() {
      setViewPortWidth(window.innerWidth < 1203);
    }
    handleResize(); // Check initial width
    window.addEventListener("resize", handleResize); // Add resize event listener

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up event listener
    };
  }, []);

  const [viewPortWidth2, setViewPortWidth2] = useState(false);
  // const topWidth=topDiv.offsetWidth
  // console.log(topWidth)
  useEffect(() => {
    function handleResize2() {
      setViewPortWidth2(window.innerWidth < 760);
    }
    handleResize2(); // Check initial width
    window.addEventListener("resize", handleResize2); // Add resize event listener

    return () => {
      window.removeEventListener("resize", handleResize2); // Clean up event listener
    };
  }, []);
  const Days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const animeBlocks = [
    "GENRE",
    "NEWEST",
    "TYPES",
    "UPDATE",
    "ONGOING",
    "SPECIAL",
    "ADDED",
    "REQUEST",
    "watch2gether",
    "DONATE",
  ];
  const method = "TV";
  const rating = "13";
  const subtitle = "cc";
  const dropDownItems = !viewPortWidth2
    ? [
        "HOME",
        "GENRE",
        "NEWEST",
        "TYPES",
        "UPDATE",
        "ONGOING",
        "SPECIAL",
        "ADDED",
        "REQUEST",
      ]
      : [
        "HOME",
        "GENRE",
        "NEWEST",
        "ONGOING",
        "NEWS",
        "ADDED",
        "REQUEST",
        "BROWSE",
        "DONATE",
        "RANDOM",
        "READ MANGA",
      ];
  const handleclick = () => {
    // setclick(!clicked);
    if (clicked === false) {
      setclick(true);
    } else if (clicked === true ) {
      setclick(false);
    }
    setSearchClick2(false);
    setSearchClick(false);
  };

  const setSearchBar = () => {
    // if (searchClick === false) {
    //   setSearchClick(true);
    // } else if ( searchClick === true && (searchOption == 0)) {
    //   setSearchClick(false);
    // }
    // setclick(false);
  };
  const setSearchBar2 = () => {
    setclick(false);
    if (searchClick2 === false) {
      setSearchClick2(true);
    } else if (searchClick2 === true) {
      setSearchClick2(false);
    }
  };
  const setLanguage = () => {
    // console.log("iiii");
    if (languageEnglish === false) {
      setToNotEnglish(true);
    } else if (languageEnglish === true) {
      setToNotEnglish(false);
    }
  };
  const handleDisplaysection = (e) => {
    setDisplaySection(e);
  };


  // const {data:hookData} = useFilter({status:"Currently Airing"})

  const {isError:reviewsIsError,isLoading:reviewsIsLoading,data:reviewsData,error:reviewsError}=TopAnimeReviewsData(4);
  const { isError:animeIsError, isLoading:animeIsLoading, data:animeData, error:animeError,refetch:refetchingBrowse } = AnimeData(paginationNumbers.currentPage);
  const { isError:animeGenreIsError, isLoading:animeGenreIsLoading, data:animeGenreData, error:animeGenreError } = AnimeGenre();
  const { isError:animeSearchIsError, isLoading:animeSearchIsLoading, data:animeSearchData, error:animeSearchError,refetch:refetchingSearch } = AnimeOnSearchData(searchOption);
  // const { isError, isLoading, data, error, refetch } = AnimeData(1);
// console.log(animeSearchData);


  useEffect(() => {
    refetchingSearch()
  
  
  }, [searchOption])
  


  const handleTabData=(i)=>{
    setTabState(tabsData[i])
}
const manageNextButton=()=>{
  if (paginationNumbers.currentPage < paginationNumbers.totalPages){
    setPaginationNumbers({...paginationNumbers, currentPage: paginationNumbers.currentPage + 1,displayedPagebegin:paginationNumbers.displayedPagebegin+1,displayedPageSecondButton:paginationNumbers.displayedPageSecondButton+1,displayedPageThirdButton:paginationNumbers.displayedPageThirdButton+1,displayedPageFourthButton:paginationNumbers.displayedPageFourthButton+1,displayedPageEnd:paginationNumbers.displayedPageEnd+1});
    // console.log(paginationNumbers.currentPage);
    refetchingBrowse();
  }
}

const managePreviousButton=()=>{
  if (paginationNumbers.currentPage >1 ){
    setPaginationNumbers({...paginationNumbers, currentPage: paginationNumbers.currentPage - 1,displayedPagebegin:paginationNumbers.displayedPagebegin-1,displayedPageSecondButton:paginationNumbers.displayedPageSecondButton-1,displayedPageThirdButton:paginationNumbers.displayedPageThirdButton-1,displayedPageFourthButton:paginationNumbers.displayedPageFourthButton-1,displayedPageEnd:paginationNumbers.displayedPageEnd-1,});
    console.log(paginationNumbers.currentPage);
    refetchingBrowse();
    
  }
}
const managePaginationOnClick=(e)=>{
  setPaginationNumbers({...paginationNumbers,currentPage:paginationNumbers.currentPage=e});
  refetchingBrowse()
}
const setToPaginationEnd=()=>{
  setPaginationNumbers({...paginationNumbers,currentPage:paginationNumbers.currentPage=paginationNumbers.totalPages ,displayedPagebegin:paginationNumbers.displayedPagebegin=(paginationNumbers.totalPages-4),displayedPageSecondButton:paginationNumbers.displayedPageSecondButton=(paginationNumbers.totalPages-3),displayedPageThirdButton:paginationNumbers.displayedPageThirdButton=(paginationNumbers.totalPages-2),displayedPageFourthButton:paginationNumbers.displayedPageFourthButton=(paginationNumbers.totalPages-1),displayedPageEnd:paginationNumbers.displayedPageEnd=paginationNumbers.totalPages,});
  refetchingBrowse();
}


   return (
    <>
      <div
        // onClick={changeAllStates}
        id="topDiv"
        className="grid grid-rows-auto  gap-12 h-screen text-white  bg-[#0b0a0b]"
      >
        <nav className="fixed bg-[#101010] z-40 w-full">
          <NavBarSection
            viewPortWidth2={viewPortWidth2}
            viewPortWidth={viewPortWidth}
            clicked={clicked}
            dropDownItems={dropDownItems}
            handleclick={handleclick}
            setSearchBar2={setSearchBar2}
            searchClick2={searchClick2}
            setSearchBar={setSearchBar}
            searchClick={searchClick}
            searchOption={searchOption}
            setSearchOption={setSearchOption}
            animeSearchData={animeSearchData && animeSearchData}
          />
        </nav>

        <div className="w-full mt-10 z-20"> 
        <BrowseMiddleSection animeBlocks={animeBlocks}viewPortWidth={viewPortWidth} handleTabData={handleTabData} tabState={tabState} reviewsData={reviewsData} tabsData={tabsData} animeData={animeData} filterDisplay={filterDisplay} manageFilterDisplay={manageFilterDisplay} animeGenreData={animeGenreData} filterList={filterList} setFilterList={setFilterList} filterDisplayArray={filterDisplayArray}
         setPaginationNumbers={setPaginationNumbers}  manageNextButton={manageNextButton} managePreviousButton={managePreviousButton} managePaginationOnClick={managePaginationOnClick} paginationNumbersCurrentPage={paginationNumbers.currentPage} setToPaginationEnd={setToPaginationEnd} paginationNumbersArray={paginationNumbersArray} setSearchOption={setSearchOption} searchOption={searchOption} animeSearchData={animeSearchData}
        />
        </div>

        <div className="     bottom-0 left-0 right-0 ">
          <FooterSection />
        </div>
      </div>
    </>
  );
};

export default WatchSection;
