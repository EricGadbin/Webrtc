var connection = new RTCMultiConnection();

// this line is VERY important
connection.socketURL = 'https://rtcmulticonnection.herokuapp.com:443/';

// Constraints
connection.session = {
    audio: true,
    video: true
};

connection.sdpConstraints.mandatory = {
    OfferToReceiveAudio: true,
    OfferToReceiveVideo: true
};

connection.onstream = function(event) {
    document.body.appendChild(event.mediaElement);
};

var predefinedRoomId = prompt('Please enter room-id', 'room1');

connection.openOrJoin(predefinedRoomId);
