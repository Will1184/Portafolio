const home = document.getElementById('home');
const cv = document.getElementById('cv');
const springUniversidad= document.getElementById('spring-universidad');
const loginCrudReact = document.getElementById('login-crud-react');
const loginCrudSpring = document.getElementById('login-crud-spring');
const loginCrudJava = document.getElementById('login-crud-java');
const loginFirebaseAndroid = document.getElementById('login-firebase-android');
const adminPacientesReact = document.getElementById('admin-pacientes-react');

const mostrarBtnCv = document.getElementById('btn-cv');
const mostrarBtnSpringUniversidad = document.getElementById('btn-spring-universidad');
const mostrarBtnSpringCrud = document.getElementById('btn-login-crud-spring');
const mostrarBtnReactCrud = document.getElementById('btn-login-crud-react');
const mostrarBtnAdminPacientesReact = document.getElementById('btn-login-crud-java');
const mostrarBtnJavaCrud = document.getElementById('btn-login-firebase-android');
const mostrarBtnLoginFirebase = document.getElementById('btn-admin-pacientes-react');

document.addEventListener('DOMContentLoaded', () => {
  const footer = document.getElementById('mi-footer');  
  const currentTime = new Date();
  const anio = currentTime.getFullYear()  
  footer.textContent = `Brandon Gomez ${anio}`
});


mostrarBtnCv.addEventListener('click', () => { 
  hideAll();
  const result = verificarBtn(cv);
  if(result){
    hide(cv);
    show(home);
  }else{
    show(cv);
  }
});

mostrarBtnSpringUniversidad.addEventListener('click', () => {
  hideAll();
  const result = verificarBtn(springUniversidad);
  if(result){
    hide(springUniversidad);
    show(home);
  }else{
    show(springUniversidad);
  }
});

mostrarBtnReactCrud.addEventListener('click', () => {
  hideAll();
  const result = verificarBtn(loginCrudReact);
  if(result){
    hide(loginCrudReact);
    show(home);
  }else{
    show(loginCrudReact);
  }
});

mostrarBtnJavaCrud.addEventListener('click', () => {
  hideAll();
  const result = verificarBtn(loginCrudJava);
  if(result){
    hide(loginCrudJava);
    show(home);
  }else{
    show(loginCrudJava);
  }
});

mostrarBtnSpringCrud.addEventListener('click', () => {
  hideAll();
  const result = verificarBtn(loginCrudSpring);
  if(result){
    hide(loginCrudSpring);
    show(home);
  }else{
    show(loginCrudSpring);
  }
});

mostrarBtnLoginFirebase.addEventListener('click', () => {
  hideAll();
  const result = verificarBtn(loginFirebaseAndroid);
  if(result){
    hide(loginFirebaseAndroid);
    show(home);
  }else{
    show(loginFirebaseAndroid);
  }
});

mostrarBtnAdminPacientesReact.addEventListener('click', () => {
  hideAll();
  const result = verificarBtn(adminPacientesReact);
  if(result){
    hide(adminPacientesReact);
    show(home);
  }else{
    show(adminPacientesReact);
  }
});

const hideAll=()=>{    
  let result;
  
  result=verificarBtn(home)
  if(result){
    hide(home);    
  }

  result=verificarBtn(cv)
  if(result){
    hide(cv);    
  }
  
  result=verificarBtn(springUniversidad)
  if(result){
    hide(springUniversidad);    
  }
  
  result=verificarBtn(loginCrudSpring)
  if(result){
    hide(loginCrudSpring);    
  }
  
  result=verificarBtn(loginCrudReact)
  if(result){
    hide(loginCrudReact);    
  }
  
  result=verificarBtn(loginCrudJava)
  if(result){
    hide(loginCrudJava);    
  }
  
  result=verificarBtn(loginFirebaseAndroid)
  if(result){
    hide(loginFirebaseAndroid);    
  }
  
  result=verificarBtn(adminPacientesReact)
  if(result){
    hide(adminPacientesReact);    
  }
}

const hide = (nameDiv)=>{  
  nameDiv.classList.add('-hide');    
  nameDiv.classList.remove('-show');
  setTimeout(() => {
    nameDiv.style.display="none"
    }, 900);    
}

const show = (nameDiv)=>{
  setTimeout(() => {
    nameDiv.style.display='block';
    nameDiv.classList.remove('-hide');    
    nameDiv.classList.add('-show')
  }, 1000);    
}

const verificarBtn = (div) => {
  const estiloDisplay = window.getComputedStyle(div).getPropertyValue('display');
  const result = estiloDisplay === "block";
  return result;
};




