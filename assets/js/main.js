  let btnadd =document.getElementById("BtnAdd");
  let todo =document.getElementById("ToDo");
  let ttaskdo = document.getElementById("TtaskDo");
  let tasks =[
    {id:3,
     tks: "ir al mercado",
     stat: 0,
     color: "green"
    },
    {id:2,
    tks: "Pagar recibos",
    stat: 0,
    color: "green"
    },
    {id:1,
    tks: "Realizar desafio de bootcamp",
    stat: 0,
    color: "orange"
    },
  ];
  window.addEventListener("load",()=>Act());   
  btnadd.addEventListener("click",()=>AddEvent());

  function AddEvent(){
    let imputtask = document.getElementById("ImputTask").value;
    let colorselector = document.getElementById("colorSelector").value;
    console.log(colorselector);
    if (imputtask == ""){
        alert("Debe ingresar una actividad por hacer");
    }
    else{
        let NewID;
        NewID=GenID(1);
        tasks.unshift({id: NewID, tks: imputtask, stat: "false", color: colorselector});
        document.getElementById("ImputTask").value= "";
        Act();
    }
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
        if(task.stat == 1){      
        html += `
            <div class="card ${task.color}" style="width: 16rem;">
               <div class="card-body">
                 <h5 class="card-title">${task.tks}</h5>
                 <h6 class="card-subtitle mb-2 text-body-secondary">ID: ${task.id}</h6>
                 <p class="card-text">Relevancia de la tarea</p>
                 <input class="form-check-input" type="checkbox" value="" id="checkbox${i}" onchange="checkstatus(${i},checkbox${i})" checked>
                 <label class="form-check-label" for="flexCheckDefault">
                   Tarea realizada
                 </label>
                 <button type="button" class="btn btn-danger" onclick="Delete(${i})">Eliminar</button>
               </div>
            </div>`
            }
        else{
            html += `
            <div class="card ${task.color}" style="width: 16rem;">
                <div class="card-body">
                  <h5 class="card-title">${task.tks}</h5>
                  <h6 class="card-subtitle mb-2 text-body-secondary">ID: ${task.id}</h6>
                  <p class="card-text">Relevancia de la tarea</p>
                  <input class="form-check-input" type="checkbox" value="" id="checkbox${i}" onchange="checkstatus(${i},checkbox${i})" >
                  <label class="form-check-label" for="flexCheckDefault">
                    Tarea realizada
                  </label>
                  <button type="button" class="btn btn-danger" onclick="Delete(${i})">Eliminar</button>
                </div>
              </div>`
        }
       i+=1;
    }
    todo.innerHTML =html;
  }


  function Delete(ID){
    todo.innerHTML ="";
    tasks.splice(ID,1);
    Act();
    let taskfilter = tasks.filter(ele => ele.stat == 1);
    ttaskdo.innerHTML = taskfilter.length; 
  }


  function checkstatus(index,id){
    let checkbox = document.getElementById(id.id);
    console.log(checkbox.checked);
    if(checkbox.checked == 1){
        tasks[index].stat = 1;  
        }
    else if(checkbox.checked == 0){
        tasks[index].stat = 0;
        } 
    let taskfilter = tasks.filter(ele => ele.stat == 1);
    ttaskdo.innerHTML = taskfilter.length;   
    }