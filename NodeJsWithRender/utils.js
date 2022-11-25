import axios from 'axios';
import querystring from 'querystring'

export const getData = async () => {
    try {
	const response = await axios.get(
		`https://famous-quotes4.p.rapidapi.com/random`
	);
    return response.data;
    } catch (error) {
        throw new Error ("Error in calling GET :: " + error.message);
    }
};

export const postData = async (url, postBody, authString , mimeType = "application/json") => {
    //"application/x-www-form-urlencoded",
    let postBodyStr = "";
    switch ( mimeType) {
        case  "application/x-www-form-urlencoded" : {
            postBodyStr =  querystring.stringify(postBody);
            break;
        }
        case "application/json" : {
            postBodyStr =  JSON.stringify(postBody, null, 2);
            break;
        }
        default : {
            postBodyStr = "";
        }
    }
    try {
	let response = await axios.post(
		url,
        postBodyStr,
        {
            headers: { 
              "Content-Type": mimeType,
              "Authorization" : authString
            }
        }
	);
    return response ;
    } catch (error) {
        console.error(error);
        throw new Error ("Error in calling GET :: " + error.message);
    }
};