const fs = require('fs');

const crearArchivo = async (base = 5, listar, hasta) => {
    try {
        console.log('=========')
        console.log(`Tabla del ${base}`)
        console.log('=========')
        let salida = '';
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }
        if (listar) console.log(salida)

        fs.writeFileSync(`./salida/tabla-${base}.text`, salida)
        return `tabla-${base}.text`;
    } catch (err) {
        throw err
    }
}


module.exports = {
    crearArchivo
}
