let c=true;
let d=true;

function change1() {
    if(c){
        document.getElementById("img1").src = "pp1back.jfif";
        c=false;
    }
    else{
        document.getElementById("img1").src = "pp1font.jfif";
        c=true;
    }
}

function change2() {
    if(d){
        document.getElementById("img2").src = "newpp1.jpg";
        d=false;
    }
    else{
        document.getElementById("img2").src = "newpp2.jpg";
        d=true;
    }
}

function scrolltoeducation(){
    document.getElementById("eduzones").scrollIntoView({ behavior: "smooth" });
}

function scrolltoactivity(){
    document.getElementById("achivezone").scrollIntoView({ behavior: "smooth" });
}