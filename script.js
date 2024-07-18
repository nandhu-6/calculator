
function calculate(symbol){
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    let result;
    
    
    
        if (symbol==="+"){
            result = num1 + num2;}
        else if(symbol==="-"){
            result= num1 - num2;}
        else if (symbol === "*"){
            result = num1 * num2;}
        else {
            if(num2 === 0){
                document.getElementById("division").disabled = true;
                result = "second number can't be 0";
            }
            else{
           result = num1 / num2;}}
    
    document.getElementById("result").value = result;
    }
    



    //distance
    function distanceCalculate(){

        let input = document.getElementById("disNum").value;
        let fromDistance = document.getElementById("fromDistance").value;
        let toDistance = document.getElementById("toDistance").value;

        let distanceResult;

        if (fromDistance == "inch" && toDistance =="centimetre"){
            distanceResult = input * 2.54;
        }
        else if(fromDistance == "inch" && toDistance == "metre"){
            distanceResult = input * 0.0254;
        }
        else if(fromDistance == "inch" && toDistance == "kilometre"){
            distanceResult = input * 0.0000254;
        }
        else if(fromDistance == "centimetre" && toDistance == "inch"){
            distanceResult = input / 2.54;
        }
        else if(fromDistance == "centimetre" && toDistance == "metre"){
            distanceResult = input / 100;
        }
        else if(fromDistance == "centimetre" && toDistance == "kilometre"){
            distanceResult = input / 100000;
        }
        else if(fromDistance == "metre" && toDistance == "inch"){
            distanceResult = input / 0.0254;
        }
        else if(fromDistance == "metre" && toDistance == "centimetre"){
            distanceResult = input * 100;
        }
        else if(fromDistance == "metre" && toDistance == "kilometre"){
            distanceResult = input / 1000;
        }
        else if(fromDistance == "kilometre" && toDistance == "inch"){
            distanceResult = input / 0.0000254;
        }
        else if(fromDistance == "kilometre" && toDistance == "centimetre"){
            distanceResult = input * 100000;
        }
        else if(fromDistance == "kilometre" && toDistance == "metre"){
            distanceResult = input * 1000;
        }
        else{
            distanceResult = input;
        }

        document.getElementById("distanceResult").value = distanceResult;

    }
    

    //weight
    function weightCalculate(){

        let input = document.getElementById("weiNum").value;
        let fromWeight = document.getElementById("fromWeight").value;
        let toWeight = document.getElementById("toWeight").value;

        let weightResult;

        if (fromWeight == "milligram" && toWeight =="gram"){
            weightResult = input / 1000;
        }
        else if (fromWeight == "milligram" && toWeight =="kilogram"){
            weightResult = input / 1000000;
        }
        else if (fromWeight == "milligram" && toWeight =="ton"){
            weightResult = input / 1000000000;
        }
        else if (fromWeight == "gram" && toWeight =="milligram"){
            weightResult = input * 1000;
        }
        else if (fromWeight == "gram" && toWeight =="kilogram"){
            weightResult = input / 1000;
        }
        else if (fromWeight == "gram" && toWeight =="ton"){
            weightResult = input / 1000000;
        }
        else if (fromWeight == "kilogram" && toWeight =="milligram"){
            weightResult = input * 1000000;
        }
        else if (fromWeight == "kilogram" && toWeight =="gram"){
            weightResult = input / 1000;
        }
        else if (fromWeight == "kilogram" && toWeight =="ton"){
            weightResult = input / 1000;
        }
        else if (fromWeight == "ton" && toWeight =="milligram"){
            weightResult = input * 1000000000;
        }
        else if (fromWeight == "ton" && toWeight =="gram"){
            weightResult = input * 1000000;
        }
        else if (fromWeight == "ton" && toWeight =="kilogram"){
            weightResult = input * 1000;
        }
        else{
            weightResult = input;
        }

    document.getElementById("weightResult").value = weightResult;
    
    }
    
    