// toggle icon navbar

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}














document.getElementById("readMoreBtn").addEventListener("click", function() {
    document.getElementById("additionalText").classList.remove("hidden");
    this.style.display = "none";
});


//toggle icon navbar

//scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{

    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight; 
        let id = sec.getAttribute('id');

//1 > -100  && 1 < -100 + 667

        if(top >= offset && top < offset + height){
            //active navbar links
            // console.log(`${top} >= ${offset} && ${top} < ${offset} +${height}  `);
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            //active section for animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to use animation that repeats on scroll use this 
        else {
            sec.classList.remove('show-animate');
        }

    });


    //Sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky' , window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links  (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation on footer on scroll
    let footer =document.querySelector('footer');

    footer.classList.toggle('show-animate' , this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
    
}



// Define an array of project objects containing image source and project name
const projects = [
    { 
        projectName: 'Mana Clg',
        imgSrc: './project images/manaclg.png',
        href: 'https://manaclg.com/'
    },
    { 
        projectName: 'LEVEL UP',
        imgSrc: './project images/levelup.jpeg',
        href: 'https://manaclg.com/levelup/'
    },
    { 
        projectName: 'Entertainer',
        imgSrc: './project images/entertained.jpg',
        href: 'https://entertained.in/'
    },
    { 
        projectName: 'Weather App',
        imgSrc: './project images/weather.png',
        href: 'https://weather-app-by-govardhan.netlify.app/'
    },
    { 
        projectName: 'To Do List App',
        imgSrc: './project images/todolist.png',
        href: 'https://todolist-bygova.netlify.app/' 
    },
    { 
        projectName: 'Quiz App',
        imgSrc: './project images/quizapp.png',
        href: 'https://javascript-quiz-by-gova.netlify.app/'
    },
    { 
        projectName: 'Password Generator',
        imgSrc: './project images/passwordgenerator.png',
        href: 'https://password-generator-by-gova.netlify.app/'
    },
    { 
        projectName: 'Note Pad',
        imgSrc: './project images/notepad.png',
        href: 'https://notepad-by-gova.netlify.app/'
    },
    { 
        projectName: 'Age Calculator',
        imgSrc: './project images/agecalculator.png',
        href: 'https://agecalculator-by-gova.netlify.app/'
    },
    { 
        projectName: 'Quote Generator',
        imgSrc: './project images/quotegenerator.jpg',
        href: 'https://quotegenerator-bygova.netlify.app/'
    },
    { 
        projectName: 'QR Generator',
        imgSrc: './project images/qrgenerator.png',
        href: 'https://qrcode-generator-by-gova.netlify.app/'
    },
    { 
        projectName: 'Toast Notification',
        imgSrc: './project images/toastnotification.jpg',
        href: 'https://toast-bygova.netlify.app/'
    },
    { 
        projectName: 'Music Player',
        imgSrc: './project images/musicplayer.png',
        href: 'https://musicplayer-album-bygova.netlify.app/'
    },
    { 
        projectName: 'Stop Watch',
        imgSrc: './project images/stopwatch.jpg',
        href: 'https://stopwatch-by-gova.netlify.app/'
    },
    { 
        projectName: 'Calculator',
        imgSrc: './project images/calculator.png',
        href: 'https://calculatorapp-bygova.netlify.app/'
    },
    { 
        projectName: 'Pop Up',
        imgSrc: './project images/popup.jpg',
        href: 'https://popupbygova.netlify.app/'
    },
    { 
        projectName: 'Hide & Show Password',
        imgSrc: './project images/Hide & Show Password.jpg',
        href: 'https://hideshowpassby-gova.netlify.app/'
    },
    { 
        projectName: 'Simple Profile Website',
        imgSrc: './project images/Simple Profile Website.jpg',
        href: 'https://lisaprofile-bygova.netlify.app/'
    },
    { 
        projectName: 'Image Gallery',
        imgSrc: './project images/Image Gallery.jpg',
        href: 'https://image-gallery-bygova.netlify.app/'
    },
    { 
        projectName: 'Form Creation and Validation',
        imgSrc: './project images/Form Creation and Validation.jpg',
        href: 'https://studentform-bygova.netlify.app/'
    },
    { 
        projectName: 'Form to Google Sheets',
        imgSrc: './project images/Form to Google Sheets.jpeg',
        href: 'https://studentformsubmission-bygova.netlify.app/'
    },
    { 
        projectName: 'Strength Password',
        imgSrc: './project images/Strength Password.jpg',
        href: 'https://strength-passwordbygova.netlify.app/'
    },
    { 
        projectName: 'Text to Speech',
        imgSrc: './project images/Text to Speech.png',
        href: 'https://text-to-voice-converter-bygova.netlify.app/'
    },
    { 
        projectName: 'Launching Page',
        imgSrc: './project images/Launching Page.jpg',
        href: 'https://manaclg-comingsoonpage-bygova.netlify.app/'
    },
    { 
        projectName: 'Image Animation',
        imgSrc: './project images/Image Animation.jpg',
        href: 'https://imageanimation-bygova.netlify.app/'
    },
    { 
        projectName: 'Time & Calendar',
        imgSrc: './project images/Time & Calendar.jpg',
        href: 'https://time-calender-bygova.netlify.app/'
    },
    { 
        projectName: 'Select Menu Design',
        imgSrc: './project images/Select Menu Design.jpg',
        href: 'https://select-design-bygova.netlify.app/'
    },
    { 
        projectName: 'Progress Bar', 
        imgSrc: './project images/Progress Bar.jpg',
        href: 'https://animated-progressbar-bygova.netlify.app/'
    },
    { 
        projectName: 'Product Design',
        imgSrc: './project images/Product Design.jpg',
        href: 'https://product-design-bygova.netlify.app/'
    },
    { 
        projectName: 'Clock',
        imgSrc: './project images/clock.png',
        href: 'https://clock-bygova.netlify.app/'
    },
    { 
        projectName: 'Drag & Drop Items',
        imgSrc: './project images/Drag & Drop Items.png',
        href: 'https://drap-drop-items-bygova.netlify.app/'
    },
    { 
        projectName: 'Image Search Engine',
        imgSrc: './project images/imagesearchengine.png',
        href: 'https://imagesearchengine-bygova.netlify.app/'
    }
];

// Get the container element
const container = document.getElementById('container');

// Loop through the projects array and dynamically create HTML elements
projects.forEach((project, index) => {
    // Create the projects-container div
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('projects-container');

    // Create the image box
    const imgBox = document.createElement('div');
    imgBox.classList.add('img-box');

// create anchor tag
    const anchor = document.createElement('a');
    anchor.href = project.href;



    // Create the image element
    const img = document.createElement('img');
    img.src = project.imgSrc;
    img.alt = project.projectName;

    // Append the image to the image box


    // Create the p tag for project name
    const projectName = document.createElement('p');
    projectName.textContent = project.projectName;

    // Append the image box and project name paragraph to the project container
    anchor.appendChild(img);
    imgBox.appendChild(anchor);
    projectContainer.appendChild(imgBox);
    projectContainer.appendChild(projectName);

    // Append the project container to the main container
    container.appendChild(projectContainer);
});
