
let submiteBtn = document.getElementById("btn");

submiteBtn.addEventListener("click", function() {

    let inputWeight = document.getElementById("input-weight").value;
    let inputHeight = document.getElementById("input-height").value;
    let number = document.getElementById("number");
    

        let resultMath =  inputWeight / (inputHeight * inputHeight);
        number.innerHTML = resultMath;
    
        let result = document.getElementById("result");
        // if(resultMath < 18 ){
        //     result.innerHTML = "thinness.";
        // }else if(resultMath >= 18 && resultMath <= 24.9){
        //     result.innerHTML ="Perfect weight.";
        // }else if(resultMath >= 25 && resultMath <= 29.9){
        //     result.innerHTML ="Overweight.";
        // }else if(resultMath >= 30 && resultMath <= 34.9){
        //     result.innerHTML ="First degree obesity.";
        // }else if(resultMath >= 35 && resultMath <= 39.9){
        //     result.innerHTML ="Second degree obesity.";
        // }else{
        //     result.innerHTML ="Excessive obesity.";
        // }
    

    switch (true) {
        case (resultMath < 18):
            result.innerHTML ="thinness.";
            break;
        case (resultMath >= 18 && resultMath <= 24.9):
            result.innerHTML ="Perfect weight.";
            break;
        case (resultMath >= 25 && resultMath <= 29.9):
            result.innerHTML ="Overweight.";
            break;
        case (resultMath >= 30 && resultMath <= 34.9):
            result.innerHTML ="First degree obesity.";
            break;
        case (resultMath >= 35 && resultMath <= 39.9):
            result.innerHTML ="Second degree obesity.";
            break;
        default:
            result.innerHTML ="Excessive obesity.";
    }
    
})  

