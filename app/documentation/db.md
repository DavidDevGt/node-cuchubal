# Documentación de la Base de Datos `cuchubal_db`

La base de datos para la aplicación de cuchubal está diseñada para gestionar usuarios, grupos de ahorro (cuchubales), contribuciones, pagos, y más.

## Tablas y sus Funciones

### `users`
Almacena información de los usuarios que participan en la aplicación, incluyendo su nombre de usuario, contraseña, correo electrónico y rol.

- `username`: Nombre único de usuario.
- `password`: Contraseña del usuario, almacenada de forma segura.
- `email`: Correo electrónico del usuario.
- `role`: Rol del usuario (por ejemplo, administrador, manager, miembro).

### `user_profiles`
Contiene información detallada del perfil de cada usuario, como nombre, apellido, fecha de nacimiento, etc.

### `user_roles`
Define los diferentes roles que pueden tener los usuarios dentro de la aplicación.

### `savings_groups`
Representa los grupos de ahorro o cuchubales, cada uno gestionado por un manager.

### `group_memberships`
Registra qué usuarios son miembros de qué cuchubales, incluyendo la fecha en que se unieron.

### `contributions`
Registra las contribuciones hechas por los miembros a un cuchubal. Es importante diferenciar entre `contributions` y `payments`:

- `contributions`: Representa el dinero que un miembro aporta al fondo común del cuchubal en una fecha específica.
- `is_confirmed`: Indica si la contribución ha sido confirmada.

### `group_settings`
Almacena la configuración de cada cuchubal, como su duración, el monto total, y si se permite la "media mano".

### `payments`
Registra los pagos individuales relacionados con las contribuciones. Mientras que `contributions` registra el acto de contribuir al fondo común, `payments` podría usarse para registrar transacciones específicas relacionadas, como el pago de una cuota de contribución a través de diferentes métodos de pago.

- `contribution_id`: Vincula el pago a una contribución específica.
- `payment_method`: Método a través del cual se realizó el pago.

### `group_turns`
Gestiona los turnos de recepción del dinero acumulado en el cuchubal por parte de los miembros.

### `invitations`
Maneja las invitaciones enviadas a nuevos miembros de un cuchubal.

