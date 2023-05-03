export const GetAspectsArea = async (id, token) => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };
  
  try {
    const response = await fetch(`/api/sector_aspects/${id}`, requestOptions);
    if (!response.ok) {
      return { error: `Request failed with status: ${response.status}` };
    } else {
      const aspects = await response.json();
      return  aspects ;
    }
  } catch (error) {
    return { error: "Request failed" };
  }
};


export const PostAspectArea = async (id, token, relationship)=>{
  const requestOptions ={
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer "+ token,
    },
    body: JSON.stringify(relationship),
  };
  const response = await fetch(`/api/sector_aspects/${id}`, requestOptions);
  if (!response.ok){
    console.log("error");
  }
}

