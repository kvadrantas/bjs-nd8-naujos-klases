'use strict'
/*
sukurti klase Zmogus su savybem
vardas
pavarde
gimimoMetai
amzius (get)
pilnas vardas (get/set)
funksionalumas
labas() -> atspausdinti Labas Vardas Pavadre
 
sukurti klase Studentas paveldeta nuo zmogaus
mokykla
kursas
labas() -> atspausdinti Labas Vardas Pavadre, mokausi Mokykla
peritiIKitaKursa(balai) -> balai gali buti (1..100) jei balai < 35 i kita kursa nepereina
 
sukurti ir su sena ir su nauja sintakse
*/

var string = '';

class Zmogus {
    constructor (vardas, pavarde, gimimoMetai) {
        this.vardas = vardas,
        this.pavarde = pavarde,
        this.gimimoMetai = gimimoMetai
        }
        get amzius() {
            return new Date().getFullYear() - this.gimimoMetai;
        }
        get pilnasVardas() {
            return this.vardas + ' ' + this.pavarde;
        }
        set pilnasVardas(kas) {
            kas = kas.split(' ');
            this.vardas = kas[0];
            this.pavarde = kas[1];
        }
        labas () {
            string = "Labas " + this.vardas + ' ' + this.pavarde;
            if (this.constructor.name === 'Zmogus')
            console.log(string);
        }
}

class Studentas extends Zmogus {
    constructor(vardas, pavarde, gimimoMetai, mokykla, kursas) {
        super(vardas, pavarde, gimimoMetai),
        this.mokykla = mokykla,
        this.kursas = kursas
    }
    labas() {
        super.labas();
        string += ', mokausi ' + this.mokykla;
        console.log(string);
    }
    pereitiIKitaKursa (balai) {
        if(balai > 35) {
            console.log(this.vardas + ' i kita kursa pereina');
        } else {
            console.log(this.vardas + ' i kita kursa nepereina');
        }
    }
}

let z1 = new Zmogus('Jonas', 'Jonaitis', '1982')
console.log('\n--------------------- ZMOGUS ---------------------');
console.log('\nZmogus pilnas objektas:');
console.log(z1);
console.log('\nAmzius (get):');
console.log(z1.amzius);
console.log('\nPilnas vardas (get):');
console.log(z1.pilnasVardas);

z1.pilnasVardas = 'Petras Petraitis';
console.log('\nPilnas vardas (set): keiciam i Petras Petraitis');
console.log(z1);
console.log('\nlabas() -> atspausdinti Labas Vardas Pavadre:');
z1.labas();

console.log('\n--------------------- STUDENTAS ---------------------');
console.log('\nStudentas pilnas objektas:');
let s1 = new Studentas('Zigmas', 'Zigmaitis', '1991', 'BIT', 'Pirmas kuras');
console.log(s1);
console.log('\nlabas() -> atspausdinti Labas Vardas Pavadre, mokausi Mokykla:');
s1.labas();
console.log('\nKai balai < 35:');
s1.pereitiIKitaKursa(12);
console.log('\nKai balai > 35:');
s1.pereitiIKitaKursa(36);
