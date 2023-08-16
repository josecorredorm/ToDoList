// document.addEventListener('DOMContentLoaded', function() {
//     var calendarEl = document.getElementById('calendar');
  
//     var calendar = new calendar.Calendar(calendarEl, {
//       initialView: 'dayGridMonth', // Vista inicial del calendario
//       locale: 'es', // Idioma del calendario
//       headerToolbar: {
//         left: 'prev,next today',
//         center: 'title',
//         right: 'dayGridMonth,timeGridWeek,timeGridDay'
//       },
//       events: [
//         {
//           title: 'Evento 1',
//           start: '2023-08-10',
//           end: '2023-08-11'
//         },
//         {
//           title: 'Evento 2',
//           start: '2023-08-11'
//         }
//       ]
//     });
//     calendar.render();
//   });

  let btnadd =document.getElementById("BtnAdd");
  let todo =document.getElementById("ToDo");
  let tasks =[
    {id:3,
     tks: "ir al mercado",
     stat: false
    },
    {id:2,
    tks: "Pagar recibos",
    stat: false
    },
    {id:1,
    tks: "Realizar desafio de bootcamp",
    stat: false
    },
  ];
  window.addEventListener("load",()=>Act());   
  btnadd.addEventListener("click",()=>AddEvent());

  function AddEvent(){
    let imputtask = document.getElementById("ImputTask").value;
    let NewID;
    NewID=GenID(1);
    tasks.unshift({id: NewID, tks: imputtask, stat: "false"});
    document.getElementById("ImputTask").value= "";
    Act();
  }
  function GenID(elem){
    const ordertasks = [...tasks].sort((x,y)=>x.id - y.id)
    ordertasks.forEach((element) => {
        if(element.id ==elem){
            elem+=1;
        }
    });
    return elem;
  }
  function Act(){
    let html = "";
    let todo = document.getElementById("ToDo");
    let ttask = document.getElementById("Ttask");
    ttask.innerHTML=tasks.length;
    i=0;
    for (let task of tasks){
        html += `
        <li>
           <div class="card" style="width: 18rem;">
               <div class="card-body">
                 <h5 class="card-title">${task.tks}</h5>
                 <h6 class="card-subtitle mb-2 text-body-secondary">${task.id}</h6>
                 <p class="card-text">Relevancia de la tarea</p>
                 <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onchange="checkstatus(${i})">
                 <label class="form-check-label" for="flexCheckDefault">
                   Tarea realizada
                 </label>
                 <button type="button" class="btn btn-danger" onclick="Delete(${i})">Eliminar</button>
               </div>
             </div>
       </li>`
       i+=1;
    }
    todo.innerHTML =html;
    
  }
  function Delete(ID){
    todo.innerHTML ="";
    tasks.splice(ID,1);
    Act();
  }
  function checkstatus(index){
    tasks[index].stat = "True";   
  }