'use client';

import Usuario from '../components/Usuario';

export default function Home() {
  const usuarios = [
    { nombre: 'Ivan Acosta', edad: 46, ciudad: 'Colombia' },
    { nombre: 'Juan Pérez', edad: 30, ciudad: 'Barcelona' },
    { nombre: 'María López', edad: 28, ciudad: 'Valencia' },
  ];

  const saludar = (nombre) => {
    alert(`¡Hola, ${nombre}!`);
  };

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Actividad de Props en Next.js</h1>
      {usuarios.map((usuario, index) => (
        <Usuario key={index} usuario={usuario} saludar={saludar} />
      ))}
    </main>
  );
}