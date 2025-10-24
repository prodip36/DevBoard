// card-1
document.getElementById("btn-card-1").addEventListener("click", (e) => {
  taskAlert();
  const task_assigned = parseFloat(getElementValueById("task-assign")) - 1;
  const total_task = parseFloat(getElementValueById("total-task")) + 1;
  if(task_assigned===0)
    finalAlert();
  SetElementValueById("task-assign", task_assigned);
  SetElementValueById("total-task", total_task);
  const card_title = getElementValueById("card-title-1");
  const act_log = document.getElementById("activity-log");
  // activity log
  const log = document.createElement("div");
  log.innerHTML = `
     <h2 class="bg-[#f4f7ff] p-2 rounded-lg text-sm">You have Complete The Task <span class="font-semibold">${card_title}</span> at ${time()}</h2>
    
    `;
  act_log.appendChild(log);
  //  btn disabled
  const btn_cmpleted = document.getElementById("btn-card-1");
  btn_cmpleted.disabled = true;
  btn_cmpleted.classList.add("bg-[#ced6ff]");
});

// card-2
document.getElementById("btn-card-2").addEventListener("click", (e) => {
  taskAlert();
  const task_assigned = parseFloat(getElementValueById("task-assign")) - 1;
  const total_task = parseFloat(getElementValueById("total-task")) + 1;
  if (task_assigned === 0) finalAlert();
  SetElementValueById("task-assign", task_assigned);
  SetElementValueById("total-task", total_task);
  const card_title = getElementValueById("card-title-2");
  const act_log = document.getElementById("activity-log");
  // activity log
  const log = document.createElement("div");
  log.innerHTML = `
     <h2 class="bg-[#f4f7ff] p-2 rounded-lg text-sm">You have Complete The Task <span class="font-semibold">${card_title}</span> at ${time()}</h2>
    
    `;
  act_log.appendChild(log);
  //  btn disabled
  const btn_cmpleted = document.getElementById("btn-card-2");
  btn_cmpleted.disabled = true;
  btn_cmpleted.classList.add("bg-[#ced6ff]");
});
// card-3
document.getElementById("btn-card-3").addEventListener("click", (e) => {
  taskAlert();
  const task_assigned = parseFloat(getElementValueById("task-assign")) - 1;
  const total_task = parseFloat(getElementValueById("total-task")) + 1;
  if (task_assigned === 0) finalAlert();
  SetElementValueById("task-assign", task_assigned);
  SetElementValueById("total-task", total_task);
  const card_title = getElementValueById("card-title-3");
  const act_log = document.getElementById("activity-log");
  // activity log
  const log = document.createElement("div");
  log.innerHTML = `
     <h2 class="bg-[#f4f7ff] p-2 rounded-lg text-sm">You have Complete The Task <span class="font-semibold">${card_title}</span> at ${time()}</h2>
    
    `;
  act_log.appendChild(log);
  //  btn disabled
  const btn_cmpleted = document.getElementById("btn-card-3");
  btn_cmpleted.disabled = true;
  btn_cmpleted.classList.add("bg-[#ced6ff]");
});

// card-4
document.getElementById("btn-card-4").addEventListener("click", (e) => {
  taskAlert();
  const task_assigned = parseFloat(getElementValueById("task-assign")) - 1;
  const total_task = parseFloat(getElementValueById("total-task")) + 1;
  if (task_assigned === 0) finalAlert();
  SetElementValueById("task-assign", task_assigned);
  SetElementValueById("total-task", total_task);
  const card_title = getElementValueById("card-title-4");
  const act_log = document.getElementById("activity-log");
  // activity log
  const log = document.createElement("div");
  log.innerHTML = `
     <h2 class="bg-[#f4f7ff] p-2 rounded-lg text-sm">You have Complete The Task <span class="font-semibold">${card_title}</span> at ${time()}</h2>
    
    `;
  act_log.appendChild(log);
  //  btn disabled
  const btn_cmpleted = document.getElementById("btn-card-4");
  btn_cmpleted.disabled = true;
  btn_cmpleted.classList.add("bg-[#ced6ff]");
});

// card-5
document.getElementById("btn-card-5").addEventListener("click", (e) => {
  taskAlert();
  const task_assigned = parseFloat(getElementValueById("task-assign")) - 1;
  const total_task = parseFloat(getElementValueById("total-task")) + 1;
  if (task_assigned === 0) finalAlert();
  SetElementValueById("task-assign", task_assigned);
  SetElementValueById("total-task", total_task);
  const card_title = getElementValueById("card-title-5");
  const act_log = document.getElementById("activity-log");
  // activity log
  const log = document.createElement("div");
  log.innerHTML = `
     <h2 class="bg-[#f4f7ff] p-2 rounded-lg text-sm">You have Complete The Task <span class="font-semibold">${card_title}</span> at ${time()}</h2>
    
    `;
  act_log.appendChild(log);
  //  btn disabled
  const btn_cmpleted = document.getElementById("btn-card-5");
  btn_cmpleted.disabled = true;
  btn_cmpleted.classList.add("bg-[#ced6ff]");
});

// card-6
document.getElementById("btn-card-6").addEventListener("click", (e) => {
  taskAlert();
  const task_assigned = parseFloat(getElementValueById("task-assign")) - 1;
  const total_task = parseFloat(getElementValueById("total-task")) + 1;
  if (task_assigned === 0) finalAlert();
  SetElementValueById("task-assign", task_assigned);
  SetElementValueById("total-task", total_task);
  const card_title = getElementValueById("card-title-6");
  const act_log = document.getElementById("activity-log");
  // activity log
  const log = document.createElement("div");
  log.innerHTML = `
     <h2 class="bg-[#f4f7ff] p-2 rounded-lg text-sm">You have Complete The Task <span class="font-semibold">${card_title}</span> at ${time()}</h2>
    
    `;
  act_log.appendChild(log);
  //  btn disabled
  const btn_cmpleted = document.getElementById("btn-card-6");
  btn_cmpleted.disabled = true;
  btn_cmpleted.classList.add("bg-[#ced6ff]");
});

// clear history btn
document.getElementById("clear-history").addEventListener("click", () => {
  SetElementValueById("activity-log", "");
});
function goToBlog(){
    window.location.href="blog.html";
}

// color button
document.getElementById('color-btn').addEventListener('click',()=>{
       const randomColor =
         "#" + Math.floor(Math.random() * 16777215).toString(16);
       document.body.style.backgroundColor = randomColor;
})
// get date
const getDate=()=>{
   const date= document.getElementById('date');
   date.innerHTML = `
    <h2 class="text-xl font-bold">${todayDate()}</h2>
   `;
}
getDate();
