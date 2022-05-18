import CryptoJS from "crypto-js";
import axios from 'axios';

export default function handler(req, res) {
  var method = "GET";
  var timestamp = Date.now() + '';
  var api_url = "/keywordstool";
  var secretKey =  "AQAAAACTwWiksamx0j/TodwvdqPp72q0SphCO+XNyfMK4/sBYg==";
  var hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, secretKey);
  hmac.update(timestamp + '.' + method + '.' + api_url);
  var hash = hmac.finalize();
  var sig = hash.toString(CryptoJS.enc.Base64);
  var resultAPI = null;
  
  
  let url = 'https://api.naver.com/keywordstool?hintKeywords='+ encodeURI(req.query.hintKeywords) + '&showDetail=1';
  const GetAPI = async() =>{
    const {
      hintKeywords
    }=req.body;
    const result = await axios.get(url,{
      params:{
        hintKeywords : hintKeywords,
       
      },
      headers: {
        'X-Timestamp': timestamp,
        'X-API-KEY' : "010000000093c168a4b1a9b1d23fd3a1dc2f76a3e9e58eb4e88c41867e289b6d6796df0d79",
        'X-API-SECRET' : "AQAAAACTwWiksamx0j/TodwvdqPp72q0SphCO+XNyfMK4/sBYg==",
        'X-CUSTOMER' : "2540614",
        'X-Signature': sig
      }
    }
  )
    .then(r => {
      console.log("success")
      resultAPI = r.data;
      console.log(resultAPI);
      res.status(200).json(resultAPI)
    })
    .catch((response) => { 
      // Failure
      console.log(sig,timestamp)
      console.log('Error!!')
    })
  }

  GetAPI();
}