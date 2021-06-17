console.log('Register')
const salon = {
    name:'The fashion Pet',
    phone: '555-555-555',
    address:{
        street: 'University',
        number: '543-k'
    },
    hours:{
        open: '9:00 am',
        close: '5:00 pm'
    },
    cost:{
        hairCut: 25,
        nailsCut: 15,
        shower: 30,
        fullService: 45
    },
    pets: [
       
    ]
}


var {name, phone, address:{street, number}, hours:{open, close}} = salon;

function displayInfo(){
    document.getElementById('information').innerHTML=`
    <p>${name}, ${street} ${number}</p>
    <p> It is open from ${open} to ${close} </p>`;
}

displayInfo();
var c = 0;
//  Create the constructor
class Pet{
    constructor(name, type, age, breed, gender, service, owner, contactPhone){
        this.name = name;
        this.type = type;
        this.age = age;
        this.breed = breed;
        this.gender = gender;
        this.service = service;
        this.owner = owner;
        this.contactPhone = contactPhone;
        this.price = 0;
        this.id = c++;
    }
}

var txtName = document.getElementById('petName');
var txtType = $('#type');
var txtAge = document.getElementById('petAge');
var txtBreed = document.getElementById('petBreed');
var txtGender = document.getElementById('petGender');
var txtService = document.getElementById('petService');
var txtOwner = document.getElementById('ownerName');
var txtPhone = document.getElementById('contactPhone');
var txtSearch = document.getElementById('searchName');

//Create the register function
function register(){
    var thePet = new Pet(txtName.value, txtType.val(), txtAge.value, txtBreed.value, txtGender.value, txtService.value, txtOwner.value, txtPhone.value);  // Create a generic objects and pass the info as parameters 
    if(txtName.value == "" || txtService.value == "") {
        // alert("Add the requiered information");
        $("#alert-box").removeClass("hidden");
        $("#alert-box").addClass("alert-danger");
        $("#alert-box").text("Add the requiered information");
        setTimeout(function(){
            $("#alert-box").addClass("hidden");
            $("#alert-box").removeClass("alert-danger");

        }, 2000);
    } else {
        console.log(thePet);  // Get the info from the inputs
        salon.pets.push(thePet);   // Push the generic obj into the array
        clearInputs();
        updateCounter(thePet, true); 
        displayTable(thePet);  // Display the object on the HTML 
        $("#alert-box").removeClass("hidden");
        $("#alert-box").text("The register was successful");
        setTimeout(function(){
            $("#alert-box").addClass("hidden");
        }, 2000);
    }
}

function updateCounter(aPet, add){
    console.log("updatecounter: ", aPet.type + " " + add)
    var icon = "";
    if(aPet.type == "dog") {
        icon = "🐕";
        (add)? dog++:dog--;
    } else if(aPet.type == "cat") {
        icon = "🐱";
        (add)? cat++:cat--;
    } else if(aPet.type == "bird") {
        icon = "🐦";
        (add)? bird++:bird--;
    } else {
        icon = "😊";
        (add)? other++:other--;
    }
   
    var div = document.getElementById('types');
    div.innerHTML=` <div class="circle">🐕<br>${dog}</div>
                    <div class="circle">🐱<br>${cat}</div>
                    <div class="circle">🐦<br>${bird}</div>
                    <div class="circle">😊<br>${other}</div>`;

}

var dog = 0, cat = 0, bird = 0, other = 0;
function displayTable(aPet){
    console.log("Service", aPet.service);
    if(aPet.service == "full") {
        aPet.price = 40; 
    } else if(aPet.service == "shower") {
        aPet.price = 30;
    } else if(aPet.service == "nails") {
        aPet.price = 10;
    } else if(aPet.service == "hair") {
        aPet.price = 20;
    }

    // Create the row
    var row =  `<tr id="${aPet.id}">
                    <td>${aPet.name}</td>
                    <td>${aPet.age}</td>
                    <td>${aPet.gender}</td>
                    <td>${aPet.breed}</td>
                    <td>${aPet.type}</td>
                    <td>${aPet.service}</td>
                    <td>${aPet.price}</td>
                    <td>${aPet.owner}</td>
                    <td>${aPet.contactPhone}</td>
                    <td><button class="btn btn-warning" onclick="deletePet(${aPet.id})">Delete</button></td>
                </tr>`;
       //             <td><button class ="btn btn-dangerbtn-warning" onclick="deletePet(${aPet.id})">Delete</button></td>

    //  Append the row to the table
    $("#pet-table").append(row);
    profitCalculation();
}


function clearInputs (){
    txtName.value = "";
    txtAge.value = "";
    txtBreed.value = "";
    txtGender.value = "";
    txtService.value = "";
    txtOwner.value = ""; 
    txtPhone.value = "";
}

profitCalculation();
function profitCalculation(){
    var sum = 0;
    // Challenge: use the forEach to calculate the profits instead of for
    salon.pets.forEach(salon => {
      sum += salon.price;
    });
    document.getElementById('profits').innerHTML =`<br>Profits = $${sum}`;
}

function deletePet(petId){
    //<tr id="${aPet.id}">
    console.log("delete pet " + petId);
    // Select the card from the html
    var card = $('#'+petId);
    // Search the pet in the array
    var indexDelete;
    for(var i = 0; i < salon.pets.length; i++){
        if(salon.pets[i].id === petId){
            updateCounter(salon.pets[i], false); 
            indexDelete = i;
            break;
        }
    }
    console.log(indexDelete);
    // Remove the pet from the array
    salon.pets.splice(indexDelete, 1);
    // Remove from the html
    card.remove();
    profitCalculation();
}

function searchByName() {
    var tdElement = document.getElementById(index);
    var str = txtSearch.value;
    var index = 0;

    salon.pets.forEach(salon => {
        (str === salon.name)? tdElement.style.background ="#d8d3d8" : tdElement.style.background ="#f2dfe2";
        index++;
    });
  }

function searchPet(){
    console.log("search function....");
    var ss = $('#search').val();
    //console.log(ss);
    salon.pets.forEach(pet => {
        if(pet.name.toLowerCase().includes(ss.toLowerCase()) ||
           pet.service.toLowerCase().includes(ss.toLowerCase())){
           // $('#'+pet.id).css({'background': 'red'});
           $('#'+pet.id).removeClass('unactive');
           // $('#search').val("");
        }else{
            $('#'+pet.id).addClass('unactive');

            //$('#'+pet.id).css({'background': 'white'});
        }
    });
   // $('#search').val("");
}

function init(){
    console.log("Init");
    // Create the pets
    var scooby = new Pet("Scooby","dog", 50, "Dane", "Male","hair", "Shaggy", "555-555-555");
    var speedy = new Pet("Speedy", "other", 80, "Mixed", "Male", "full", "Bugs", "888-888-888");
    //  Push the pets into the array
    salon.pets.push(scooby);
    salon.pets.push(speedy);
    // Display pets
    updateCounter(scooby, true); 
    displayTable(scooby);
    updateCounter(speedy, true); 
    displayTable(speedy);
    profitCalculation();
    //hook events
    $('#register-btn').click(register);
    $('#search-btn').click(searchPet);
    $('#search').keypress(function(e){
        console.log(e.key);

        if(e.key == "Enter"){
            console.log(e.key);
            searchPet();
       }
    });
    
    //$('#search').on('keyup', search);
}

window.onload = init;