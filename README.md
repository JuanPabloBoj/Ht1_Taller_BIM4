# JuanBojTallerHt1

Estructura del proyecto:

Ht1_Taller_BIM4

Se reconoce que se uso IA para la realizacion del estilo de scss de ejemplo.

src
Contiene todo el codigo principal del proyecto ejecutable.

app
Nucleo del sistema dentro de src donde se organizan las vistas, los componentes y la lógica principal.

features
Se utiliza para separar las diferentes partes o funcionalidades de la aplicación.

dashboard: Representa la pantalla principal o panel de control del usuario.

services: Incluye servicios dedicados exclusivamente al dashboard para obtener sus propios datos.

core
Contiene elementos generales de la aplicación que se utilizan en diferentes partes y que forman parte de la estructura principal.

components:

header: Muestra el encabezado principal de la página donde normalmente se ubica el logotipo u otros datos.

navbar: Contiene la barra de navegación con los enlaces principales, buscador y menú de opciones.

footer: Muestra el pie de página con derechos de autor, contactos e información legal.

announcement-bar: Muestra una barra fija en la parte superior para avisos o noticias importantes.

body: Muestra el cuerpo princpial de la pagina donde se visualiza la mayoria de contenido e informacion de esta.

services: Contiene servicios generales que pueden ser utilizados por diferentes partes de la aplicación.

shared
Contiene componentes y servicios que pueden reutilizarse en diferentes pantallas para evitar repetir código.

components:

alert: Muestra cuadros de mensaje para avisar sobre errores, advertencias o confirmaciones.

form: Contiene elementos relacionados con formularios y campos para ingresar información.

services: Contiene servicios que realizan funciones generales y pueden ser utilizados por diferentes componentes.

environments
Contiene la configuración de los diferentes entornos de la aplicación, como las URL de las APIs. Estos valores pueden cambiar dependiendo de si el proyecto se está ejecutando en desarrollo, pruebas o producción.