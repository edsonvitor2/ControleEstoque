function log(){
    firebase.auth().signInWithEmailAndPassword(document.getElementById('login').value,document.getElementById('senha').value).then(response =>{
        console.log('sucesso',response);
        window.location.href ="home.html"
    }).catch(error => {
        console.log('error',error);
        alert('Login ou Senha invalidos');
    });
}
function reg(){
    firebase.auth().createUserWithEmailAndPassword(document.getElementById('login').value,document.getElementById('senha').value).then(response =>{
        console.log('sucesso',response);
        alert('Conta criada com sucesso')
    }).catch(error => {
        console.log('error',error);
        alert('Email ja cadastrado');
    });
}