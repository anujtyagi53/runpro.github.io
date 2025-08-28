importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-messaging.js');

   /*Update with yours config*/
  const firebaseConfig = {
   apiKey: "AIzaSyCBqQS-ndc2rjs7xIHkJPn9LBS9qmHtBjk",
   authDomain: "runpro-6a01a.firebaseapp.com",
   projectId: "runpro-6a01a",
   storageBucket: "121872577154",
   messagingSenderId: "121872577154",
   appId: "1:121872577154:web:6da2513e6138575a30ba9b",
//   measurementId: "G-dsada"
 };
  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();

  /*messaging.onMessage((payload) => {
  console.log('Message received. ', payload);*/
//  messaging.onBackgroundMessage(function(payload) {
//    console.log('Received background message ', payload);
//
//    const notificationTitle = payload.notification.title;
//    const notificationOptions = {
//      body: payload.notification.body,
//    };
//
//    self.registration.showNotification(notificationTitle,
//      notificationOptions);
//  });

