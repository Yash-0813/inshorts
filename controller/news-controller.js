import news from "../model/news-schema.js"


export const getNews = async (request, response) => {
    try {
        let data = await news.find({});
        return response.status(200).json(data);
    }
    catch (err) {
        response.status(500).json(err);
    }
}