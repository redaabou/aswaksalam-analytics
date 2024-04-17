const arrAllMagazins = JSON.parse(localStorage.getItem("magazins"))
console.log(arrAllMagazins)

let pageConvert = false
const row = document.querySelector(".row")

function convertPage (){
    pageConvert =!pageConvert
    
     if(pageConvert== true){
        
        row.innerHTML = arrAllMagazins.map(item => `
<div class="col-12 col-lg-4  d-flex justify-content-center justify-content-md-start allCard align-items-center "   } >
<div class="card mb-4 d-flex flex-row cardHorizontal"  style="width: 100%;">
    <img class="card-img-top imageHorizontal" src="../img/Aswak-Assalam-Emploi-Recrutement-Dreamjob.ma_.jpg" alt="Card image cap">
    <div class=" card-body d-flex justify-content-center flex-column align-items-center">
      <h5 class="card-title">${item.name}</h5>
      <div>
        <i class="fa-solid fa-location-dot"></i> <strong> ${item.ville}, </strong><span class="card-text">${item.quartier}</span>                
      </div>
  </div>
</div>
</div>
`).join("")
}else{
        console.log(pageConvert)
        row.innerHTML = arrAllMagazins.map(item => `
    <div class="col d-flex justify-content-center justify-content-md-start "    } >
    <div class="card mb-4 allCardV " style="width: 18rem;">
        <img class="card-img-top imageVeritical" src="../img/Aswak-Assalam-Emploi-Recrutement-Dreamjob.ma_.jpg" alt="Card image cap">
        <div class="card-body bodyCard">
          <h5 class="card-title">${item.name}</h5>
          <div>
            <i class="fa-solid fa-location-dot"></i> <strong> ${item.ville}, </strong><span class="card-text">${item.quartier}</span>                
          </div>
      </div>
    </div>
    </div>
    `).join("")
           
    }
}

row.innerHTML = arrAllMagazins.map(item => `
<div class="col d-flex justify-content-center justify-content-md-start " )   } >
<div class="card mb-4 allCardV " style="width: 18rem;" onClick = go("${item.name}")>
    <img class="card-img-top imageVeritical" src="../img/Aswak-Assalam-Emploi-Recrutement-Dreamjob.ma_.jpg" alt="Card image cap">
    <div class="card-body bodyCard">
      <h5 class="card-title">${item.name}</h5>
      <div>
        <i class="fa-solid fa-location-dot"></i> <strong> ${item.ville}, </strong><span class="card-text">${item.quartier}</span>                
      </div>
  </div>
</div>
</div>
`).join("")

const go = (x) =>{
    
   const getOneMagazin = arrAllMagazins.find(item => item.name == x)
   localStorage.setItem("getOneMagazin" , JSON.stringify(getOneMagazin))
}
