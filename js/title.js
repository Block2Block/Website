let title = "Hi, I'm Ethan."
let callme = "Although most people call me Block."
let student = "I am a MEng Software Engineering Student at the University of Birmingham."

let waitTask;
let stage = 0;
let task;

let i = 0;
let pause = false;
let speed = 50;
let skipAnimation = false;

function skip() {
    skipAnimation = true;

    switch (stage) {
        case 3:
        case 1: {
            stage = 0;
            clearTimeout(waitTask);
            typeWriterTitle();
            break;
        }
        case 2: {
            stage = 0;
            clearTimeout(waitTask);
            typeWriterCallMe();
            break;
        }
        case 4: {
            stage = 0;
            clearTimeout(waitTask);
            document.getElementById("skip").style.opacity = "1";
            document.getElementById("skip").classList.remove("disabled");
            typeWriterTitle();
            break;
        }
    }
}

function typeWriterTitle() {
    stage = 0;
    if (i < title.length) {
        if (i === 2 && !pause && !skipAnimation) {
            pause = true;
            stage = 1;
            waitTask = setTimeout(typeWriterTitle, 2000);
            return;
        }
        document.getElementById("title").innerHTML += title.charAt(i);
        i++;
        if (skipAnimation) {
            typeWriterTitle();
        } else {
            setTimeout(typeWriterTitle, speed);
        }
    } else {
        if (skipAnimation) {
            i = 0;
            pause = false;
            clearTimeout(task);
            document.getElementById("aftertitle").style.visibility = "hidden";
            typeCallMe();
            typeWriterCallMe();
        } else {
            stage = 1;
            waitTask = setTimeout(() => {
                stage = 0;
                i = 0;
                pause = false;
                clearTimeout(task);
                document.getElementById("aftertitle").style.visibility = "hidden";
                typeCallMe();
                typeWriterCallMe();
            }, 2000);
        }
    }
}

function typeWriterCallMe() {
    stage = 0;
    if (i < callme.length) {
        document.getElementById("callme").innerHTML += callme.charAt(i);
        i++;
        if (skipAnimation) {
            typeWriterCallMe();
        } else {
            setTimeout(typeWriterCallMe, speed);
        }
    } else {
        if (skipAnimation) {
            i = 0;
            clearTimeout(task);
            document.getElementById("aftercallme").style.visibility = "hidden";
            typeStudent();
            typeWriterStudent();
        } else {
            stage = 2;
            waitTask = setTimeout(() => {
                stage = 0;
                i = 0;
                clearTimeout(task);
                document.getElementById("aftercallme").style.visibility = "hidden";
                typeStudent();
                typeWriterStudent();
            }, 2000)
        }
    }
}

function typeWriterStudent() {
    stage = 0;
    if (i < student.length) {
        document.getElementById("student").innerHTML += student.charAt(i);
        i++;
        if (skipAnimation) {
            typeWriterStudent();
        } else {
            setTimeout(typeWriterStudent, speed);
        }
    } else {
        if (skipAnimation) {
            document.getElementById("scroll").style.opacity = "1";
            document.getElementById("replay").style.opacity = "1";
            document.getElementById("replay").classList.remove("disabled");
            document.getElementById("skip").style.opacity = "0";
            document.getElementById("skip").classList.add("disabled");
        } else {
            setTimeout(() => {
                document.getElementById("scroll").style.opacity = "1";
                document.getElementById("replay").style.opacity = "1";
                document.getElementById("replay").classList.remove("disabled");
                document.getElementById("skip").style.opacity = "0";
                document.getElementById("skip").classList.add("disabled");
            }, 500)
        }
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
    stage = 3;
    waitTask = setTimeout(() => {
        stage = 0;
        typeWriterTitle();
    }, 2000)
}

function restart() {
    clearTimeout(task);
    document.getElementById("afterstudent").style.visibility = "hidden";
    document.getElementById("student").innerHTML = "";
    document.getElementById("callme").innerHTML = "";
    document.getElementById("title").innerHTML = "";
    document.getElementById("scroll").style.opacity = "0";
    document.getElementById("replay").style.opacity = "0";
    document.getElementById("replay").classList.add("disabled");
    document.getElementById("menu").style.opacity = "0";
    document.getElementById("topbar").style.opacity = "0";
    document.getElementById("menu").classList.add("disabled");
    skipAnimation = false;
    i = 0;
    typeTitle()
    stage = 4;
    waitTask = setTimeout(() => {
        stage = 0;
        document.getElementById("skip").style.opacity = "1";
        document.getElementById("skip").classList.remove("disabled");
        typeWriterTitle();
    }, 3000)
}