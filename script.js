var tasks_button;
var  original_name, profession, designation, text_only;
var base_name="Task";
var data_file;
var left_dropdown, button_list, profile_button, my_tasks,profile,tasks;
var profile_on = false;
var tasks_on = false;

window.onload = function () {
    
    var self = this;
    var notifications_div = document.getElementById("notifications_div");
    var profile_info = document.getElementById("profile_info");
    var not_disappearing = document.getElementById("not_disappearing");
    var task_name = document.getElementById('task_name');
    var tasks_div = document.getElementById("tasks_div");
    var settings_button = document.getElementById("settings_button");
    var notifications_button = document.getElementById("notifications_button");
    tasks_button = document.getElementsByClassName("tasks_button");
    var tasks_button_length = tasks_button.length;
    left_dropdown = document.getElementsByClassName("left_dropdown");
//    button_list = document.getElementsByClassName("button_list");
    profile_button = document.getElementById("profile_button");
    my_tasks = document.getElementById("my_tasks");
    
    Array.from(left_dropdown).forEach(function(elem){
        elem.style.display="none";
    })
    profile_button.addEventListener("click",function(){
        profile = document.getElementsByClassName("profile");        
        Array.from(profile).forEach(function(elem){
            if(profile_on==false){
                elem.style.display = "block";                
            }
            else{
                elem.style.display="none";                
            }
            
        })
        profile_on = !profile_on;
        
    })
    my_tasks.addEventListener("click",function(){
        tasks = document.getElementsByClassName("tasks");
        Array.from(tasks).forEach(function(elem){
            if(tasks_on==false){
                elem.style.display = "block";                
            }
            else{
                elem.style.display="none";                
            }
        })
        tasks_on = !tasks_on;
    })
    
    
    original_name = document.getElementById("main_name");
    profession = document.getElementById("profession");
    designation = document.getElementById("designation");    
    text_only = [original_name,profession,designation];
    
    fetch('./data.json').then(function(res){
        return res.json();
    }).then(function(data){
        data_file = data;
        original_name.value = data_file.original_name;
        profession.value = data_file.profession;
        designation.value = data_file.designation;
    });
    
    
    
    for(i=0;i<text_only.length;i++){
        text_only[i].addEventListener("change",function(){
            value = this.value;
            length = value.length;
            if(length>30){
                this.value = "";
                alert("Only 30 characters are allowed");
            }
        })
    }
    

    Array.from(tasks_button).forEach(function(button,index){
        button.addEventListener("click",function(){
            tasks_div.style.display = "block";
            profile_info.style.display="none";
            notifications_div.style.display="none";
            task_name.innerHTML = base_name + " " + (index+1);
        })
    })
//    for(i=0;i<tasks_button_length;i++){
//        tasks_button[i].addEventListener("click",function(){
//            var state = i;
//            tasks_div.style.display="block";
//            profile_info.style.display="none";
//            notifications_div.style.display="none";
//            task_name.innerHTML = base_name+state;
//        })
//    }
    
    settings_button.addEventListener("click",function(){
        profile_info.style.display="block";
        notifications_div.style.display="none";
        tasks_div.style.display="none";
    })
    notifications_button.addEventListener("click",function(){ 
        console.log(notifications_div);
        document.getElementById("notifications_form").style.display="block";
        not_disappearing.style.display="block";
        notifications_div.style.display="block";
        profile_info.style.display="none";        
        tasks_div.style.display="none";
    });
    
    //hiding the notifications div and the tasks div
    not_disappearing.style.display = notifications_form.style.display = "none";
    tasks_div.style.display="none";    
};
