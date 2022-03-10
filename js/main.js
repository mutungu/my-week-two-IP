var submitbutton=document.getElementById("submit")
submitbutton.addEventListener("click",akanname)

function akanname(){
    let dateOfBirth=document.getElementById("date-of-birth").value;
    let gender = document.getElementsByName("gender")
    let newdate = new Date(dateOfBirth);
    let dayOfWeek = newdate.getDay();
    let akanFemaleName = ["Akosua", "Adwoa", "Abenaa","Akua", "Yaa", "Afua", "Ama"];
    let akanmalenName = ["Kwasi", "Kwadwo", "Kwabenaa","Kwaku", "Yaw", "Kofi","Kwame"];   

for(let i= 0; i<gender.length; i++){
    if(gender[i].checked){
        if(gender[i].id==="male"){
            document.getElementById("output").innerHTML ="you akanname is  " + akanmalenName[dayOfWeek]
        }
        if(gender[i].id==="female"){
            document.getElementById("output").innerHTML ="you akanname is  " + akanFemaleName[dayOfWeek]
        }
    }
}

}