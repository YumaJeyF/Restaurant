export function appearanceSection(entrie) {
    if (entrie.target.classList.contains('main-inf')) {
        if (entrie.target.classList.contains('main-body-first')) {
            const firstBlockInf = document.querySelectorAll('.body-first');
            firstBlockInf.forEach(el => {
                if (!el.classList.contains('animation')) el.classList.add('animation');
            });
        } else {
            const secondBlockInf = document.querySelectorAll('.body-second');
            secondBlockInf.forEach(el => {
                if (!el.classList.contains('animation')) el.classList.add('animation');
            });
        }
    }

    else if (entrie.target.classList.contains('team')) {
        if (entrie.target.classList.contains('our-members-team-first')) {
            const sixthBlockInf = document.querySelectorAll('.team-first');
            sixthBlockInf.forEach(el => {
                if (!el.classList.contains('animation')) el.classList.add('animation');
            });
        } else {
            const sixthBlockInf = document.querySelectorAll('.team-second');
            sixthBlockInf.forEach(el => {
                if (!el.classList.contains('animation')) el.classList.add('animation');
            });
        }
    }

    else if (entrie.target.classList.contains('third-block-left')) {
        const pictures = document.querySelectorAll('.pic > img');
        pictures.forEach(picture => {
            if (!picture.classList.contains('animation')) picture.classList.add('animation');
        });
    }

    else if (entrie.target.classList.contains('about-us-second')) changeAboutUsNumbers();

    else if (entrie.target.dataset.animLastChild) {
        if (!entrie.target.lastElementChild.classList.contains('animation')) entrie.target.lastElementChild.classList.add('animation');
    }
    
    else {
        if (!entrie.target.classList.contains('animation')) entrie.target.classList.add('animation');
    }

    function changeAboutUsNumbers() {
        const numbers = document.querySelectorAll('.number-change');
    
        numbers.forEach(number => {
            let start = number.innerHTML;
            let max = number.dataset.max;
    
            if (number.classList.contains('number-left')) {
                let interval = setInterval(() => {
                    if (start <= max) {
                        number.innerHTML = start++;
                    } else clearInterval(interval)
                }, 132);
            }
            else {
                let interval = setInterval(() => {
                    if (start <= max) {
                        number.innerHTML = start++;
                    } else clearInterval(interval)
                }, 40);
            }
        });
    }
}