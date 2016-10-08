/**
 * Created by eduard on 8/10/16.
 */

var peerId;

$(document).ready(function () {
    peerId = new Peer({key: 'lwjd5qra8257b9'});

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCi9IDe9SjYJrrgQg6Z71BDZOYqy6lFC-E",
        authDomain: "hack-surround.firebaseapp.com",
        databaseURL: "https://hack-surround.firebaseio.com",
        storageBucket: "hack-surround.appspot.com",
        messagingSenderId: "370099762743"
    };

    firebase.initializeApp(config);

});

function register(role) {
    var selectedRadio = $("input[name=options]:checked").val();
    $.ajax({
        type: "POST",
        url: "https://hack-surround.firebaseio.com/"+role+"/" + selectedRadio + "/.json?auth=IxrO3PDuz4bvFvwrNbpIV48pISdjykYLrri3tNjB",
        data: JSON.stringify({"peerId": peerId.id}),
        success: function () {
            console.log("Success");
        },
        dataType: "JSON"
    });
}