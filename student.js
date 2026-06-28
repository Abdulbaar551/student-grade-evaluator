function checkGrade(){
        //let math = Number(Math.value);
        //let english = Number(english.value);
        //let physics = Number(physics.value);
        //let chemistry = Number(chemistry.value);

        let math = document.getElementById("math");
        let english = document.getElementById("english");
        let physics = document.getElementById("physics");
        let chemistry = document.getElementById("chemistry");



        if(Math.value == '' || english.value == '' || physics.value == '' || chemistry.value == ''){
                 display.textContent = "fill the fields!";
                return;
        }


        else if(math.value < 0 || math.value > 100 || english.value < 0 || english.value > 100 || physics.value < 0 || physics.value > 100 || chemistry.value < 0 || chemistry.value > 100){
                display.textContent = "Score must be 0-100";
                return;
        }


        else{
        let total = Number(math.value) + Number(english.value) + Number(physics.value) + Number(chemistry.value);
        let avg = total / 4;

         if(avg >= 70){
                display.textContent = "Grade: A - Excellent";
        }
        else if(avg >= 60){
                display.textContent = "Grade: B - Very Good";
        }
        else if(avg >= 50){
                display.textContent = "Grade: C - Good";
        }
        else if(avg >= 45){
                display.textContent = "Grade: D - Pass";
        }
        else{
                display.textContent = "Grade: F - Fail";
        }
  }
}