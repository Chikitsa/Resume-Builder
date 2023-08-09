
function addNewWEField() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add("mt-3");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute('placeholder',"Enter here ");

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewQAField() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('aqField');
    newNode.classList.add("mt-3");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute('placeholder',"Enter here ");

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode,aqAddButtonOb);
}





function generateCV(){
    let nameField = document.getElementById("nameField").value;
    let namet1 = document.getElementById("namet1");
    namet1.innerHTML = nameField;

    //for t2
    document.getElementById("namet2").innerHTML = nameField;

    //contact
    document.getElementById("contactt").innerHTML = document.getElementById("contactField").value;
    
    //address
    document.getElementById("Addresst").innerHTML = document.getElementById("addressField").value;

    document.getElementById("emailt").innerHTML = document.getElementById("EmailField").value;

    document.getElementById("linkedt").innerHTML = document.getElementById("LinkedinField").value;

    document.getElementById("gitt").innerHTML = document.getElementById("GithubField").value;

    document.getElementById("objectivet").innerHTML = document.getElementById("objectiveField").value;



   


    //work experience
    let wes = document.getElementsByClassName("weField"); // Use .weField if you're targeting elements with class "weField"
    let str = "";
    for (let e of wes) 
    {
        str = str + `<li> ${e.value} </li>`;
    }
    document.getElementById("wet").innerHTML = str;


    let aqs=document.getElementsByClassName('aqField');
    let str1='';
    for(let e of aqs)
        {
            str1+=`<li> ${e.value} </li>`;
        }
    document.getElementById('aqt').innerHTML=str1;




    document.getElementById('cv-form').style.display = 'none';
    document.getElementById('cv-template').style.display = 'block';
}




function printCV(){
    window.print();
}


    




