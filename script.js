function addnewweField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control"); // to add a new class 
    newNode.classList.add("weField"); // to add a new class to same textarea
    newNode.classList.add("mt-3"); // to add a new class to same textarea
    newNode.setAttribute("rows", 3); // to add row same as txtarea field
    newNode.setAttribute("placeholder", "Enter here.."); 

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);

}

function addnewaqField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control"); // to add a new class 
    newNode.classList.add("aqField"); // to add a new class to same textarea
    newNode.classList.add("mt-3"); // to add a new class to same textarea
    newNode.setAttribute("rows", 3); // to add row same as textarea field
    newNode.setAttribute("placeholder", "Enter here.."); 

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButtonOb);
}

// generating cv

function generateCV(){
    console.log(alert("generate cv called"));
    let nameField = document.getElementById("nameField").value;

    let nameT1 = document.getElementById('nameT1')

    nameT1.innerHTML = nameField;
    //short-cut

    document.getElementById('nameT2').innerHTML=nameField;

    document.getElementById('contactT').innerHTML = document.getElementById("contactField").value;

    document.getElementById('addressT').innerHTML = document.getElementById("addressField").value;
    
    // links in the cv

    document.getElementById('eT').innerHTML = document.getElementById("emailField").value;
    document.getElementById('gitT').innerHTML = document.getElementById("githubField").value;
    document.getElementById('linkedT').innerHTML = document.getElementById("linkedinField").value;

    // objective data

    document.getElementById('objectiveT').innerHTML = document.getElementById("objectiveField").value;

    // work experience data 

    let wes = document.getElementsByClassName('weField')
    let str = ''

    for(let e of wes){
        str = str + `<li> ${e.value}</li>`;
    }
    document.getElementById('weT').innerHTML = str;

    // academic qualifications data

    let aq = document.getElementsByClassName("aqField");
    let str1 = ''

    for(let e of aq){
        str1 += `<li> ${e.value} </li>`;
    }

    document.getElementById('aqT').innerHTML = str1;

    document.getElementById('cv-form').style.display="none"
    document.getElementById('cv-template').style.display = "block";

}

function printCV()
{
    window.print();
}




