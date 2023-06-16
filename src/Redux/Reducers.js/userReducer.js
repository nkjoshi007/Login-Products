const Data = JSON.parse(localStorage.getItem("user"))
const userData={
   Data
}
export const Logincheck=(state=userData,action)=>{
    switch(action.type){
        case "Login_data":
           if(Data.fname===action.userName){
            return
           }
    }
}