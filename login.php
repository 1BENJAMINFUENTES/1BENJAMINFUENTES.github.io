<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Aquí puedes añadir tu lógica para autenticar al usuario.
    // Esto puede incluir verificar las credenciales en una base de datos.

    // Ejemplo básico (NO usar en producción):
    if ($username === 'admin' && $password === 'password123') {
        echo 'Login exitoso. Bienvenido, ' . htmlspecialchars($username) . '!';
    } else {
        echo 'Login fallido. Usuario o contraseña incorrectos.';
    }
}
?>
