// select result form
const resultForm = document.getElementById("result_form");
// select validation msg
const msg = document.querySelector(".msg");
// select preloader
const preloader = document.querySelector(".preloader");
// select result out div
const resultOut = document.querySelector(".result-out");
// passing audio select
const passAudio = document.getElementById("pass_sound");
// fail sound select 
const failAudio = document.getElementById('fail_sound');

// Get Result
resultForm.onsubmit = (e) => {
  // stop default action
  e.preventDefault();

  // get input data
  const form_data = new FormData(e.target);
  const data = Object.fromEntries(form_data);

  // input validation
  if (!data.subject || !data.marks) {
    msg.innerHTML = createAlert("All fields required!", "danger");
  } else if (!isNumber(parseInt(data.marks))) {
    msg.innerHTML = createAlert("Marks must be in number!", "danger");
  } else {
    msg.innerHTML = "";
    preloader.style.display = "block";
    resultOut.style.display = 'none';
    
    const { gpa, grade } = getResult(parseInt(data.marks));
    
    // Show result after 3s
    setTimeout(() => {
        preloader.style.display = "none";
        resultOut.style.display = 'block';

      resultOut.innerHTML = `<p><b>Subject:</b> ${data.subject}</p>
            <p><b>Marks:</b> ${data.marks}</p>
            <p><b>GPA:</b> ${gpa}</p>
            <p><b>Grade:</b> ${grade}</p>`;

      // play the passing audio
      if (parseInt(data.marks) >= 33) {
        passAudio.play();

        // stop audio after 3s
        setTimeout(() => {
          passAudio.stop();
        }, 3000);
      }else{
        // play fail audio 
        failAudio.play();

        // stop fail audio after 3s 
        setTimeout(() => {
            failAudio.stop();
        }, 3000);
      }


    }, 3000); // result timeout end 
  }
};
