import {add_action_type, welfare_type, news_type} from './actionType';
import API from '../services/API';
import Fetch from '../services/Fetch';

const add_action = ()=>({
    type: add_action_type
})

// const fetch_welfare_signup = ()=>{
//     return (dispatch) =>{
//         fetch(API.welfare.signUp, {
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 "baseInfo": {
//                     "versionCode": 356,
//                     "sign": "fbb4636f6f6f43467543609abacd8bc9",
//                     "deviceCode": "fae64ac10908e06e1e53d52cfd9f2893",
//                     "userId": "13365512366",
//                     "platform": 2
//                 }
//             })
//         })
//         .then((response) => response.json())
//         .then((result) => {
//                 dispatch({
//                     type:welfare_type.signInfo,
//                     signData:result
//                 })
//             })
//             .catch((error) => {
//                 console.log("error = " + error)
//             })
//     }
// }

const fetch_welfare_signup = ()=>{
    let params = {
        "baseInfo": {
            "versionCode": 356,
            "sign": "fbb4636f6f6f43467543609abacd8bc9",
            "deviceCode": "fae64ac10908e06e1e53d52cfd9f2893",
            "userId": "13818231145",
            "platform": 2
        }
    };
    return (dispatch)=>{
        let callback = (result)=>dispatch({
            type:welfare_type.signInfo,
            signData: result      
        })
        Fetch.post(API.welfare.signUp, params, callback);
    }
}


const fetch_welfare_pollen = ()=>{
    let params = {
        "baseInfo": {
            "versionCode": 356,
            "sign": "fbb4636f6f6f43467543609abacd8bc9",
            "deviceCode": "fae64ac10908e06e1e53d52cfd9f2893",
            "userId": "13818231145",
            "platform": 2
        },
        "cityName": "上海市"
    };
    return (dispatch)=>{
        let callback = (result)=>dispatch({
            type:welfare_type.pollen,
            pollen: result      
        })
        Fetch.post(API.welfare.pollen, params, callback);
    }
}

const fetch_news_banner = ()=>{
    let params = {
        "baseInfo": {
            "versionCode": 356,
            "sign": "29180cc1f656ae3ee978c78076f11fc0",
            "deviceCode": "81b31b20154eac425396cdcc0f1f0d76",
            "userId": "13818231145",
            "platform": 2
        },
        "cityName": "上海",
        "channelKey": "youliao"
    };
    return (dispatch)=>{
        let callback = (result)=>dispatch({
            type:news_type.banner,
            bannerList: result.data      
        })
        Fetch.post(API.news.banner, params, callback);
    }
}

export {add_action, fetch_welfare_signup, fetch_welfare_pollen, fetch_news_banner};