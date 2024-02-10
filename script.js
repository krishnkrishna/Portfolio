//about Section
const tablinks=document.getElementsByClassName("tab-links");
const tabContents=document.getElementsByClassName("tab-contents");


function opentab(event,tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    for(tabcontent of tabContents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

//Mobile view
const sidemenu=document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right="0";

}

function closemenu(){
    sidemenu.style.right="-200px";
}

//Contact message
const scriptURL = 'https://script.google.com/macros/s/AKfycbwTpRlqGI6oXadJdptzWYJ6_6TgfPztuITToc561rjOgAo8gtxen2QNmTVp8mVMRVaTGw/exec'
const form = document.forms['submit-to-google-sheet']
const msg=document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
            msg.innerHTML="Message sent successfully";
            setTimeout(function(){
                msg.innerHTML="";
            },5000);
            form.reset()
        })
      .catch(error => console.error('Error!', error.message));
  });


//contact form
const form1 = document.forms['submit-to-google-sheet'];
const submitButton = document.getElementById("submit-btn");

form1.addEventListener('submit', e => {
    e.preventDefault();
    
    // Apply zoom effect to the button
    submitButton.classList.add('zoom-effect');
    
    // Reset the zoom effect after 500ms (adjust as needed)
    setTimeout(() => {
        submitButton.classList.remove('zoom-effect');
    }, 500);
    
    // Your form submission logic here...
});




