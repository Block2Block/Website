let title = "Hi, I'm Ethan."
let callme = "Although most people call me Block."
let student = "I am a MEng Software Engineering Student at the University of Birmingham."

let task;

let i = 0;
let pause = false;
let speed = 50;

function typeWriterTitle() {
    if (i < title.length) {
        if (i === 2 && pause === false) {
            pause = true;
            setTimeout(typeWriterTitle, 2000);
            return;
        }
        document.getElementById("title").innerHTML += title.charAt(i);
        i++;
        setTimeout(typeWriterTitle, speed);
    } else {
        setTimeout(() => {
            i = 0;
            pause = false;
            clearTimeout(task);
            document.getElementById("aftertitle").style.visibility = "hidden";
            typeCallMe()
            typeWriterCallMe();
        }, 2000);
    }
}

function typeWriterCallMe() {
    if (i < callme.length) {
        document.getElementById("callme").innerHTML += callme.charAt(i);
        i++;
        setTimeout(typeWriterCallMe, speed);
    } else {
        setTimeout(() => {
            i = 0;
            clearTimeout(task);
            document.getElementById("aftercallme").style.visibility = "hidden";
            typeStudent()
            typeWriterStudent();
        }, 2000)
    }
}

function typeWriterStudent() {
    if (i < student.length) {
        document.getElementById("student").innerHTML += student.charAt(i);
        i++;
        setTimeout(typeWriterStudent, speed);
    }
}

function typeTitle()  {
    if (document.getElementById("aftertitle").style.visibility === "hidden") {
        document.getElementById("aftertitle").style.visibility = "visible";
    } else {
        document.getElementById("aftertitle").style.visibility = "hidden";
    }
    task = setTimeout(typeTitle, 350);
}

function typeCallMe()  {
    if (document.getElementById("aftercallme").style.visibility === "hidden") {
        document.getElementById("aftercallme").style.visibility = "visible";
    } else {
        document.getElementById("aftercallme").style.visibility = "hidden";
    }
    task = setTimeout(typeCallMe, 350);
}

function typeStudent()  {
    if (document.getElementById("afterstudent").style.visibility === "hidden") {
        document.getElementById("afterstudent").style.visibility = "visible";
    } else {
        document.getElementById("afterstudent").style.visibility = "hidden";
    }
    task = setTimeout(typeStudent, 350);
}

function start() {
    typeTitle()
    setTimeout(() => {
        typeWriterTitle();
    }, 1000)
}