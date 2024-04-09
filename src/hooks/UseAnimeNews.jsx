import {useQuery} from "@tanstack/react-query"
import { getAnime, getAnimeNews} from "../config/axios"

const AnimeNewsData=(newsId)=>{
    return useQuery(
        {
            queryKey:['product-data',newsId],
            queryFn:()=>getAnimeNews(newsId),
        
        }
    )
}
export default AnimeNewsData;