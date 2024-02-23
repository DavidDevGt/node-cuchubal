# Documentación de la Base de Datos `cuchubal_db`

## Tablas

### `users`
Almacena la información básica de los usuarios de la plataforma.

| Campo | Tipo | Descripción |
| ----- | ---- | ----------- |
| `id` | INT AUTO_INCREMENT | Identificador único del usuario. |
| `username` | VARCHAR(255) | Nombre de usuario, único. |
| `password` | VARCHAR(255) | Contraseña del usuario, almacenada de forma segura. |
| `email` | VARCHAR(255) | Correo electrónico del usuario, único. |
| `role` | VARCHAR(255) | Rol del usuario en la plataforma (p. ej., admin, usuario). |
| `is_active` | INT | Indica si el usuario está activo (1) o no (0). |
| `created_at` | TIMESTAMP | Fecha de creación del registro. |
| `updated_at` | TIMESTAMP | Fecha de la última actualización del registro. |

### `user_profiles`
Extiende la información de los usuarios con detalles adicionales.

| Campo | Tipo | Descripción |
| ----- | ---- | ----------- |
| `id` | INT AUTO_INCREMENT | Identificador único del perfil de usuario. |
| `user_id` | INT | Clave foránea que apunta a `users.id`. |
| `first_name` | VARCHAR(255) | Nombre del usuario. |
| `last_name` | VARCHAR(255) | Apellido del usuario. |
| `birth_date` | DATE | Fecha de nacimiento del usuario. |
| `phone_number` | VARCHAR(255) | Número de teléfono del usuario. |
| `address` | VARCHAR(255) | Dirección del usuario. |
| `is_active` | INT | Indica si el perfil está activo (1) o no (0). |
| `created_at` | TIMESTAMP | Fecha de creación del registro. |
| `updated_at` | TIMESTAMP | Fecha de la última actualización del registro. |

### `user_roles`
Define los distintos roles que pueden tener los usuarios dentro de la plataforma.

| Campo | Tipo | Descripción |
| ----- | ---- | ----------- |
| `id` | INT AUTO_INCREMENT | Identificador único del rol. |
| `role_name` | VARCHAR(255) | Nombre del rol. |
| `role_description` | TEXT | Descripción detallada del rol. |
| `is_active` | INT | Indica si el rol está activo (1) o no (0). |
| `created_at` | TIMESTAMP | Fecha de creación del registro. |
| `updated_at` | TIMESTAMP | Fecha de la última actualización del registro. |

### `savings_groups`
Representa los grupos de ahorro o cuchubales creados por los usuarios.

| Campo | Tipo | Descripción |
| ----- | ---- | ----------- |
| `id` | INT AUTO_INCREMENT | Identificador único del grupo de ahorro. |
| `manager_id` | INT | Clave foránea que apunta a `users.id`, identifica al manager del grupo. |
| `name` | VARCHAR(255) | Nombre del grupo de ahorro. |
| `description` | TEXT | Descripción del propósito y las reglas del grupo. |
| `is_active` | INT | Indica si el grupo está activo (1) o no (0). |
| `created_at` | TIMESTAMP | Fecha de creación del registro. |
| `updated_at` | TIMESTAMP | Fecha de la última actualización del registro. |

### `group_memberships`
Asocia usuarios a grupos de ahorro, indicando su membresía.

| Campo | Tipo | Descripción |
| ----- | ---- | ----------- |
| `id` | INT AUTO_INCREMENT | Identificador único de la membresía. |
| `group_id` | INT | Clave foránea que apunta a `savings_groups.id`, identifica el grupo al que pertenece el usuario. |
| `user_id` | INT | Clave foránea que apunta a `users.id`, identifica al usuario miembro del grupo. |
| `join_date` | DATE | Fecha en la que el usuario se unió al grupo de ahorro. |
| `is_active` | INT | Indica si la membresía está activa (1) o no (0). |
| `created_at` | TIMESTAMP | Fecha de creación del registro. |
| `updated_at` | TIMESTAMP | Fecha de la última actualización del registro. |

### `group_settings`
Configuraciones específicas de cada grupo de ahorro.

| Campo | Tipo | Descripción |
| ----- | ---- | ----------- |
| `id` | INT AUTO_INCREMENT | Identificador único de la configuración del grupo. |
| `group_id` | INT | Clave foránea que apunta a `savings_groups.id`, identifica el grupo al que pertenecen estas configuraciones. |
| `duration_months` | INT | Duración del ciclo del cuchubal en meses. |
| `total_amount` | DECIMAL(10, 2) | Monto total a ahorrar/reunir por el grupo. |
| `members_count` | INT | Número total de miembros en el grupo. |
| `allow_half_hand` | INT | Indica si se permite recibir la mitad del monto total antes de su turno (1) o no (0). |
| `is_active` | INT | Indica si la configuración está activa (1) o no (0). |
| `created_at` | TIMESTAMP | Fecha de creación del registro. |
| `updated_at` | TIMESTAMP | Fecha de la última actualización del registro. |

### `group_turns`
Gestiona los turnos de recepción del monto acumulado por los miembros del grupo.

| Campo | Tipo | Descripción |
| ----- | ---- | ----------- |
| `id` | INT AUTO_INCREMENT | Identificador único del turno. |
| `group_id` | INT | Clave foránea que apunta a `savings_groups.id`, identifica el grupo al que pertenece el turno. |
| `user_id` | INT | Clave foránea que apunta a `users.id`, identifica al usuario que recibe el turno. |
| `turn_month` | INT | Mes del turno dentro del ciclo del grupo. |
| `amount` | DECIMAL(10, 2) | Monto recibido en el turno. |
| `is_half_hand` | INT | Indica si el monto recibido es la mitad (1) o el total (0).

| `partner_user_id` | INT | Opcional. Clave foránea que apunta a `users.id`, identifica al socio en caso de "media mano". |
| `has_received` | INT | Indica si el usuario ya ha recibido el monto de su turno (1) o no (0). |
| `receive_date` | DATE | Fecha en la que el usuario recibe el monto. |
| `is_active` | INT | Indica si el turno está activo (1) o no (0). |
| `created_at` | TIMESTAMP | Fecha de creación del registro. |
| `updated_at` | TIMESTAMP | Fecha de la última actualización del registro. |

### `invitations`
Gestiona las invitaciones enviadas a potenciales nuevos miembros para unirse a un grupo de ahorro.

| Campo | Tipo | Descripción |
| ----- | ---- | ----------- |
| `id` | INT AUTO_INCREMENT | Identificador único de la invitación. |
| `group_id` | INT | Clave foránea que apunta a `savings_groups.id`, identifica el grupo al que se invita. |
| `invited_by_user_id` | INT | Clave foránea que apunta a `users.id`, identifica al usuario que envía la invitación. |
| `invitee_email` | VARCHAR(255) | Correo electrónico del destinatario de la invitación. |
| `token` | VARCHAR(255) | Token único generado para la invitación, utilizado para validar la aceptación. |
| `has_accepted` | INT | Indica si el destinatario ha aceptado la invitación (1) o no (0). |
| `accepted_at` | TIMESTAMP | Fecha y hora en que se aceptó la invitación. |
| `is_active` | INT | Indica si la invitación está activa (1) o no (0). |
| `created_at` | TIMESTAMP | Fecha de creación del registro. |
| `updated_at` | TIMESTAMP | Fecha de la última actualización del registro. |

