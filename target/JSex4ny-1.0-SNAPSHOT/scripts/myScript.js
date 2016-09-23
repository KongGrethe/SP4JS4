/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function () {
    setInterval(quoteUpdate, 5000);
    setInterval(syncTime, 1000);

    $("#addPerson").click(function () {
        var firstname = $("#firstName").val();
        var lastname = $("#lastName").val();
        addPerson(firstname, lastname);
    });

    $("#updatePersons").click(function () {
        updateList();
    });
    
    $("#north").click(function() {
        alert("North");
    });
    $("#east").click(function() {
        alert("East");
    });
    $("#south").click(function() {
        alert("South");
    });
    $("#west").click(function() {
        alert("West");
    });
});

function quoteUpdate() {
    $("#dynamicText").load("GetQuote");
}

function addPerson(fname, lname) {
    console.log("Trying to add " + fname + "#" + lname);
    $.ajax({
        url: "PersonServlet",
        data: {command: "addPerson", firstname: fname, lastname: lname},
        success: function () {
            console.log("We added a person");
        }
    });
}

function updateList() {
    $.post("PersonServlet", {command: "getList"}, function (data) {
        console.log(data);
        var builtString = "";
        $.each(jQuery.parseJSON(data), function (necessaryPadding, obj) {
            builtString += "<tr><td>" + obj.firstName + "</td><td>" + obj.lastName + "</td></tr>";
        });
        $("#persons").html(builtString);
    });
}

function syncTime() {
    $.get("TimeServlet", null, function (data) {
        $("#theTime").text(data);
    });
}