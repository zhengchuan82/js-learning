
////var name = "Jack";
////var age = 23;
////var shootingScore = 45.6;          
////var message = "Hi, my name is " + name + " and I am " + age + " years old!";
////            
////alert(message);
//
//var firstName =  "John";
//var lastName = "JacobJingleHeimerSmith";
//var dateOfBirth ="10-09-82";
//var age = 23;
//var profieImgUrl = "http://coolpicks.com/johnjacob.jpg";
//
//var loginWelcomeMessage = "Welcome, " + firstName + ". Happy " + age + "rd birthday!" ;
//            
//console.log(loginWelcomeMessage);

//var sum = 10 + 15;
//var sub = 15 - 10;
//var mul = 10 * 3;
//console.log(mul);

//if (1 == 1){
//    console.log("We should see this");
//}

//var length1 = 15;
//var width1 = 10;
//var area1 = length1 *width1;
//var length2 = 12;
//var width2 = 14;
//var area2 = length2 * width2;
//console.log(area1);
//console.log(area2);

//function area(length, width){
//    return length * width;
//}
//
//var rectanglesAreas = []
//rectanglesAreas.push(area(10,15));
//rectanglesAreas.push(area(14,2));
//rectanglesAreas.push(area(4,5));
//
//
//console.log(rectanglesAreas);

//var bankBalance = 500;
//function makeTransaction(priceOfSale) {
//    if (priceOfSale <= bankBalance) {
//        bankBalance -= priceOfSale;
//        console.log("Purchase Successful");
//    } else {
//        console.log("Insufficient Funds");
//    }
//}
//
//var transaction = function(priceOfSale) {
//    if (priceOfSale <= bankBalance) {
//        bankBalance -= priceOfSale;
//        console.log("Purchase Successful");
//    } else {
//        console.log("Insufficient Funds");
//    }
//}
////makeTransaction(499);
//makeTransaction(412);
//var bb = "your bankbalance is " + bankBalance
//console.log(bb);
//
//var printCustomerName = function(first, last){
//    console.log("First Name: " + first +"Last Name: " + last)
//}
//
//var applyForCreditCart = function(creditScore, soul){
//    
//}
//
//var bankOperations = [];
//bankOperations.push(transaction);
//bankOperations.push(printCustomerName);
//bankOperations.push(applyForCreditCart);
var students = [];
function student(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.greeting = function() {
        return "Hi, I'm " + this.firstName + " and I'm " +this.age + "years old.";
    };
}

var s1 = new student("Jenny","Laga",5);
students.push(new student("Jenny","Laga",5));
students.push(new student("Timmy","Turner",8));
students.push(new student("Carl","Jr",4));

var xuesheng = students[0];

for (var key in xuesheng) {
    console.log(xuesheng[key]);
}

//console.log(s1.greeting());
//var student0 = {
//    firstName: "Jay",
//    lastName: "Loo",
//    age: 7,
//    
//}
//};
//
//console.log(student0.greeting())
//
//var student2 = {};
//student2.firstName = "Zack";
//student2.lastName = "Bobo";
//student2.age = 5;
//
//var student1 = new Object();
//student1.firstName = "John";
//student1.lastName = "Parker";
//student1.age = 7;
//
//var students = [];
//students.push(student0);
//students.push(student1);
//students.push(student2);
//
//for (var index = 0; index < students.length; index++){
//    var xuesheng = students[index];
//    console.log(xuesheng.greeting());
//}
//console.log(student.firstName);
//console.log(student.lastName);
//console.log(student["firstName"]);
//console.log(student["age"]);

//var studentsNames = ["John", "Jacob", "Jingle", "Heimer", "Smith"];
