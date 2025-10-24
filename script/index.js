document.getElementById("btn-card-1").addEventListener('click',(e)=>{
    const task_assigned = parseFloat(getElementValueById("task-assign"))-1;
    const total_task = parseFloat(getElementValueById('total-task'))+1;
    SetElementValueById("task-assign",task_assigned);
    SetElementValueById("total-task",total_task);
    const card_title = getElementValueById("card-title-1");
    const act_log = document.getElementById("activity-log");
    // activity log
    const log=document.createElement('div');
     log.innerHTML = `
     <h2 class="bg-[#f4f7ff] p-2 rounded-lg text-sm">You have Complete The Task <span class="font-semibold">${card_title}</span> at ${time()}</h2>
    
    `;
    act_log.appendChild(log);
    
})

// clear history btn
document.getElementById("clear-history").addEventListener('click',()=>{
    SetElementValueById('activity-log',"");
});