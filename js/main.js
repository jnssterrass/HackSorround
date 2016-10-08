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

// Put variables in global scope to make them available to the browser console.
var audio = document.querySelector('audio');

var constraints = window.constraints = {
    audio: true,
    video: false
};

function handleSuccess(stream) {
    var audioTracks = stream.getAudioTracks();
    console.log('Got stream with constraints:', constraints);
    console.log('Using audio device: ' + audioTracks[0].label);
    stream.oninactive = function() {
        console.log('Stream ended');
    };
    window.stream = stream; // make variable available to browser console
    audio.srcObject = stream;
}

function handleError(error) {
    console.log('navigator.getUserMedia error: ', error);
}

navigator.mediaDevices.getUserMedia(constraints).
then(handleSuccess).catch(handleError);

function showMyId(id) {
    $("#").val(id);
}

function getRemoteId() {
    return $("#id_peer").val();
}

function initSource() {
    sourcePeer = new Peer({key: 'lwjd5qra8257b9'});
    sourcePeer.on('open', function(id) {
        sourcePeerId = id;
        console.log('Source peer ID is: ' + sourcePeerId);
        showMyId(sourcePeerId);
    });
    sourcePeer.on('connection', function(conn) {
        // Receive messages
        conn.on('data', function(data) {
            console.log('Received', data);
        });
    });
}

initSource();

function connectWithPeer(peerId) {
    conn = peer.connect(remotePeerId);
    conn.on('open', function() {
        // Receive messages
        conn.on('data', function(data) {
            console.log('Received', data);
        });

        // Send messages
        conn.send('Hello!');
    });
}

function callRemote() {
    var call = peer.call(remotePeerId, mediaStream);
}

