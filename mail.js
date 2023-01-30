const firebaseConfig = {
    apiKey: "AIzaSyCLoH2_CwUMdK7DfZC23qLjLtZg3feNsno",
    authDomain: "book-buffet-fafcb.firebaseapp.com",
    databaseURL: "https://book-buffet-fafcb-default-rtdb.firebaseio.com",
    projectId: "book-buffet-fafcb",
    storageBucket: "book-buffet-fafcb.appspot.com",
    messagingSenderId: "273952085685",
    appId: "1:273952085685:web:b71588bf4aa6d2190cd0fc",
    measurementId: "G-R2ZC3X4YSW"
  };

firebase.initializeApp(firebaseConfig);

var contactFormDB = firebase.database().ref('contactForm');

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e){
    e.preventDefault();
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var phone = getElementVal("phone");
    var bookname = getElementVal("bookname");
    var bookprice = getElementVal("bookprice");
    var author = getElementVal("author");
    var condition = getElementVal("condition");
    var msgContent = getElementVal("msgContent");
saveMessages(name, emailid, phone, bookname, bookprice, author, condition, msgContent);

document.querySelector(".alert").style.display="block";

setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, phone, bookname, bookprice, author, condition, msgContent) =>{
    var newContactForm = contactFormDB.push();
    newContactForm.set({
        name: name,
        emailid:emailid,
        phone:phone,
        bookname:bookname,
        bookprice:bookprice,
        author:author,
        condition:condition,
        msgContent:msgContent,

    });
};

const getElementVal=(id) => {
    return document.getElementById(id).value;
};