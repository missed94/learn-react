import {myPostsType} from "../../../types/types";

const validContactsObjCreated = (responseData) => {
    let message = responseData.length > 0 ? responseData[0] : "Some error"
    let newArray = responseData[0].split(' ')
    let newString = newArray[newArray.length - 1]
    let interMedStr = newString.substr(11)
    let mainString = interMedStr.toLowerCase().substr(0,interMedStr.length - 1)
    return  ({
        [mainString]: message
    })
}

export default validContactsObjCreated