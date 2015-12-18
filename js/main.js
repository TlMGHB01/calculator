var nums = [];
var operators = [];
var newNumber = false;

function addOperators(operation){
    operators.push(operation);
    nums.push($("#N1").val());
    newNumber = true;
}

function numberSelector(num) {
    if(newNumber){
        document.getElementById("N1").value = '';
        newNumber = false;
    }
    document.getElementById("N1").value = document.getElementById("N1").value + num;
}

function equals(){
    var ans = 0;
   var opt = 0;
    nums.push($("#N1").val());


    for(var x = 0; x < operators.length; x++) {
        if(operators[x] === 'multiply' || operators[x] === 'divide'){
            //console.log(nums[x]);
            //console.log(nums[x + 1]);
            if(operators[x] === 'multiply') {
                console.log("**BEFORE MULTIPLY**");
                console.log('NUMS: ' + nums);
                console.log('OPERATORS: ' + operators);
                var new_ans = nums[x] * nums[x + 1];
                nums[x] = new_ans;
                nums.splice(x+1, 1);
                operators.splice(x, 1);
                console.log("**AFTER MULTIPLY**");
                console.log('NUMS: ' + nums);
                console.log('OPERATORS: ' + operators);
                //console.log(nums[x] * nums[x + 1]);
            } else if (operators[x] === 'divide') {
                console.log("**BEFORE DIVIDE**");
                console.log('NUMS: ' + nums);
                console.log('OPERATORS: ' + operators);
                var new_ans = nums[x] / nums[x + 1];
                nums[x] = new_ans;
                nums.splice(x+1, 1);
                operators.splice(x, 1);
                console.log("**AFTER DIVIDE**");
                console.log('NUMS: ' + nums);
                console.log('OPERATORS: ' + operators);
                //console.log(nums[x] / nums[x + 1]);
            }
        }
    }

    for(var x = 0; x <= nums.length; x++) {
        if(x === 0) {
            ans = parseFloat(nums[x]);
        }   else if (operators[x-1] === 'add') {
                ans = ans + parseFloat(nums[x]);
        }   else if (operators[x-1] === 'subtract') {
                ans = ans - parseFloat(nums[x]);
            }
            //else if (operators[x-1] === 'multiply') {
            //    ans = ans * parseFloat(nums[x]);
            //}
            //else if (operators[x-1] === 'divide') {
            //    ans = ans / parseFloat(nums[x]);
            //}
        }
        $('#N1').val(ans);
    operators = [];
    nums = [];
    newNumber = false;
    //console.log("HERE IS NUMS");
    //console.log(nums);
}

function cleer() {
    $("#ans").innerHTML = " ";
    operators = [];
    nums = [];
    newNumber = false;
}



//    var num1 = parseFloat(firstnumber);
//    var num2 = parseFloat(secondnumber);
//
//    if (operators === 'add'){
//        $('#N1').val(newNumber);
//    }
//    else if (operators === 'subtract') {
//        $('#N1').val(newNumber);
//    }
//    else if (operators === 'multiply') {
//        $('#N1').val(newNumber);
//    }
//    else if (operators === 'divide'){
//        $('#N1').val(newNumber);
//    }






//var operator, firstnumber, secondnumber;
//
//function addNums() {
//    var num1 = document.getElementById('N1').value;
//    var num2 = document.getElementById('N2').value;
//    if (isNaN(num1) || isNaN(num2)) {
//        var ans= num1 + num2;
//    }
//    else {
//        var ans = parseInt(num1) + parseInt(num2);
//    }
//    document.getElementById('ans').innerHTML = ans;
//};
//
//function subNums() {
//    var num1= document.getElementById('N1').value;
//    var num2= document.getElementById('N2').value;
//    if (isNaN(num1) || isNaN(num2)) {
//        var sub= num1 - num2;
//    }
//    else {
//        var sub = parseInt(num1) - parseInt(num2);
//    }
//    document.getElementById('ans').innerHTML = sub;
//};
//
//function mulNums() {
//    var num1= document.getElementById('N1').value;
//    var num2= document.getElementById('N2').value;
//    if (isNaN(num1) || isNaN(num2)) {
//        var mul= num1 * num2;
//    }
//    else {
//        var mul = parseInt(num1) * parseInt(num2);
//    }
//    document.getElementById('ans').innerHTML = mul;
//};
//
//function divNums() {
//    var num1= document.getElementById('N1').value;
//    var num2= document.getElementById('N2').value;
//    if (isNaN(num1) || isNaN(num2)) {
//        var dive= num1 * num2;
//    }
//    else {
//        var dive = parseInt(num1) * parseInt(num2);
//    }
//    document.getElementById('ans').innerHTML = dive;
//};
//
//function numberSelector(num) {
//    console.log(num);
//    if(!operator) {
//        var currentValue = document.getElementById("N1").value;
//        document.getElementById("N1").value = document.getElementById("N1").value + num;
//
//    } else {
//
//        if(!secondnumber) {
//            document.getElementById("N1").value = num;
//            secondnumber = num;
//        } else {
//            var currentValue = document.getElementById("N1").value;
//            document.getElementById("N1").value = document.getElementById("N1").value + num;
//            secondnumber = document.getElementById("N1").value;
//        }
//    }
//}
//
//function selectOperation(operation) {
//    operator = operation;
//    firstnumber = $('#N1').val();
//}
//
//function equals(){
//    var num1 = parseFloat(firstnumber);
//    var num2 = parseFloat(secondnumber);
//
//    if (operator === 'add'){
//        $('#N1').val(num1 + num2);
//    }
//    else if (operator === 'subtract') {
//        $('#N1').val(num1 - num2);
//    }
//    else if (operator === 'multiply') {
//        $('#N1').val(num1 * num2);
//    }
//    else if (operator === 'divide'){
//        $('#N1').val(num1 / num2);
//    }
//}

//function cleer(){
//    $("#ans").innerHTML=" ";
//    operator = null;
//    firstnumber = null;
//    secondnumber = null;
//
//
//};
