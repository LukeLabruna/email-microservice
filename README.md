
# Email Sender API

Este proyecto es una API simple para enviar correos electrónicos utilizando [Nodemailer](https://nodemailer.com/) y Gmail. La API permite a los usuarios enviar correos electrónicos especificando la dirección de destino, el asunto, el contenido y las credenciales de Gmail.

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/usuario/email-sender-api.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd email-sender-api
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

## Uso

1. Crea un archivo `.env` en la raíz del proyecto y define el puerto:

   ```
   PORT=3000
   ```

2. Ejecuta la aplicación:

   ```bash
   npm start
   ```

   La API estará escuchando en `http://localhost:3000`.

## Endpoints

### POST `/api/send-email`

Este endpoint permite enviar correos electrónicos mediante la API. 

#### Parámetros de la solicitud

Los parámetros deben enviarse en el cuerpo de la solicitud en formato JSON:

- `to`: **(String)** Dirección de correo electrónico del destinatario.
- `subject`: **(String)** Asunto del correo electrónico.
- `text`: **(String)** Texto plano del mensaje.
- `html`: **(String)** Contenido HTML del mensaje.
- `userEmail`: **(String)** Dirección de correo electrónico del remitente (Gmail).
- `appPassword`: **(String)** Contraseña de aplicación de Gmail (consulta [Cómo obtener una contraseña de aplicación](https://support.google.com/accounts/answer/185833)).

#### Ejemplo de solicitud

```bash
curl -X POST http://localhost:3000/api/send-email -H "Content-Type: application/json" -d '{
  "to": "destinatario@example.com",
  "subject": "Hola desde la API",
  "text": "Este es el texto del correo",
  "html": "<h1>Este es el HTML del correo</h1>",
  "userEmail": "miemail@gmail.com",
  "appPassword": "micontraseña"
}'
```

#### Respuesta

- **200 OK**: Si el correo se envía con éxito.

  ```json
  {
    "status": "success",
    "message": "Email sent successfully.",
    "data": {
      // Información del correo enviado
    }
  }
  ```

- **400 Bad Request**: Si faltan parámetros en la solicitud.

  ```json
  {
    "status": "error",
    "message": "All parameters are required."
  }
  ```

- **500 Internal Server Error**: Si hay un error al intentar enviar el correo.

  ```json
  {
    "status": "error",
    "data": "Mensaje de error"
  }
  ```

## Estructura del Proyecto

- `app.js`: Configuración de la aplicación Express y el puerto.
- `routers/email.router.js`: Definición de las rutas para la API de envío de correos.
- `controllers/email.controller.js`: Controlador encargado de gestionar las solicitudes relacionadas con el envío de correos.
- `services/email.service.js`: Servicio que utiliza Nodemailer para enviar correos.

## Dependencias

- [express](https://www.npmjs.com/package/express): Framework de Node.js para gestionar la API.
- [nodemailer](https://www.npmjs.com/package/nodemailer): Biblioteca para el envío de correos electrónicos.
- [cors](https://www.npmjs.com/package/cors): Middleware para habilitar CORS.
  
## Cómo obtener una contraseña de aplicación de Gmail

1. Ve a tu cuenta de Google.
2. Navega a `Seguridad` y busca `Contraseñas de aplicaciones`.
3. Genera una nueva contraseña de aplicación para el servicio de correo electrónico.
4. Usa esa contraseña en lugar de tu contraseña regular en la API.

## Licencia

Este proyecto está bajo la licencia MIT. Puedes ver más detalles en el archivo [LICENSE](./LICENSE).
