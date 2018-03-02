

function idCard(){
    
    var firstName = document.getElementById("firstName").value;
    var lastName= document.getElementById("lastName").value;
    var address= document.getElementById("address").value;
    var fullName= firstName +" "+lastName;
  
     document.getElementById("postFullName").innerHTML = fullName;
     document.getElementById("postAddress").innerHTML= address;

    var age= document.getElementById("age").value;
    var phoneNumber= document.getElementById("phone-num").value;

    var numberArray= [];
    numberArray.push(age , phoneNumber);

    for (var i=0; i>=numberArray.length; i++);

     // checking both condition at the same time.
    if(numberArray[0] <= 100 && numberArray[1] >= 100) {
        document.getElementById("postAge").innerHTML= "Age : " + age;
        document.getElementById("postPhoneNumber").innerHTML= "Phone Number : "+ phoneNumber;
      }
    
    else {
        alert(" Please Enter a valid number in Age or Phone number field");
    }
}
// function to retrieve and post Html value for the ID card form.
