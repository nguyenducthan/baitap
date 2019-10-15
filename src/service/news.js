import {api_url, api_token, country, category} from '../config/config'

export async function getArticles(category = 'business') {

    try {
        if(category == 'top') {
            category = '';
        }
        let url = `${api_url}?country=${country}&category=${category}`;
        console.log(url);
        let articles = await fetch(url, {
            headers: {
                'X-API-KEY': api_token
            }
        });

        let result = await articles.json();
        articles = null;

        return result.articles;
    }
    catch(error) {
        throw error;
    }
}