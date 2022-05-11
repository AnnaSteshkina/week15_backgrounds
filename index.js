function changeBackground(){
    if (document.getElementById('breed').value == "Светлая"){
        document.body.style.background = '#fcf9da';
    } else if (document.getElementById("breed").value == "Темная"){
        document.body.style.background = 'rgba(12, 7, 8, 0.8)';
    }
    else if (document.getElementById("breed").value == "Синяя"){
        document.body.style.background = 'rgba(4, 43, 166, 0.8)';
    }
    else {
        document.body.style.background = 'transparent';
    }
}