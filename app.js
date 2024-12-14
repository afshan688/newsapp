let brand =document.getElementById('brand');
let model =document.getElementById('model');
let allBrands =document.getElementById(mobile);

for(var i =0; i <allBrands.length; i++  ){
    brand.innerHTML += `option value= ${allBrands[i]} >${allBrands[i]}</option>`;

}
function selectBrand(){
    let selectBrand = brand.value;
    let allModels = Object.keys(mobile[selectBrand]);

    for(let i=0; i< allModels.length; i++){
        model.innerHTML += `<option value= ${allModels} > ${allModels}</option>`;
    }

}
function getFeatures(){
    let modelValue =model.value;
    let brandValue = brand.value;
    let cardDiv = document.getElementById('card-section');
    let getData = mobile[brandValue][modelValue];

    cardDiv.innerHTML +=`div class="card text-bg-secondary mb-3" style="max-width:18rem;">
    <div class= "card-header">${modelValue}</div>
    <div class="card-body">
    <h5 class= "card-tittle">${getData.processor}</h5>
    <p class= "card-text"`
}