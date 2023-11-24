document.addEventListener("DOMContentLoaded", function () {
    const learnMoreLink = document.getElementById("learn-more");
    const ctaSection = document.getElementById("cta");

    if (learnMoreLink && ctaSection) {
      learnMoreLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior
        const yOffset = ctaSection.getBoundingClientRect().top;
        window.scroll({
          top: yOffset,
          behavior: "smooth", // Smooth scrolling
        });
      });
    }
  });


  //contact

  var submit = document.getElementById('submit-btn');
submit.addEventListener('click', function (e) {
    e.preventDefault();
    
    // Get the values of all form fields
    var name = document.getElementById('name').value;
    var mail = document.getElementById('mail').value;
    var phone = document.getElementById('phone').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
    
    // Get the corresponding error message elements
    var nameError = document.getElementById('name-error');
    var mailError = document.getElementById('mail-error');
    var phoneError = document.getElementById('phone-error');
    var subjectError = document.getElementById('subject-error');
    var messageError = document.getElementById('message-error');
    
    // Reset all previous error messages
    nameError.textContent = '';
    mailError.textContent = '';
    phoneError.textContent = '';
    subjectError.textContent = '';
    messageError.textContent = '';
    
    // Perform validation
    var isValid = true;
    
    if (!name) {
        nameError.textContent = 'Please fill in your name.';
        isValid = false;
    }
    
    if (!mail) {
        mailError.textContent = 'Please fill in your email address.';
        isValid = false;
    }
    
    if (!phone) {
        phoneError.textContent = 'Please fill in your phone number.';
        isValid = false;
    }
    
    if (!subject) {
        subjectError.textContent = 'Please fill in the subject.';
        isValid = false;
    }
    
    if (!message) {
        messageError.textContent = 'Please fill in your message.';
        isValid = false;
    }
    
    // If all fields are filled, submit the form
    if (isValid) {
        var body = 'name: ' + name + '<br/> phone: ' + phone + '<br/> email: ' + mail + '<br/> subject: ' + subject + '<br/> message: ' + message;

        Email.send({
            SecureToken: "e1136666-0b81-46ce-bc86-113eab8ea0e5",
            To: 'contact@liftmyads.com',
            From: "binit@cashlelo.com",
            Subject: subject,
            Body: body
        }).then(function (message) {
            // Reset the form fields after a successful email send
            document.getElementById('name').value = '';
            document.getElementById('mail').value = '';
            document.getElementById('phone').value = '';
            document.getElementById('subject').value = '';
            document.getElementById('message').value = '';

            // Display a SweetAlert2 pop-up with the success message
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Your query has been sent to Liftmyads. Our team will contact you soon.',
            });
        });
    }
});

  // slider

// const backgroundImageUrls = [
//     "./assets/images/hero-banner-1.png",
//     "./assets/images/hero-banner-2.png",
//     "./assets/images/hero-banner-3.png",
//     // Add more image URLs as needed
// ];

// let currentIndex = 0;
// const backgroundContainer = document.querySelector('.hero-background');

// function changeBackgroundImage() {
//     currentIndex = (currentIndex + 1) % backgroundImageUrls.length;
//     const imageUrl = backgroundImageUrls[currentIndex];
//     backgroundContainer.style.backgroundImage = `url(${imageUrl})`;
// }

// // Change the background image every 5 seconds (adjust as needed)
// setInterval(changeBackgroundImage, 3000);
