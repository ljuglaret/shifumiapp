import { Module } from "module"
import { type } from "os"


type MatchNul = "MatchNul"
enum Joueur {
    JoueurHumain = "JoueurHumain",
    Ordinateur = "Ordinateur"
}

export enum PFC  {
    P = "Pierre",
    F = "Feuille",
    C = "Ciseaux"
};

export enum PFCLS {
    P = "Pierre",
    F = "Feuille",
    C = "Ciseaux" ,
    L = "Lezard",
    S = "Spoke"
}

export enum Poke {
    Bulbi = "Bulbizard",
    Cara = "Carapuce",
    Sala = "Salameche",
}


type Mode = PFC | PFCLS | Poke

type UnePartie<Mode>  =  { choixJoueur : Mode, choixOrdi : Mode , vainqueur : Joueur|MatchNul , scoreJoueur : number}
//Un exemple
let x : UnePartie<PFC> = {choixJoueur : PFC.P,choixOrdi : PFC.P, vainqueur : "MatchNul",scoreJoueur:0}

export function comparePFC(j1 : PFC, j2 : PFC) : number{
    if (j1 === PFC.P && j2 === PFC.F){return -1}
    if (j1 === PFC.F && j2 === PFC.C){return -1}
    if (j1 === PFC.C && j2 === PFC.P){return -1}
    if (j1 === j2) {return 0}
    else return 1
}

export function comparePFCLS(j1 : PFCLS, j2 : PFCLS) : number{
    if (j1 === PFCLS.P && j2 === PFCLS.F){return -1}
    if (j1 === PFCLS.F && j2 === PFCLS.C){return -1}
    if (j1 === PFCLS.C && j2 === PFCLS.P){return -1}
    if (j1 === PFCLS.P && j2 === PFCLS.S){return -1}
    if (j1 === PFCLS.F && j2 === PFCLS.L){return -1}
    if (j1 === PFCLS.C && j2 === PFCLS.L){return -1}
    if (j1 === PFCLS.L && j2 === PFCLS.P){return -1}
    if (j1 === PFCLS.L && j2 === PFCLS.C){return -1}
    if (j1 === PFCLS.S && j2 === PFCLS.L){return -1}
    if (j1 === PFCLS.S && j2 === PFCLS.F){return -1}
    if (j1 === j2) {return 0}
    else return 1
}

export function comparePoke(j1 : Poke , j2 : Poke) : number{
    if (j1 === Poke.Bulbi && j2 === Poke.Sala){return -1}
    if (j1 === Poke.Sala && j2 === Poke.Cara){return -1}
    if (j1 === Poke.Cara && j2 === Poke.Bulbi){return -1}
    if (j1 === j2) {return 0}
    else return 1
}



export function reglesPFC (j1 : PFC , j2 : PFC)  : string {
    if (j1 === PFC.P && j2 === PFC.F){return "La pierre est enveloppee par la feuille" }
    if (j1 === PFC.F && j2 === PFC.C){return "La feuille est coupée par les ciseaux" }
    if (j1 === PFC.C && j2 === PFC.P){return "Les ciseaux sont cassés par la pierre"}
    if (j1 === j2) {return "Egalite"}
    if (j1 === PFC.P && j2 === PFC.C){ return "La pierre casse les ciseaux."}
    if (j1 === PFC.F && j2 === PFC.P){return "La feuille entoure la pierre"}
    if (j1 === PFC.C && j2 === PFC.F){return "Les ciseaux coupent la feuille"}
    else return ""      
}
  
export function reglesPFCLS (j1 : PFCLS , j2 : PFCLS)  : string {
    if (j1 === PFCLS.P && j2 === PFCLS.F){return "La pierre est enveloppee par la feuille" }
    if (j1 === PFCLS.F && j2 === PFCLS.C){return "La feuille est coupée par les ciseaux" }
    if (j1 === PFCLS.C && j2 === PFCLS.P){return "Les ciseaux sont cassés par la pierre"}
    if (j1 === PFCLS.P && j2 === PFCLS.C){ return "La pierre casse les ciseaux."}
    if (j1 === PFCLS.F && j2 === PFCLS.P){return "La feuille entoure la pierre"}
    if (j1 === PFCLS.C && j2 === PFCLS.F){return "Les ciseaux coupent la feuille"}

    if (j1 === PFCLS.P && j2 === PFCLS.S){return "La pierre est détruite par Spock"}
    if (j1 === PFCLS.F && j2 === PFCLS.L){return "Le papier est mangé par le lézard"}
    if (j1 === PFCLS.C && j2 === PFCLS.S){return "Les ciseaux sont écrasés par Spock"}
    if (j1 === PFCLS.L && j2 === PFCLS.P){return "Le lezard est écrasé par la pierre"}
    if (j1 === PFCLS.S && j2 === PFCLS.L){return "Spock est empoisonné par le lézard"}
    if (j1 === PFCLS.S && j2 === PFCLS.F){return  "Spock est desavoué par le papier"}
    if (j1 === PFCLS.P && j2 === PFCLS.L){return  "La pierre écrase le lézard."}
    if (j1 === PFCLS.F && j2 === PFCLS.S){return  "Le papier désavoue Spock"}
    if (j1 === PFCLS.C && j2 === PFCLS.L){return "Les ciseaux décapitent le lézard"}
    if (j1 === PFCLS.L && j2 === PFCLS.P){return "Le lézard mange le papier"}
    if (j1 === PFCLS.L && j2 === PFCLS.S){return "Le lézard empoisonne Spock"}
    if (j1 === PFCLS.S && j2 === PFCLS.P){return  "Spock détruit la pierre"}
    if (j1 === PFCLS.S && j2 === PFCLS.C){return  "Spock écrase les ciseaux"} 
    if (j1 === j2) {return "Egalite"}
    else return ""      
}


export function reglesPoke (j1 : Poke , j2 : Poke)  : string {
    if (j1 === Poke.Cara && j2 === Poke.Bulbi){return "Carapuce est absorbé par Bulbizard " }
    if (j1 === Poke.Sala && j2 === Poke.Cara){return "Salameche est éteint par Carapuce" }
    if (j1 === Poke.Bulbi && j2 === Poke.Sala){return "Bulbizard est brûlé par Salameche "}
    if (j1 === j2) {return "Egalite"}
    if (j1 === Poke.Bulbi && j2 === Poke.Cara){ return "Bulbizard absorbe Carapuce"}
    if (j1 === Poke.Cara && j2 === Poke.Sala){return "Carapuce éteint Salameche"}
    if (j1 === Poke.Sala && j2 === Poke.Bulbi){return "Salameche brûle Bulbizard"}
    else return ""      
}

