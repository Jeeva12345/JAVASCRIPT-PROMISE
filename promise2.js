const Data=(data)=>{

    return new Promise((resolve, reject) => {
  
      fetch(data).then(res=>{
        console.log(res)
        if(!res.ok){
          throw new Error(`error occurs${res.status}`)
        }
        return res.json();     
      })
      
      .then((data)=>resolve(data))
      .catch((error)=>reject(error))
      
    })

}

function displaydata(x){
    console.log(x)
    let y= x.map((c)=>{
        return (document.write(`
        <div>${c.id}
        <img src=${c.url} height=${c.height} width=${c.width}/>
        </div>
        `))
    })
    return y
}


const Api1 = "https://api.thecatapi.com/v1/images/search?limit=10";

Data(Api1).then((x)=>{displaydata(x)}).catch((error)=>console.log("error fetching"+error))