

# Proyecto para la prueba de atSistemas

### PASOS PARA INICIAR EL PROYECTO
Para poder ejecutar el proyecto hay que realizar los siguientes comandos.

npm install -g @angular/cli

npm install 

ng serve

### Introducción a realizar
Se ha realizado un proyecto donde tenemos que recibir los perros a partir de un dropdown de razas, con respuestas de las acciones que realizamos a partir de alertas, preparar la aplicación para que sea internacionalizada y controlando todos los errores.

Si esto fuera un proyecto real, no usaria NGRX ya que es un proyecto bastante pequeño y el coste de realizarlo en ngrx es bastante elevado. 

### Se ha realizado el proyecto en Angular 11 con NGRX
### Modulo principal
He montado un modulo de perros donde se gestionan todos los datos de los perros y las razas ( las razas podrian estar en otro modulo, pero como la raza es una caracteristica de un perro creo que deberia estar en el modulo de perros.)

Tambien quiero destacar, que todos los ficheros de este modulo que son para gestionar los estados del mismo , podrian ir en una carpeta (State), para que así estubieran centralizados. Personalmente me gustan mas que esten así. ( creo que ya es un tema personal )

### Modulo de Dropdown
Para realizar el dropdown de razas he decidido crear un modulo de dropdown implementando la interfaz de ControlValueAccessor para poder reutilizar este modulo en cualquier aspecto, Tanto si estamos gestionando un formulario, como si queremos gestionar ese dropdown con ngmodel.

### Internacionalización
He implementado el sistema de traducciones con ngx-translate para el manejo de la internalización.

### Alertas, Loader 
Tambien he cogido una libreria para implementar un loader y un sistema de alertas,se podrian crear modulos individuales custom de los dos pero por el tiempo de la prueba he tomado esta dicision.

He implementado el sistema de estados del loader en el mismo que el de dogs tambien por tiempo, ( deberia de tener un modulo con su estado propio)

### Interceptor
Para gestionar los errores de las llamadas http he realizado un interceptor donde gestiono los errores. Las alertas de las llamadas que han salido correctamente se gestionan en el dog.effects donde en el caso de que entre por la accion success aparezca una alerta

### Test
He realizado test bastante simple  en el reducer de dogs.

### Styles y Responsive.
Se ha realizado la aplicación en scss y responsive.

En el apartado de perros. El listado he decidido que las imagenes se ordenen verticalmente ya que si ponia que se ordenaran horizontalmente quedaban las imagenes bastante descuadradas. Se podria llegar a plantear un diseño para ponerlas en orden horizontal pero creo que queda bastante definido tal y como lo he hecho.