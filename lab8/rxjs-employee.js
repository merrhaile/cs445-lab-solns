const { fromEvent } = rxjs;



// Handled click event using observable
displayUsers()
function displayUsers() {

    const getEmployeeBtn = document.getElementById("getemployee-btn");
    const employeeObservable = fromEvent(getEmployeeBtn, "click")

    employeeObservable
    .subscribe({
        next: function(){ 
            removeUsers();
            populateUsers();
        }
    })
}

// Clears the page on click
function removeUsers() {
    const container = document.querySelector(".container")
    const divArr = document.querySelectorAll(".user-info");
    for(let div of divArr){
        container.removeChild(div);
    }
}

// populates the page with users on click based on number entered
async function populateUsers() {
    const numUsers = document.getElementById("text").value;

    for(let i=0; i < +(numUsers) ; i++){
        const response = await fetch("https://randomuser.me/api/?results=" + numUsers);
        const employeeArray = await response.json();
        console.log(employeeArray.results[0]);

        const container = document.querySelector(".container")
        const divContainer = document.createElement('div');
            divContainer.classList = "user-info";
            container.appendChild(divContainer);
        const divName = document.createElement('div');
            divName.id = "div-name";
            divContainer.appendChild(divName);
        const divText = document.createElement('div');
            divText.id = "div-text";
            divContainer.appendChild(divText);
         
            divName.innerHTML =`
            <h4>${employeeArray.results[0].name.first} ${employeeArray.results[0].name.last}</h4>`;

            divText.innerHTML = `
            <h3>Location</h3>
            <p>${employeeArray.results[0].location.street.name}</p>
            <p>${employeeArray.results[0].location.city} ${employeeArray.results[0].location.country}</p>
            `  
    }
    document.getElementById("text").value = null
}
