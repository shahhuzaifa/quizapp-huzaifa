
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
    getDatabase,
    ref,
    set,
    push,
   onValue,
   remove,update
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoUubMsAZHiuyKg-muHy5mjfLLnzJzUgs",
  authDomain: "fmp-assigment-todo.firebaseapp.com",
  databaseURL: "https://fmp-assigment-todo-default-rtdb.firebaseio.com",
  projectId: "fmp-assigment-todo",
  storageBucket: "fmp-assigment-todo.appspot.com",
  messagingSenderId: "324326565727",
  appId: "1:324326565727:web:93c5f5ffce356e48f1f8ea"
};

// Initialize Firebase
var app = initializeApp(firebaseConfig);


window.gettingdata = function () {
  let reference = ref(db,"todo")
  onValue(reference,function(data){

      list.innerHTML=''
      data.forEach(function(Todos){
          console.log(Todos.val())
          var TodoLi =Todos.val().todo
          var TodoId =Todos.key
        
          if(TodoLi){
              list.innerHTML+=`
              <div style="display:flex;margin-bottom:5px;">
            
              <h4 style="width:50%; background-color: rgb(54, 141, 141); " class="todotext">

               ${TodoLi}  </h4>
             <div  style="width:30%">
             
             <button class="btn btn-outline-primary " onclick="edit('${TodoId}')"><i class="fa-solid fa-pen-to-square"></i><span class="btntext"> Rewrite </span></button>
             <button class="btn btn-outline-danger   " onclick="DeleteTodo('${TodoId}')"><i class="fa-solid fa-trash"></i><span class="btntext">Remove </span></button>
             <br/>
             </div>
              </div>
             `
          }
      else{
          list.innerHTML='No Todos are available.'
      }
      });

  })
}




var db = getDatabase(app)
var list = document.getElementById("addli");
var input = document.getElementById("input");

gettingdata()
 window.add= function  (){
  var obj = {
    todo: input.value,
};

var reference = ref(db, `todo/`);
push(reference, obj);
}



window.DeleteTodo=function(id){
  remove(ref(db,`todo/${id}`))
}

window.edit = function(id){
  var NewTodo = prompt(`EDIT TODO`)
 
  update(ref(db,`todo/${id}`),{
      todo:NewTodo
  })

}
window.deleteall = function (){
  remove(ref(db,`todo`))
}












