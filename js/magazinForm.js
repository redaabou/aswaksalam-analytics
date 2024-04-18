const nameMagazin = document.querySelector(".name")
const ville = document.querySelector(".ville")
const quartier = document.querySelector(".quartier")
const date = document.querySelector(".date")
const valid = document.querySelector(".btn")
 nameMagazin.addEventListener("change" , changeNameMagazin)
 ville.addEventListener("change" , changeVilleMagazin)
 quartier.addEventListener("change" , changeQuartieMagazin)
 date.addEventListener("change" , changeDateMagazin)
 let nameOneMagazin="";
 let villeMagazin ="";
 let quartierMagazin ="";
 let dateCreation="";
 let magazinArray = [];
 

function changeNameMagazin (e){
  nameOneMagazin = e.target.value
}
function changeVilleMagazin(e){
   villeMagazin = e.target.value
}
function changeQuartieMagazin(e){
 quartierMagazin = e.target.value
}
 function changeDateMagazin(e){
   dateCreation = e.target.value
 }


 valid.addEventListener("click" , valideMagazin)
 function valideMagazin(){
   let magazinObject = {
      name :nameOneMagazin,
      ville : villeMagazin,
      quartier : quartierMagazin,
      date : dateCreation
   }
  const getMagazins = JSON.parse(localStorage.getItem("magazins"))
       let magazinErr;
      if(getMagazins){
      magazinErr =  getMagazins.find(item => item.name == nameOneMagazin)
      }
      if(magazinErr){
        alert("name already exist")
        return;
      }
    if(getMagazins){
         
        magazinArray = [...getMagazins , magazinObject]
    }else{
        magazinArray.push(magazinObject)
    }
    console.log(magazinArray)
    localStorage.setItem("magazins", JSON.stringify(magazinArray))
    window.location.href = "magazins.html"
}