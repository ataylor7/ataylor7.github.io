var modeButton = document.querySelector(".imgSpecial");
modeButton.addEventListener("click", changeMode);

var isLight = true;

function changeMode(){
    if(isLight){
    $(".imgSpecial").html(`<img src="darkEye.png" height="75%" width="75%">`);
    $('.lightMode').addClass('darkMode').removeClass('lightMode');
        isLight = false;
        return;
    }

    if(!isLight){
        $(".imgSpecial").html(`<img src="lightEye.png" height="75%" width="75%">`);
        $('.darkMode').addClass('lightMode').removeClass('darkMode');
        isLight = true;
        return;
        }


}