document.addEventListener("DOMContentLoaded", function () {

    getLocation();

});

function getLocation() {
    if (navigator.geolocation) {
        var params = {
            enableHighAccuracy: true,
            timeout: 360000,
            maximumAge: 0
        };
        navigator.geolocation.getCurrentPosition(reportPosition, gpsError, params);
    } else {
        alert("NAH SON NOT IN MY HOUSE YUNG BLOOD")
    }

}

function reportPosition(position) {
    var height = "400";
    var width = "400";
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var key = "AIzaSyCL3qJSm8o960y2Mpmcrah8oepBo-FCFu0";
    var url = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude +
        "&zoom=14&size=" + width + "x" + height + "&maptype=roadmap&markers=color:red%7C" + latitude + "," + longitude + "&key=" + key;
    console.log(url);
    var canvas = document.createElement("canvas");
    document.querySelector("body").appendChild(canvas);
    canvas.width = width;
    canvas.height = height;
    context = canvas.getContext("2d");
    context.src = url;

    var googleIMGMAP = new Image();

    googleIMGMAP.onload = function () {
        context.drawImage(googleIMGMAP, 0, 0, 400, 400);
    };

    googleIMGMAP.src = url;
}

function watchPosition(position) {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
    console.log(position.coords.accuracy);
    console.log(position.coords.altitude);
}

function gpsError(error) {
    alert("NOOOOOOOO");
};