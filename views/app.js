 anime({
                targets: '.specific .specs',
                translateX: [
                    { value: -400, duration: 0, delay: 0 },
                    { value: 0, duration: 1500, delay: 100 }
                ],
                delay: anime.stagger(100, { from: 'center' })
            });