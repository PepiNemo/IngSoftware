

export async function Fetch (url, method, body=undefined){
  console.log({url, method, body})
  let options;
  if(body!= undefined){
      options = {
          method: method,
          credentials: 'include',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify(body)
        }
  }else{
      options = {
          method: method,
          credentials: 'include',
          headers: { 'Content-type': 'application/json' },
        }
  }
  
  const response = await fetch(url, options)
  console.log(response);
  const json = await response.json();
  const codigoResponse = response.status;


  let data
  if(codigoResponse == "200" && !json?.message){
    data=json;
    console.log({codigoResponse, data})
    return {codigoResponse, data}
  }

  let message;
  if(json?.message){
    message = json.message
  }else if(json?.error){
      message = json.error
  }
  console.log({codigoResponse, message})
  return {codigoResponse, message};
}