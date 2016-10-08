/*
 *  Copyright (c) 2015 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

'use strict';

// global variables
var remotePeerId = "";
var sourcePeerId = "";
var sourcePeer;
var conn;
var call;
var sendStream;
var imSender = false;

// Put variables in global scope to make them available to the browser console.
var audio = document.querySelector('audio');

var constraints = window.constraints = {
    audio: true,
    video: false
};

function setRemotePeerId() {
    var input = document.getElementById("id_peer");
    remotePeerId = input.value;

    initMediaDevices();
}

function setAsSender() {
    imSender = true;
}

function setAsReceiver() {
    imSender = false;
}

function handleSuccess(stream) {
    var audioTracks = stream.getAudioTracks();
    console.log('Got stream with constraints:', constraints);
    console.log('Using audio device: ' + audioTracks[0].label);
    stream.oninactive = function() {
        console.log('Stream ended');
    };
    window.stream = stream; // make variable available to browser console
    audio.srcObject = stream;
    sendStream = stream;
    if (imSender) connectWithPeer(remotePeerId, stream);
}

function handleError(error) {
    console.log('navigator.getUserMedia error: ', error);
}

if(imSender){
    initMediaDevices();
}

function initMediaDevices(){
    navigator.mediaDevices.getUserMedia(constraints).
    then(handleSuccess).catch(handleError);
}

function initSource() {
    sourcePeer = new Peer({key: 'lwjd5qra8257b9'});
    sourcePeer.on('open', function(id) {
        sourcePeerId = id;
        console.log('Source peer ID is: ' + sourcePeerId);
    });
    sourcePeer.on('connection', function(conn) {
        // Receive messages
        conn.on('data', function(data) {
            console.log('Received', data.id);
        });
    });
    sourcePeer.on('call', function(call) {
        console.log("Incomin Call");
        console.log(call);
        call.answer();
        console.log("Answered call");
        call.on('stream', function(stream) {
            console.log("Stream received");
            window.stream = stream;
            audio.srcObject = stream;
        });
    });
}

function connectWithPeer(peerId) {
    conn = sourcePeer.connect(peerId);
    conn.on('open', function() {
        // Receive messages
        conn.on('data', function(data) {
            console.log('Received', data);
        });
    });
}

initSource();

function connectWithPeer(peerId, stream) {
    conn = sourcePeer.call(peerId, stream);
//    conn.on('error', function(error) {
//        console.log(error);
//    });
//    conn.on('open', openFunc);
}
