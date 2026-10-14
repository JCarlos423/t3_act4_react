function InfoUsuario({ usuario, totalTareas }) {
  return (
    <div className="tarjeta-info">
      <span><strong>Usuario:</strong> {usuario}</span>
      <span><strong>Tareas pendientes:</strong> {totalTareas}</span>
    </div>
  );
}
export default InfoUsuario;