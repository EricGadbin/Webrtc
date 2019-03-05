// Constraints
const hdConstraints = {
  video: {width: {min: 1280}, height: {min: 720}}
};

const vgaConstraints = {
  video: {width: {min: 640}, height: {min: 480}}
};

// Access to device
var video = document.querySelector('video');

navigator.mediaDevices.getUserMedia(hdConstraints).then((stream) => {
    video.srcObject = stream
});
