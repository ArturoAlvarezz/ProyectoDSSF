# Documento de Especificación de Requisitos

# Introducción

La comuna de Sagrada Familia requiere actualizar su base de datos de grupos familiares de pacientes. Para ello, se desarrollará una aplicación web de gestión que permita diferenciar entre los cuatro servicios de salud de la comuna: posta Santa Rosa, posta Los Quillayes, CESFAM Sagrada Familia y CESFAM Villa Prat. Cada servicio tendrá su propia base de datos, que almacenará información sobre los grupos familiares de los pacientes de ese servicio. La aplicación permitirá a los usuarios de cada servicio almacenar, modificar y consultar información sobre los grupos familiares. Además, la aplicación incluirá un control de usuarios, que permitirá diferenciar entre administradores y usuarios comunes.

## Propósito

El propósito de la aplicación de gestión de la base de datos de los grupos familiares de los pacientes de la comuna de Sagrada Familia es actualizar la base de datos obsoleta que actualmente se utiliza. Esta nueva base de datos debe permitir visualizar el grupo familiar completo de los pacientes, incluyendo a los padres, hijos, hermanos, cónyuges, etc. Esto es fundamental para brindar una atención médica integral, ya que permite a los profesionales de la salud comprender mejor el contexto familiar del paciente y tomar decisiones más acertadas sobre su tratamiento.

## Público Objetivo

El público objetivo de la aplicación son los cuatro servicios de salud de la comuna de Sagrada Familia: posta Santa Rosa, posta Los Quillayes, CESFAM Sagrada Familia y CESFAM Villa Prat. Estos servicios son los encargados de brindar atención médica a los habitantes de la comuna.

## Uso Previsto

La aplicación se utilizará para la gestión de la base de datos de los grupos familiares de los pacientes de la comuna de Sagrada Familia. La aplicación se utilizará a través de la web y podrá verse en múltiples dispositivos, como computadoras, tabletas y teléfonos inteligentes.

Los usuarios de la aplicación podrán realizar las siguientes tareas:

- **Ingresar, modificar y eliminar datos de la base de datos:** Los usuarios podrán ingresar datos nuevos a la base de datos, modificar datos existentes y eliminar datos que ya no sean necesarios.
- **Consultar información de la base de datos:** Los usuarios podrán consultar información de la base de datos, como los datos personales de los pacientes, sus antecedentes médicos y su información familiar.
- **Generar informes sobre la base de datos:** Los usuarios podrán generar informes sobre la base de datos, como informes estadísticos o informes médicos.

## Alcance del Producto

La aplicación se desarrollará para los cuatro servicios de salud de la comuna de Sagrada Familia. Cada servicio tendrá su propia base de datos, la cual estará compuesta por grupos familiares. Cada grupo familiar estará compuesto por integrantes, los cuales a su vez serán pacientes del servicio de salud. Cada integrante poseerá una serie de atributos correspondientes a los antecedentes del paciente.

## Definiciones y Acrónimos

- **Base de datos:** Conjunto de datos estructurados que se almacenan de forma electrónica.
- **Grupo familiar:** Conjunto de personas que están relacionadas por parentesco o afinidad.
- **Paciente:** Persona que recibe atención médica.
- **Servicio de salud:** Institución encargada de brindar atención médica a una población determinada**.**
- **CESFAM**: Centro de Salud Familiar.
- **Posta:** Establecimiento de atención ambulatoria.

---

# Descripción General

Los servicios de salud de la comuna de Sagrada Familia tienen la responsabilidad de brindar atención médica a sus habitantes. Para ello, en muchos casos es necesario conocer los antecedentes de los pacientes. Actualmente, existe una plataforma oficial del Estado llamada SISMAULE, que contiene todos los antecedentes médicos de los pacientes. Sin embargo, esta plataforma presenta una carencia que es una problemática constante para los miembros de los servicios de salud: no permite visualizar el grupo familiar del paciente. SISMAULE solo permite ver a los padres del paciente, pero para los miembros del servicio de salud esto no es suficiente. Ellos demandan la necesidad de conocer a todos los integrantes del grupo familiar, ya que esta información es fundamental para brindar una atención médica integral.

## Necesidades del Usuario

El producto será utilizado por todos los miembros del servicio de salud de la comuna de Sagrada Familia, quienes comprenden al tipo de usuario principal. Este tipo de usuario necesita poder ingresar, modificar y eliminar datos de la base de datos, consultar información de la base de datos y generar informes sobre la base de datos.

Además, el producto debe tener una interfaz sencilla y de alta rapidez, y debe poder accederse desde cualquier dispositivo.

## Supuestos y Dependencias

- La aplicación solo funcionara con conexión a internet
- Los miembros del servicio de salud son los encargados de mantener la aplicación con información actualizada
- El administrador deberá hacer respaldos periódicos en caso de alguna posible falla.

---

# Características y Requisitos del Sistema

## Requisitos Funcionales

- RU01: Usuario ingresa información de un nuevo paciente en un grupo familiar, si el grupo familiar no existe entonces se crea uno
    - RS01: El usuario ingresa el nombre, apellido, rut, dirección, teléfono, correo electrónico, fecha de nacimiento y sexo del paciente.
    - RS02: El usuario selecciona el grupo familiar al que pertenece el paciente.
    - RS03: El usuario ingresa el parentesco del paciente con el jefe de hogar.
    - RS04: El usuario debe ingresar a que servicio de salud pertenece el paciente.
    - RS05: Guardar paciente en la base de datos.
- RU02: Usuario modifica información de un paciente existente
    - RS06: El usuario selecciona el paciente que desea modificar.
    - RS07: El usuario ingresa la nueva información del paciente.
    - RS08: Guardar cambios en la base de datos.
- RU03: Usuario elimina toda la información de un paciente existente
    - RS09: El usuario selecciona el paciente que desea eliminar.
    - RS10: Confirmar eliminación de paciente.
    - RS11: Eliminar paciente de la base de datos.
- RU04: Usuario busca a un paciente o grupo familiar en la base de datos a través de información proporcionada por el usuario
    - RS12: El usuario ingresa información del paciente o grupo familiar que desea buscar.
    - RS13: Mostrar resultados de la búsqueda.
- RU05: Usuario visualiza todos los grupos familiares y pacientes que lo componen
    - RS14: Mostrar todos los grupos familiares y pacientes de la base de datos.
- RU06: Usuario puede exportar toda la información referente a un paciente o grupo familiar
    - RS15: El usuario selecciona el paciente o grupo familiar que desea exportar.
    - RS16: Generar archivo con la información seleccionada.
- RU08: Administrador gestiona cuentas de los usuarios
    - RS17: El administrador crea una cuenta de usuario.
    - RS18: El administrador modifica una cuenta de usuario.
    - RS19: El administrador elimina una cuenta de usuario.
- RU09: Administrador exporta respaldo de base de datos e importa base de datos desde un archivo
    - RS20: El administrador exporta la base de datos a un archivo.
    - RS21: El administrador importa la base de datos desde un archivo.

## Requisitos no Funcionales

- RU07: Si todos los integrantes de un grupo familiar son eliminados, entonces el grupo familiar también sera eliminado