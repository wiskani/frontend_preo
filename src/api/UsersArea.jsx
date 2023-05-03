export const GetUsersArea = async (id, token) => {
  let data = []
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };

  const response = await fetch(`/api/sector_users/${id}`, requestOptions);
  if(!response.ok){
    console.log('error')
  }else{
    const users = await response.json();
    data= users;
  }

	return data 
}


export const PostUserArea = async (id, token, relationship)=>{
  const requestOptions ={
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer "+ token,
    },
    body: JSON.stringify(relationship),
  };
  const response = await fetch(`/api/sector_users/${id}`, requestOptions);
  if (!response.ok){
    console.log("error");
  }
}

