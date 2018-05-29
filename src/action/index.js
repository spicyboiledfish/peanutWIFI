import {add_action_type, fetch_welfare_type} from './actionType';
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
//                 // console.log('嘻嘻小睿',result);
//                 dispatch({
//                     type:fetch_welfare_type,
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
            "userId": "13365512366",
            "platform": 2
        }
    };
    return (dispatch)=>{
        let callback = (result)=>dispatch({
            type:fetch_welfare_type,
            signData: result      
        })
        Fetch.post(API.welfare.signUp, params, callback);
    }
}

export {add_action, fetch_welfare_signup};