# Backend-Server

Este es el codigo necesario para establecer el backend 
conectado a mongo usando Mongoose..

Para ejecutarlo, es necesario reconstruir los modulos
de node usando el comando

```
npm instal
```

## Dentro de Google-Signin-demo

Existe un pequeño ejercicio para probar la autenticacion
de Google en un Front-End basico pero funcional..

PARA INICAR PROYECTO(version de produccion)

en Adminpro/udemy1.2.0...
protractor.config.js linea 15 
    public/assets/images/logo-text.png: 'http://localhost:4201/',
pasar el puerto a 4200 antes de mandarlo a produccion


en el frontend, en consola..
ejecutar
ng build --prod --aot


EL BACKEND SERVER, EN CONSOLA> npm start
el front end, consola>
Otto@DESKTOP-JO25NDE MINGW64 /d/proyecto/Adminpro-Angular/admipro-udemy-1.2.0 ((v4.0.0))
$ cd dist/

Otto@DESKTOP-JO25NDE MINGW64 /d/proyecto/Adminpro-Angular/admipro-udemy-1.2.0/dist ((v4.0.0))
$ http-server -o -p4200


*********/////////*********///////

PARA INICAR PROYECTO(version de desarrollo)

npm start en backend
ng serve -o --port 4201 en frontend

protractor.config.js linea 15 
    baseUrl: 'http://localhost:4200/',
pasar el puerto a 4200 antes de mandarlo a produccion(local)





*****/////////
*****/////////
*****/////////
            LIST TO DO THINGS....
            Guardar el ultimo valor de frecuencia y LongPulse, para setear la app
*****/////////
*****/////////
*****/////////


