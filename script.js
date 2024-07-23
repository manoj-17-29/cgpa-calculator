 /* 

document.addEventListener('DOMContentLoaded', function() {
    var inputElement = document.getElementById("semcount");
  
    inputElement.addEventListener('input', function() {
      var value = inputElement.value;
      var len = Number(value)-1;
      for (var i = 1; i < len; i++) {
        var semesterDivs = document.getElementsByClassName('semester_container');
        semesterDivs[i].style.display = 'block';
        var resultElement = document.getElementById("semcountno");
        resultElement.textContent = "number change : "+ len;

      }
    });
  });


  

document.addEventListener('DOMContentLoaded', function() {
    var inputElement = document.getElementById("semcount");
  
    inputElement.addEventListener('input', function() {
      var value = inputElement.value;
      var len = Number(value)-1;
        var resultElement = document.getElementById("semcountno");
  resultElement.textContent = "number change : "+ len;
    });
  });
  */
  
  
  
  function cgpa(){


    //SEM 1
        var inputBoxes = document.getElementsByClassName("sem1");
        var subelement = document.getElementById("sub1");
        var sub = parseFloat(subelement.value);
        var sum = 0;
        var avg = 0;
      
        for (var i = 0; i < inputBoxes.length; i++) {
          var inputValue = parseFloat(inputBoxes[i].value);
      
          if (!isNaN(inputValue)) {
            sum += inputValue;
          }
           if (!isNaN(sub) && sub !== 0) {
            avg = sum / sub;
            var resultElement = document.getElementById("result");
          }
          
        }
      
        avg=Number(sum)/Number(sub);
        var resultElement = document.getElementById("result1");
        resultElement.textContent = Math.floor(avg * 10) / 10;
    
    
    
    
    
    //SEM 2
        var inputBoxes = document.getElementsByClassName("sem2");
        var subelement = document.getElementById("sub2");
        var sub = parseFloat(subelement.value);
        var sum = 0;
        var avg = 0;
      
        for (var i = 0; i < inputBoxes.length; i++) {
          var inputValue = parseFloat(inputBoxes[i].value);
      
          if (!isNaN(inputValue)) {
            sum += inputValue;
          }
        if (!isNaN(sub) && sub !== 0) {
            avg = sum / sub;
            var resultElement = document.getElementById("result2");
          }
          
        }
      
        avg=Number(sum)/Number(sub);
        var resultElement = document.getElementById("result2");
        resultElement.textContent = Math.floor(avg * 10) / 10;
    
    
    
    
        
    //SEM 3
    var inputBoxes = document.getElementsByClassName("sem3");
    var subelement = document.getElementById("sub3");
    var sub = parseFloat(subelement.value);
    var sum = 0;
    var avg = 0;
    
    for (var i = 0; i < inputBoxes.length; i++) {
      var inputValue = parseFloat(inputBoxes[i].value);
    
      if (!isNaN(inputValue)) {
        sum += inputValue;
      }
      if (!isNaN(sub) && sub !== 0) {
        avg = sum / sub;
        var resultElement = document.getElementById("result3");
      }
      
    }
    
    avg=Number(sum)/Number(sub);
    var resultElement = document.getElementById("result3");
    resultElement.textContent = Math.floor(avg * 10) / 10;
    
    
    
    
    
    //SEM 4
    var inputBoxes = document.getElementsByClassName("sem4");
    var subelement = document.getElementById("sub4");
    var sub = parseFloat(subelement.value);
    var sum = 0;
    var avg = 0;
    
    for (var i = 0; i < inputBoxes.length; i++) {
      var inputValue = parseFloat(inputBoxes[i].value);
    
      if (!isNaN(inputValue)) {
        sum += inputValue;
      }
     if (!isNaN(sub) && sub !== 0) {
        avg = sum / sub;
        var resultElement = document.getElementById("result4");
      }
      
    }
    
    avg=Number(sum)/Number(sub);
    var resultElement = document.getElementById("result4");
    resultElement.textContent = Math.floor(avg * 10) / 10;
    
    
    
    
    
    //SEM 5
    var inputBoxes = document.getElementsByClassName("sem5");
    var subelement = document.getElementById("sub5");
    var sub = parseFloat(subelement.value);
    var sum = 0;
    var avg = 0;
    
    for (var i = 0; i < inputBoxes.length; i++) {
      var inputValue = parseFloat(inputBoxes[i].value);
    
      if (!isNaN(inputValue)) {
        sum += inputValue;
      }
      if (!isNaN(sub) && sub !== 0) {
        avg = sum / sub;
        var resultElement = document.getElementById("result5");
      }
      
    }
    
    avg=Number(sum)/Number(sub);
    var resultElement = document.getElementById("result5");
    resultElement.textContent = Math.floor(avg * 10) / 10;
    
    
    
    
    //SEM 6
    var inputBoxes = document.getElementsByClassName("sem6");
    var subelement = document.getElementById("sub6");
    var sub = parseFloat(subelement.value);
    var sum = 0;
    var avg = 0;
    
    for (var i = 0; i < inputBoxes.length; i++) {
      var inputValue = parseFloat(inputBoxes[i].value);
    
      if (!isNaN(inputValue)) {
        sum += inputValue;
      }
      if (!isNaN(sub) && sub !== 0) {
        avg = sum / sub;
        var resultElement = document.getElementById("result6");
      }
      
    }
    
    avg=Number(sum)/Number(sub);
    var resultElement = document.getElementById("result6");
    resultElement.textContent = Math.floor(avg * 10) / 10;
    
    
    
    
    //SEM 7
    var inputBoxes = document.getElementsByClassName("sem7");
    var subelement = document.getElementById("sub7");
    var sub = parseFloat(subelement.value);
    var sum = 0;
    var avg = 0;
    
    for (var i = 0; i < inputBoxes.length; i++) {
      var inputValue = parseFloat(inputBoxes[i].value);
    
      if (!isNaN(inputValue)) {
        sum += inputValue;
      }
      if (!isNaN(sub) && sub !== 0) {
        avg = sum / sub;
        var resultElement = document.getElementById("result7");
      }
      
    }
    
    avg=Number(sum)/Number(sub);
    var resultElement = document.getElementById("result7");
    resultElement.textContent = Math.floor(avg * 10) / 10;
    
    
    
    
    //SEM 8
    var inputBoxes = document.getElementsByClassName("sem8");
    var subelement = document.getElementById("sub8");
    var sub = parseFloat(subelement.value);
    var sum = 0;
    var avg = 0;
    
    for (var i = 0; i < inputBoxes.length; i++) {
      var inputValue = parseFloat(inputBoxes[i].value);
    
      if (!isNaN(inputValue)) {
        sum += inputValue;
      }
      if (!isNaN(sub) && sub !== 0) {
        avg = sum / sub;
        var resultElement = document.getElementById("result8");
      }
      
    }
    
    avg=Number(sum)/Number(sub);
    var resultElement = document.getElementById("result8");
    resultElement.textContent = Math.floor(avg * 10) / 10;
    
    
    
    
    
    
    // CGPA
        var resultboxs = document.getElementsByClassName("result");
        var count = document.getElementById("semcount");
        var semcount = parseFloat(count.value);
        var avgsum = 0;
    
      
        for (var i = 0; i < semcount; i++) {
          var value = parseFloat(resultboxs[i].textContent);
      
          if (!isNaN(value)) {
            avgsum += value;
            count++;
          }
        }
      
        var average = avgsum / semcount;
        var averageElement = document.getElementById("cgpa");
        averageElement.textContent = Math.floor(average * 100) / 100;

        var percentage = document.getElementById("percentage");
        percentage.textContent = Math.floor((average * 10 )*100) /100 + " %";
    
      }











      function onlycgpa(){

        var inputBoxes = document.getElementsByClassName("gpa");
        var subelement = document.getElementById("semgpacount");
        var sub = parseFloat(subelement.value);
        var sum = 0;
        var avg = 0;
        
        for (var i = 0; i < inputBoxes.length; i++) {
          var inputValue = parseFloat(inputBoxes[i].value);
        
          if (!isNaN(inputValue)) {
            sum += inputValue;
          }
          if (!isNaN(sub) && sub !== 0) {
            avg = sum / sub;
            var resultElement = document.getElementById("onlycgpa");
          }
          
        }
        
        avg=Number(sum)/Number(sub);
        var resultElement = document.getElementById("onlycgpa");
        resultElement.textContent = Math.floor(avg * 100) / 100;
        
        
        var cgpapercentage = document.getElementById("cgpapercentage");
        cgpapercentage.textContent = Math.floor((avg * 10 )*10) /10 + " %";



      }





      function showonlycgpa(){

        var overall = document.getElementById("overall").style.display="none";
        var cgpaonly = document.getElementById("cgpaonly").style.display="block";


      }


      function showoverallcgpa(){

        var overall = document.getElementById("overall").style.display="block";
        var cgpaonly = document.getElementById("cgpaonly").style.display="none";

      }