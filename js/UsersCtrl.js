var users;
var cardsHtml = "";

async function getUsers() {
    // getting user by api and store them
    const url = "http://filltext.com/?rows=10&fname={firstName}&lname={lastName}&category=[%22category%201%22,%22category%202%22,%22category%203%22]&pretty=true";
    const response = await fetch(url);
    users = await response.json();
    // prepare users in html cards
    users.forEach(myFunction);
    // adding html for users
    document.getElementById("cards").innerHTML = cardsHtml;
}
function myFunction(item, index) {
    cardsHtml += "<div class='card mb-3 col-md-5 category-" + item.category.split(' ')[1] + "'>" +
        "<div class='row g-0'>" +
        "<div class='col-md-4'>" +
        "<div class='circle'>" + item.fname[0] + item.lname[0] + "</div>" +
        "</div>" +
        "<div class='col-md-8'>" +
        "<div class='card-body'>" +
        "<h5 class='card-title'>" + item.fname + " " + item.lname + "</h5>" +
        "<div class='badge bg-primary text-wrap' style='width: 6rem;'>" + item.category + "</div > " +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "<div class='col-md-1 category-" + item.category.split(' ')[1] + "'></div>";

}
onload = function () {
    // getting users on loading the page
    getUsers();
}

function fillterByCategory(choosenCategory) {
    //if user would life to fillter by categories
    var categoryList = ["category-1", "category-2", "category-3"];
    let i = 0;
    while (i < categoryList.length) {
        //get all users
        if (choosenCategory == "") {
            const category = document.querySelectorAll("." + categoryList[i]);
            category.forEach(_category => {
                _category.style.display = "block";
            });
        }
        //get users for one category
        if (categoryList[i] != choosenCategory && choosenCategory != "") {
            const category = document.querySelectorAll("." + categoryList[i]);
            category.forEach(_category => {
                _category.style.display = "none";
            });
        } else {
            const category = document.querySelectorAll("." + categoryList[i]);
            category.forEach(_category => {
                _category.style.display = "block";
            });
        }
        i++;
    }
}