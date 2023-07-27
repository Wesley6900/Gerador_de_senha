var save_number_digit = []

let gerador = function(){
    var mostrar_resultado = window.document.querySelector('#mostrar_resultado');
    var number_require_input = window.document.getElementById('number_require');



    let vetor = ['1','2','3','4','5','6','7','8','9','0',
        'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
        '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', ';', ':', "'",
         '"', '<', '>', ',', '.', '/', '?', '|', '\\', '`', '~'

    ]
    console.log(number_require_input);

    number_require_input = Number.parseInt(number_require_input.value);

    save_number_digit.push(number_require_input)

    let cont = 0
    var valores_aleatorios = '';
    if (isNaN(number_require_input) || number_require_input <= 0) {
        while(cont < 15){
            let busca_aleatoria = Math.floor(Math.random() * vetor.length)
            valores_aleatorios += vetor[busca_aleatoria];
        
            cont ++;
        }
    }


        while(cont < number_require_input){
            let busca_aleatoria = Math.floor(Math.random() * vetor.length)
            valores_aleatorios += vetor[busca_aleatoria];

            cont ++;
        }

        console.log(valores_aleatorios)
    
    mostrar_resultado.innerHTML = valores_aleatorios;
}

let icon_reload = window.document.getElementById('icon_reload');

let button_animation_click = function(){
    icon_reload.style.padding = '2px';
    icon_reload.style.background = '#e0e0e0';
    icon_reload.style.borderRadius = '100%';

    setTimeout(()=>{
        icon_reload.style.background = '#fff';
    },100)

    gerador();
}

icon_reload.addEventListener('click', button_animation_click);
