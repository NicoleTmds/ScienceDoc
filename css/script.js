// Seleciona todos os elementos .box
const boxes = document.querySelectorAll('.box');

// Itera sobre cada elemento .box
boxes.forEach(box => {
    // Adiciona um event listener de clique a cada .box
    box.addEventListener('click', function (e) {
        // Verifica se o elemento clicado é uma imagem dentro do carrossel
        if (e.target.tagName === 'IMG' && e.target.closest('.carrossel')) {
            // Define o tempo de delay em milissegundos
            const delayTime = 20000; //  milissegundos de delay

            // Verifica a posição do clique em relação ao centro horizontal do carrossel
            const boxRect = box.getBoundingClientRect();
            const clickX = e.clientX - boxRect.left;
            const centerX = boxRect.width / 2;

            // Rola para a esquerda ou direita imediatamente
            if (clickX > centerX) {
                this.scrollLeft += boxRect.width;
            } else {
                this.scrollLeft -= boxRect.width;
            }

            // Aplica o delay após iniciar a rolagem
            setTimeout(() => {
                // Aqui você pode adicionar qualquer ação que deseja realizar após o delay
                console.log('Delay terminado!');
            }, delayTime);
        }
    });
});
