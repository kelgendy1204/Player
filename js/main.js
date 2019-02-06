    //////////////////////////////////
    //////// Removing Loader ////////
    ////////////////////////////////

    const loader = document.querySelector('.loader');
    setTimeout(function () {
        loader.style.display = 'none'
    }, 2000);


    // const container = document.querySelector('.content-container');
    // container.addEventListener('click', function (e) {
    //     const elment = e.target.parentNode.dataset.key;
    //     const audios = document.querySelectorAll('audio');
    //     const playBtn = document.querySelector('.playimg')
    //     const words = document.querySelectorAll('.words div');
    //     words.forEach(word => {
    //         word.style.backgroundColor = 'white';
    //     });
    //     audios.forEach(audio => {
    //         audio.pause();
    //         if (audio.dataset.key === elment) {
    //             if (e.target.parentNode.dataset.key != 1) {
    //                 e.target.parentNode.style.backgroundColor = "yellow"
    //                 audio.currentTime = 0;
    //                 audio.play();
    //                 audio.addEventListener('ended', () => {
    //                     e.target.parentNode.style.backgroundColor = "white"
    //                 })
    //             } else {
    //                 audio.currentTime = 0;
    //                 audio.play();
    //             }
    //         } else if (e.target === playBtn) {

    //         }
    //     })
    // })

    function playSound() {

        //////////////////////////////////
        //////// Adding Variables ///////
        ////////////////////////////////

        const words = document.querySelectorAll('.words div');
        const speaker = document.querySelector('.speaker');
        const audios = document.querySelectorAll('audio');
        const audioBtn = document.querySelector('.audio-btn');
        const playImg = document.querySelector('.playimg');

        //////////////////////////////////
        ////// Remove Acitve Class //////
        ////////////////////////////////

        function removeActive() {
            for (let i = 0; i < words.length; i++) {
                words[i].classList.remove('active');
            }
        }

        //////////////////////////////////
        //////// Play Words Sound ///////
        ////////////////////////////////

        words.forEach(word => word.addEventListener('click', () => {
            removeActive()
            word.classList.add('active');
            audios.forEach(audio => {
                audio.pause();
                audio.currentTime = 0;
                if (word.dataset.key === audio.dataset.key) {
                    console.log('done')
                    audio.play();
                    audio.addEventListener('ended', () => {
                        word.classList.remove('active');
                    })
                }
            })
        }))

        //////////////////////////////////
        //////// Play Title Sound ///////
        ////////////////////////////////

        speaker.addEventListener('click', () => {
            removeActive()
            audios.forEach(audio => {
                audio.pause();
                audio.currentTime = 0;
                if (speaker.dataset.key === audio.dataset.key) {
                    audio.play();
                }
            })
        })

        //////////////////////////////////
        /////// Play Button Sound ///////
        ////////////////////////////////

        audioBtn.addEventListener('click', () => {
            for (let i = 0; i < audios.length; i++) {
                let audio = audios[i];
                // Reseting every audio
                audio.pause();
                audio.currentTime = 0;
                audio.addEventListener('ended', function() {
                    // Play every audio on the end of the previous
                    const nextAudio = audios[i + 1];
                    if(nextAudio) {
                        nextAudio.pause();
                        nextAudio.currentTime = 0;
                        nextAudio.play();
                    }
                });
            }
            audios[0].play();

            // for (let i = 0; i < words.length; i++) {
                // words[i].classList.add('active');
                // audios.forEach(audio => {
                    // audio.pause();
                    // audio.currentTime = 0;
                    // if (words[i].dataset.key === audio.dataset.key) {
                        // audio.play();
                        // audio.addEventListener('ended', () => {
                            // words[i].classList.remove('active');
                        // })
                    // }
                // })
            // }
        });
    }
    playSound();
