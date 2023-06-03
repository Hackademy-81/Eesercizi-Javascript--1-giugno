// ESERCIZIO 1
// let v= 17

// svolgimento if/else if/else
// if (v<18) {
//     console.log("insufficiente");
// } else if (v>=18 && v<21) {
//     console.log("sufficiente");
// } else if (v>=21 && v<24) {
//     console.log("buono");
// } else if (v>=24 && v<27) {
//     console.log("distinto");
// } else if (v>=27 && v<29) {
//     console.log("ottimo");
// } else if (v==30) {
//     console.log("eccellente");
// }

// svolgimento switch

// switch(true) {
//     case v<18:
//         console.log("insufficiente");
//         break;
//     case v>=18 && v<21:
//         console.log("sufficiente");
//         break;
//     case v>=21 && v<24:
//         console.log("buono");
//         break;
//     case v>=24 && v<27:
//         console.log("distinto");
//         break;
//     case v>=27 && v<30:
//         console.log("ottimo");
//         break;
//     case v==30:
//         console.log("eccellente");
//         break;
//     default:
//         console.log("questo voto non esiste");

// }


// ESERCIZIO 2

// let num= 2

// for (let i=1; i<=10; i++) {
//     let table= num * i;
//     console.log(table);
// }

// ESERCIZIO 3

// let temp= -11

// svolgimento if/else if/else
// if (temp<-10) {
//     console.log("copriti...ancora ti raffreddi");
// } else if (temp<0) {
//     console.log("non è tanto il freddo quanto l'umidità");
// } else if (temp<20) {
//     console.log("non ci sono più le mezze stagioni");
// } else if (temp<30) {
//     console.log("mi dia una peroni sudata");
// } else if (temp>=30) {
//     console.log("lu mare, lu sole, lu ientu");
// }


// svolgimento switch case

// switch (true) {
//     case temp<-10:
//         console.log("copriti...ancora ti raffreddi");
//         break;
//     case temp<0:
//         console.log("non è tanto il freddo quanto l'umidità");
//         break;
//     case temp<20:
//         console.log("non ci sono più le mezze stagioni");
//         break;
//     case temp<30:
//         console.log("mi dia una peroni sudata");
//         break;
//     case temp>=30:
//         console.log("lu mare, lu sole, lu ientu");
//         break;
//     default:
//         console.log("questa temperatura non è compresa");
// }

// ESERCIZIO 4
// let drink= prompt("Selezionare la bevanda desiderata: \ 1)acqua \ 2)coca cola \ 3)birra");

// while (drink!=1 && drink!=2 && drink!=3) {
//     drink= prompt("Selezionare la bevanda desiderata: \ 1)acqua \ 2)coca cola \ 3)birra");
// }

// if (drink==1) {
//     drink= alert("è stata selezionata acqua");
// } else if (drink==2) {
//     drink= alert("è stata selezionata coca cola");
// } else if (drink==3) {
//     drink= alert("è stata selezionata birra");
// }

// ESERCIZIO EXTRA

let startGame= alert("Benvenuti nel Super Mario Bros!");
startGame= prompt("Vuoi giocare? \ 1)Sì \ 2)No");

while (startGame!=1 && startGame!=2) {
    startGame= prompt("Vuoi giocare? \ 1)Sì \ 2)No");
}

if (startGame==1) {
    let player= prompt ("Selezionare il giocatore: \ 1)Mario \ 2)Luigi");
    while (player!=1 && player!=2) {
        player= prompt ("Selezionare il giocatore: \ 1)Mario \ 2)Luigi"); 
    }
    let enemy= alert("Adesso dovrai superare due prove, in cui dovrai sfidare la sorte per liberare la regina");
    enemy= alert("La prima prova consiste nell'indovinare un numero compreso tra 0 e 3 che consenta di sbloccare la combinazione vincente per aprire la porta e passare alla prova successiva...avrai a disposizione 2 tentativi");

    let numr= Number(window.prompt("Inserisci un numero compreso tra 0 e 3"));
    let tent=1;
    
    while (numr!=0 && tent<2 ) { 
        numr= Number(window.prompt("Ritenta...Inserisci un numero compreso tra 0 e 3"));
        tent++;
        
    } 
    if (numr!=0 && tent>=2) {

        let failed= alert("Hai perso");
        
    } else if (numr==0) { 

       for(let i=1; i<=10; i++) {
        let table3= 3;
        numr= numr+3;
       }

       let win= alert(`Hai indovinato il numero corretto e la combinazione vincente è ${numr}`);

       enemy= alert("La seconda prova consiste nel lanciare un dado per 7 volte...se il punteggio accumulato sarà elevato, riuscirai a guadagnare denaro sufficiente per riscattare la liberazione della regina");

       let punteggio= 0;

      for (let i=1; i<=7; i++) {
        let random= Math.floor(Math.random() * (6) + 1);
        punteggio= punteggio + random;
        let dado= alert (`Al tiro di dado numero ${i}, è uscito ${random} ed il punteggio totalizzato è ${punteggio}`);

        }

        switch (true) {
            case punteggio<6:
                enemy= alert("punteggio troppo basso...hai perso!");
                break;
            case punteggio>=6 && punteggio<12:
                enemy= alert ("punteggio non male, ma hai perso!");
                break;
            case punteggio>=12 && punteggio<30:
                enemy= alert ("ci è mancato poco...hai perso!");
                break;
            case punteggio>=30:
                enemy= alert("FANTASTICO...hai vinto!Hai liberato la regina!!!");
                break;
            default:
                enemy= alert("il punteggio non è valido");
        }

        

    }


} else {
    enemy= alert("Ci dispiace...Arrivederci!")
}












