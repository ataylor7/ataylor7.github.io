
var breedBtn = document.querySelector(".breedBtn");
var breedBox = document.querySelector(".breeds");
breedBtn.addEventListener("click", getBreeds);
var submitButton = document.querySelector(".submitBtn");
submitButton.addEventListener("click", getBreedInfo);
var resetBtn = document.querySelector(".resetBtn");
resetBtn.addEventListener("click", resetPage);

var breedShown = false;

//get a list of the breeds for raw use, and store the objects so we dont have to make more calls
var breedNames = []
var breedObj = []


var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.thecatapi.com/v1/breeds?attach_breed=0",
  "method": "GET",
  "headers": {
    "x-api-key": "68f08ffc-bbbd-4ada-8b62-33b8effd75d0"
  }
}

$.ajax(settings).done(function (response) {
  for(k = 0; k < response.length; k++){
    breedNames.push(response[k].name)
    breedObj.push(response[k])
  }

});

//set delay to ensure our ajaz request has been fulfilled, v small scale delay
setTimeout(dropDownInit, 500)

//crreates a var that has all of our option value html additions in it, and adds it to our dataList
function dropDownInit(){
var options = "";

for (var i = 0; i < breedNames.length; i++) {
  options += '<option value="' + breedNames[i] + '" />';
}

document.getElementById('breedDataList').innerHTML = options;
}


function getBreedInfo () {
  var input = document.getElementById('chosenBreed')
  var chosenBreed = input.value
  var index = 0
  for(i = 0; i < breedNames.length; i++){
    if(breedNames[i] == chosenBreed){
      index = i
    }
  }
  //we already have the objects, no need for further requests, just need to display whatever aspects i want to show

  var getName = document.querySelector(".name");
  $(getName).append('Breed Name: ' + breedObj[index].name)

  var getTemp = document.querySelector(".temper");
  $(getTemp).append('Temperament?: ' + breedObj[index].temperament)

  var getHair = document.querySelector(".hairless");
  var isHair = true
  if(breedObj[index].hairless == 0){
    isHair = false;
  }
  $(getHair).append('Hairless?: ' + isHair)

  var getHypo = document.querySelector(".hypoallergenic");
  var isHypo = true
  if(breedObj[index].hypoallergenic == 0){
    isHypo = false;
  }
  $(getHypo).append('Hypoallergenic?: ' + isHypo)


  var isVoc = true
  if(breedObj[index].vocalisation == 0){
    isVoc = false;
  }
  var getVoc = document.querySelector(".vocal");
  $(getVoc).append('Vocal?: ' + isVoc)

}


//function for making/taking away the list
function getBreeds(){

if(!breedShown){

    $('<ul>', {class:"breedList"} ).appendTo(breedBox);

    var breedList = document.querySelector(".breedList");
    
    for(i = 0; i < breedNames.length; i+=5){
       // var breedList = document.querySelector(".breeds");
       $('<li>', {id:"X"+i } ).appendTo(breedList);
        var currItem = document.getElementById(`X${i}`)
        for(j = 0; j < 5; j++){
          if(breedNames[i+j] == null){

          } else {
        $(currItem).append(`${breedNames[i+j]}`+ ", ")
        }
      }
    }
    breedShown = true;
    $(breedBtn).html("Rescind List")
    return;

  }





if(breedShown){
    var breedList = document.querySelector(".breedList");
    $(breedList).remove()
    breedShown = false;
    $(breedBtn).html("Generate List")
    return;

}
}

function resetPage(){
  location.reload();
}


