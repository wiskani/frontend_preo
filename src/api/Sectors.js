export const getSectors = async (token)=>{
    const requestOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
    };
    try{
        const response = await fetch("/api/sector/list", requestOptions);
        if(!response.ok){
            return{error:`Request failed with status ${response.status}`}
        }else{
            const data = await response.json();
            return data;
        }
    } catch (error){
        return{ error : "Request failed"}
    }
};
