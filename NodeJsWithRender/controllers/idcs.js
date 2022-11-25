import https from "https"
import { postData } from "../utils.js";
export const idcsValidateToken = async (req, resp) => {

    if (!process.env.iserv) {
        throw new Error ("Environment variable iserv needs to be defined");
    }

    if (!process.env.iuser || !process.env.ipass) {
        throw new Error ("Environment variable iuser or ipass needs to be defined");
    }

    if (!req.headers['authorization']) {
        throw new Error ("Authorization header is not passed in the request");
    } else {
        //console.log(req.headers['authorization']);
    }

    
    const IDCS_SERVER = process.env.iserv ;
    const IDCS_PORT = process.env.iservport || 443;
    const IDCS_VALIDATE_URL = "/oauth2/v1/introspect";
    const USERNAME = process.env.iuser;
    const PASS = process.env.ipass;
    let incoming_auth =  req.headers['authorization']; 
    let tokenStr = incoming_auth.replace("Bearer", "");
    tokenStr = tokenStr.trim();
    let authStringEncoded = Buffer.from(USERNAME+":"+PASS).toString("base64");
    let tokenBody = {
        token : tokenStr
    }
    let url = "https://" + IDCS_SERVER + IDCS_VALIDATE_URL;
    console.log(url);
    try {
    let output = await postData (url, tokenBody, "Basic " + authStringEncoded, "application/x-www-form-urlencoded");
    console.log("OUTPUT from rest api");
    console.log(output);
    resp.status(200).json(output.data);

    } catch (error ) {
        console.log("got an error in calling request::")
        console.log(error);
        resp.status(500).json(error.message);
    }

};

