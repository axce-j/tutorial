import {useQuery} from "@tanstack/react-query"
import { getRecentAnimeRecommendations } from "../config/axios"

const RecentAnimeRecommendations=(homePageId)=>{
    return useQuery(
        {
            queryKey:['product-data'],
            queryFn:()=>getRecentAnimeRecommendations(homePageId),
        }
    )
}
export default RecentAnimeRecommendations;