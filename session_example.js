const Keygrip = require('keygrip');

const session = 'eyJwYXNzcG9ydCI6eyJ1c2VyIjoiNWQ5NTIzOGExM2I2N2YzYTIwZmJhOGY0In19';
console.log('session en base64: ', session);
console.log('session original: ', Buffer.from(session, 'base64').toString('utf8'));

const secret = '123';  // llave secreta para firmar la session

const keygrip = new Keygrip([secret]);

const sign = keygrip.sign(`session=${session}`); 
console.log('firma de session: ', sign);


// verifa sesion con la firma.
let verify = keygrip.verify(`session=${session}`, sign); // true
console.log('verifica session: ', verify);

// Falla por intento de adultarar session.
verify = keygrip.verify(`session=${session}asdasdasd`, `${sign}`); // false
console.log('verifica session, intento de adulteración: ', verify);
