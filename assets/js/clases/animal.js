class Animal {
    constructor(nombre, edad, comentarios, imagen,sonido){
        this.nombre = nombre
        this.edad = edad
        this.img = imagen
        this.comentarios = comentarios
        this.sonido = sonido;

    }
}

class Leon extends Animal {

    rugir(){

    } 
}

class Lobo extends Animal {

    aullar(){

    }
}

class Oso extends Animal {

    gruñir(){

    }
}

class Serpiente extends Animal {

    sisear(){

    }
}

class Aguila extends Animal {

    chillar(){
        console.log("chillido")
    }
}


export {Leon, Lobo, Oso, Serpiente, Aguila}