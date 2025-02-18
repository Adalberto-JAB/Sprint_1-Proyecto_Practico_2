import fs from 'fs';

// Lee un archivo de manera asincrona
fs.readFile('./data/example.txt', 'utf8', (err, data) => {
  if ( err ) throw err;
  console.log('Contenido del archivo:', data);
});

// Escribir en un nuevo archivo
fs.writeFile('./data/newFile.txt', 'Contenido nuevo', (err) => {
  if ( err ) throw err;
  console.log('Archivo creado y escrito');
});

// Renombrar un archivo
fs.rename('./data/newFile.txt', './data/renamedFile.txt', (err) => {
  if ( err ) throw err;
  console.log('Archivo Renombrado');
});



