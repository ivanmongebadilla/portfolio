const observer_left = new IntersectionObserver(entries => {
    // Loop over the entries
    console.log(entries)
    entries.forEach(entry => {
        // If the element is visible
        if (entry.isIntersecting) {
            // Add the animation class
            entry.target.classList.add('animationLeftTitle');
        }
    });
})

const observer_right = new IntersectionObserver(entries => {
    console.log('Entering oberserver_right')
    entries.forEach(entry => {
        // If the element is visible
        if (entry.isIntersecting) {
            // Add the animation class
            entry.target.classList.add('animationRightTitle');
        }
    });
})

const observer_movein = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        // If the element is visible
        if (entry.isIntersecting) {
            // Add the animation class
            entry.target.classList.add('animationMoveIn');
        }
    });
})

observer_right.observe(document.querySelector('.aboutme__title'))
observer_left.observe(document.querySelector('.resume__title'))
// observer_right.observe(document.querySelector('.right__title'))
observer_right.observe(document.querySelector('.projects__title'))
observer_right.observe(document.querySelector('.contactme__title'))
observer_movein.observe(document.querySelector('.movein'))
observer_movein.observe(document.querySelector('.resume__eduaction'))
observer_movein.observe(document.querySelector('.resume__experience'))
observer_movein.observe(document.querySelector('.form__container'))

function close_function() {
    document.getElementById('navi-toogle').checked = false
}

function send_email() {
    if (document.getElementById("input_name").value === "" || document.getElementById("input_email").value === "" || document.getElementById("textarea").value === "") {
        alert("Please fill all inputs")
    } else {
        var params = {
            name: document.getElementById("input_name").value,
            email: document.getElementById("input_email").value,
            message: document.getElementById("textarea").value
        }
    
        const serviceID = "service_bpjxh4y";
        const templateID = "template_bb2m4nx";
    
        emailjs.send(serviceID, templateID, params)
        .then (
            res => {
                document.getElementById("input_name").value = "";
                document.getElementById("input_email").value = "";
                document.getElementById("textarea").value = "";
                console.log(res);
                alert("Message sent successfully")
            }
        )
        .catch((err) => {
            console.log(err)
            alert("There has been an error")
        })
    }

    
}
