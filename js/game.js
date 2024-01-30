let start_story = document.querySelector('.cap1');

start_story.addEventListener('click', () => {
    const typed = setTimeout(() => {
        new Typed('.synopsis', {
            strings: [
                `This is a story set in the fictional city of Sant’Angelo,<br> 
            an old, yet relatively stable settlement in the East Coast<br> 
            of the United States of America.`,

                `You play the role of a young, yet talented private investigator<br>
            that works at one of the city’s most prestigious detective agencies,<br>
            one which is heavily focused on homicide.`,

                `You usually perform your duties alongside John, your mentor and<br> 
            leader of the agency, who hand-picked you out of several candidates<br>
            given your potential.`,

                `Most days come and go with relatively few noteworthy occasions:<br>
            an arrest here and there, some shocking discoveries and a few<br>
            happy endings.`,

                `While some at the agency would label these days “boring”, you<br>
            find them at least interesting.`,

                `This uneventfulness continues until one fateful day, when you’re<br>
            given a case that could very well change your life forever...`,

                `or end it altogether.`
            ],
            typeSpeed: 60,
            onComplete: function (self) {
                setTimeout(function () {
                    window.location.href = "../pc.html";
                }, 3000);
            }
        })

    }, 10000);
});