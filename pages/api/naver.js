import axios from 'axios';

export default function handler(req,res){
  const postAPI=async()=>{
    try {
      const{
        startDate,
        endDate,
        timeUnit,
        device,
        gender,
        keywordGroups,
      }=req.body;
        const request_body = {
          startDate: startDate,
          endDate: endDate,
          timeUnit: timeUnit,
          device: device === "all" ? "" : device,
          gender: gender === "all" ? "" : gender,
          keywordGroups: keywordGroups,
        };
        console.log(req.body);
        const url = "https://openapi.naver.com/v1/datalab/search";
        const headers={ 
          'Content-type': 'application/json', 
          'Accept': 'application/json',
          'X-Naver-Client-Id' :  "PKjTmaEjasvkR4a2qbEy",
          'X-Naver-Client-Secret' : "zcCTC5iA8F",
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
        } 
        const result = await axios.post(url, request_body, {
            headers: headers,
          });
        
        
        console.log(result.data);
        return res.status(200).json(result.data);
        }catch(error){
         console.log(error);
        }
}


 postAPI();

}