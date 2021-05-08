var admin = require("firebase-admin");

//Arahkan ke path serviceJson yang didownload
var serviceAccount = require("path/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

//Registration Token dari user..
var registrationToken = '';

// Data Notifikasi yang akan ditampilkan
var message = {
    data: {
      title: 'Notifikasi',
      body: 'Pesanan Terkirim'
    },
    token: registrationToken
  };

  admin.messaging().send(message).then((response) => {
      console.log('Pesan Terkirim: ', response);
  }).catch((error) => {
      console.log('Gagal Mengirim Pesan', error);
  });