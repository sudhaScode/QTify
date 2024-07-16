
export const truncate =(string, maxLength)=>{

    if(string.length >maxLength){
        return string.substring(0, maxLength-3)+ "...";
    }

}   