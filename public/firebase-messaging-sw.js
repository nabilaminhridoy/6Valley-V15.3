importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-auth.js');

firebase.initializeApp({
    apiKey: "AIzaSyClox91NVqzQSA5CnQQF9iMcbg659VP-UY",
    authDomain: "peculiar-gadgets.firebaseapp.com",
    projectId: "peculiar-gadgets",
    storageBucket: "peculiar-gadgets.firebasestorage.app",
    messagingSenderId: "712623644471",
    appId: "1:712623644471:web:95e2d0e531eae6b8dac4b2",
    measurementId: "G-DDHC69D7DD"
});

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
    return self.registration.showNotification(payload.data.title, {
        body: payload.data.body || '',
        icon: payload.data.icon || ''
    });
});