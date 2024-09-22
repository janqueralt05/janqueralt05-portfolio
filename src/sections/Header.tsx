export const Header = () => {
  return (
    <div className="flex justify-center items-cente relative top-3">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a href="#" className="nav-item">Inicio</a>
        <a href="#" className="nav-item">Proyectos</a>
        <a href="#" className="nav-item">Información</a>
        <a href="#" className="nav-item bg-white text-gray-900">Contáctame</a>
      </nav>
    </div>
  );
};
