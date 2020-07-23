for (let cont=0; cont<100; cont++) {
    if(cont % 3 === 0 && cont % 5 ===0){
        console.log(`${cont} é multiplo de 3 e 5`)
    } else if (cont % 3 === 0){
        console.log(`${cont} é multiplo de 3`)
    } else if(cont % 5 === 0){
        console.log(`${cont} é multiplo de 5`)
    }
    }
