(function () {
    'use strict'
  
   
var forms = document.querySelectorAll('.needs-validation')
  
  
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()







  const cashernamedisplay = document.getElementById('cashernamedisplay');
  const poscashername = document.getElementById('poscashername')
  const pindisplay = document.getElementById('pindisplay');
  const casher1name = document.getElementById('casher1');
  const casher2name = document.getElementById('casher2');
  const casher3name = document.getElementById('casher3');
  const casher4name = document.getElementById('casher4');
    


  function namedisplay() {
  var getcashername = document.getElementById('cashernamedisplay').value;
  localStorage.setItem('casher_name', getcashername);
  }
  



  function casher1() {
  
    cashernamedisplay.value = casher1name.value
    selectaudio.play()
  };

  function casher2() {
  
    cashernamedisplay.value = casher2name.value
    selectaudio.play()
  };

  function casher3() {
  
    cashernamedisplay.value = casher3name.value
    selectaudio.play()
  };

  function casher4() {
  
    cashernamedisplay.value = casher4name.value
    selectaudio.play()
  };

  function clearform() {
    cashernamedisplay.value = "";
    pindisplay.value = "";
    audio.play()
  }




  function pinpress(number1){

    console.log(pindisplay.length);
    if (pindisplay.value == 0 && number1 == '00') {
        pindisplay = '0.';
    } else if (pindisplay.value == 0 && number1 == '0') {
        pindisplayy = '0.';
    } else if (pindisplay.value == '' && number1 == '00') {
        pindisplay.value = '0';
    } else if (pindisplay.value.includes('.') === true && number1 =='.') {
        pindisplay.value = pindisplay.value;
    } else {
        pindisplay.value += number1;
    }

    if (pindisplay.value == '.') {
        pindisplay = '0.';
    };
  
    selectaudio.play()
};


function authentication() {
    var pincode = document.getElementById('pindisplay').value;
    if(pincode === "123123"  && cashernamedisplay.value === "Jan Denver") {
        window.location.assign("mainpos.html");
        alert("Welcome Jan Denver. You are now logged in. Tap Ok to continue.")
    } else if (pincode === "456456"  && cashernamedisplay.value === "Christine S.") {
        window.location.assign("mainpos.html");
        alert("Welcome Christine. You are now logged in. Tap Ok to continue.")
    } else if (pincode === "102102"  && cashernamedisplay.value === "Juan Cruz") {
        window.location.assign("mainpos.html");
        alert("Welcome Juan. You are now logged in. Tap Ok to continue.")
    } else if (pincode === "789789"  && cashernamedisplay.value === "Taylor S.") {
        window.location.assign("mainpos.html");
        alert("Welcome Taylor. You are now logged in. Tap Ok to continue.")
    } else {
        alert('Wrong Pin Code. Try Again!');
        return;
    }

    namedisplay()
    noBack()
}









const audio = new Audio();
audio.src = "./assets/beep.mp3";
audio.volume = .1;

const selectaudio = new Audio();
selectaudio.src = "./assets/selectbeep.mp3"
selectaudio.volume = 1;


window.history.forward();
function noBack() {
    window.history.forward();
}