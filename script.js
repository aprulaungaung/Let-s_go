function spinBall(){
  let ball = document.querySelector(".ball");
  ball.style.animation = "spinningBall 5s linear infinite";
}

function throwingBall(){
  let number = Math.random() * 5;
  number = Math.floor(number) + 1;

  let runningSound1 = new Audio("audio/runningSound1.mp3");
  let runningSound2 = new Audio("audio/runningSound2.mp3");
  let runningSound3 = new Audio("audio/runningSound3.mp3");
  let applause = new Audio("audio/applause.mp3");
  let xyloPhone = new Audio("audio/xylophone.mp3");
  let girlOw = new Audio("audio/girlOw.mp3");
  let ooh = new Audio("audio/boooh.mp3");
  let throwGirl = document.createElement("img");

  throwGirl.setAttribute("src", "images/girl2.PNG");
  throwGirl.classList.add("girl2");
  document.querySelector(".button-container").append(throwGirl);
  document.querySelector(".girl1").style.visibility = "hidden";

  switch (number) {
    case 1:

    document.querySelector(".ball").style.animation = "runningBall1 7.8s";

   girlOw.play();
   runningSound1.play();
   setTimeout(function(){
     let spark1 = document.createElement("img");
     let spark2 = document.createElement("img");
     let spark3 = document.createElement("img");


     spark1.setAttribute("src", "images/spark1.PNG");
     spark2.setAttribute("src", "images/spark2.PNG");
     spark3.setAttribute("src", "images/spark3.PNG");
     spark1.classList.add("spark1");
     spark2.classList.add("spark2");
     spark3.classList.add("spark3");
     spark3.style.position= "absolute";
     spark3.style.zIndex = "1";
     document.querySelector(".top-section").append(spark1);
     document.querySelector(".button-container").prepend(spark2);
     document.querySelector(".stand-container").prepend(spark3);

   },3000)
   setTimeout(function(){
    xyloPhone.play();
    applause.play();
  },5000)
    setTimeout(function(){

      document.querySelector(".girl2").style.visibility = "hidden";

      document.querySelector(".girl1").style.visibility = "visible";

      location.reload();
    },7500)

    break;

    case 2:

    document.querySelector(".ball").style.animation = "runningBall2 7s";
    girlOw.play();
    let sound3 = new Audio("audio/runningSound3.mp3");
    sound3.play();
    setTimeout(function(){
      let funnySound = new Audio("audio/funnySound2.mp3");
      let mySpark = document.createElement("img");
      funnySound.play();
      mySpark.setAttribute("src", "images/spark.PNG");
      mySpark.classList.add("spark");
      document.querySelector(".stand-container").prepend(mySpark);

    },5000)
    setTimeout(function(){

      document.querySelector(".girl2").style.visibility = "hidden";

      document.querySelector(".girl1").style.visibility = "visible";

      location.reload();
    },7000)

    break;
    case 3:

    document.querySelector(".ball").style.animation = "runningBall3 8s"
    girlOw.play();
    runningSound1.play();
    setTimeout(function(){
      xyloPhone.play();
    },5500)
    setTimeout(function(){

      ooh.play();
    },6000)
    setTimeout(function(){

      document.querySelector(".girl2").style.visibility = "hidden";

      document.querySelector(".girl1").style.visibility = "visible";

      location.reload();
    },8000)

    break;
    case 4:

    document.querySelector(".ball").style.animation = "runningBall4 7s";
    girlOw.play();
    let myAeroplane = document.createElement("img");
    myAeroplane.setAttribute("src", "images/aeroplane.PNG");
    myAeroplane.classList.add("aeroplane");
    document.querySelector(".stand-container").prepend(myAeroplane);
    let questionMark = document.createElement("div");
    questionMark.innerHTML = "<span>❓</span>";
    questionMark.classList.add("questionMark");
    document.querySelector(".stand-container").prepend(questionMark);

    runningSound2.play();
    setTimeout(function(){
      let goodBye = new Audio("audio/childGoodbye.mp3");
      goodBye.play();
    },1300)
    setTimeout(function(){

      document.querySelector(".girl2").style.visibility = "hidden";

      document.querySelector(".girl1").style.visibility = "visible";

      location.reload();
    },7000)

    break;
    case 5:

    document.querySelector(".ball").style.animation = "runningBall5 7s";
    girlOw.play();
    runningSound1.play();
    setTimeout(function(){
      ooh.play();
    },2500)
    setTimeout(function(){

      document.querySelector(".girl2").style.visibility = "hidden";

      document.querySelector(".girl1").style.visibility = "visible";

      location.reload();
    },7000)

    break;

    default: console.log("error");

  }


}
