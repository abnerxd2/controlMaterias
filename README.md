# Estructura de Rutas
### Esta API está diseñada para manejar el sistema de asignaturas de un centro educativo, con funcionalidades como asignar materias e iniciar sesión, lo cual permite separar las funciones según el rol que pertenezca a cada usuario
###La API fue desarrollada en JavaScript y Node.js, utilizando MongoDB como base de datos.

## Autenticación
### URL Base:
#### http://localhost:3000/schoolsystem/v1/auth
#### Descripción:
#### Aquí se gestionan el registro e inicio de sesión de usuarios.
#### Ejemplos de Endpoints:
#### POST /register → http://localhost:3000/schoolsystem/v1/auth/register
#### POST /login → http://localhost:3000/schoolsystem/v1/auth/login
## Usuarios
#### URL Base:
#### http://localhost:3000/schoolsystem/v1/user
#### Endpoints Disponibles:
#### Agregar materias a un usuario
#### Método: POST
#### Endpoint: /add
#### URL Completa:
#### http://localhost:3000/schoolsystem/v1/user/add
#### Descripción:
#### Permite agregar materias a un usuario.
## Listar estudiantes
#### Método: GET
#### Endpoint: /students
#### URL Completa:
#### http://localhost:3000/schoolsystem/v1/user/students
#### Descripción:
#### Lista todos los estudiantes registrados.
## Materias
#### URL Base:
#### http://localhost:3000/schoolsystem/v1/subjects
#### Endpoints Disponibles:
#### Agregar una materia
#### Método: POST
#### Endpoint: /add
#### URL Completa:
#### http://localhost:3000/schoolsystem/v1/subjects/add
#### Descripción:
#### Permite agregar una nueva materia al sistema.
#### Eliminar una materia
### Método: DELETE

#### Endpoint: /:id

#### URL Completa:
#### http://localhost:3000/schoolsystem/v1/subjects/:id

#### Descripción:
#### Permite eliminar una materia específica.

#### Importante:
#### Para usar este endpoint se requiere incluir un Bearer Token en la pestaña Authorization de Postman. El token debe pertenecer a un usuario con rol de maestro (TEACHER_ROLE) para poder eliminar o #### actualizar una materia.

### Listar todas las materias
#### Método: GET
#### Endpoint: /
#### URL Completa:
#### http://localhost:3000/schoolsystem/v1/subjects/
#### Descripción:
#### Lista todas las materias disponibles en el sistema.
#### Autenticación con Token
#### Para los endpoints que requieren autenticación (por ejemplo, eliminar una materia), sigue estos pasos en Postman:

#### Ve a la pestaña Authorization en la solicitud.
#### Selecciona el tipo Bearer Token.
#### Ingresa el token correspondiente (debe ser un token válido de un maestro con TEACHER_ROLE).




### Nombre: Abner Josu Del Cid Pirir
