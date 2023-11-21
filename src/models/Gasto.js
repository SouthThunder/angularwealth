export class Gasto {
  constructor(monto_gasto, fecha_gasto, tipo_gasto, descripcion_gasto, id_gasto) {
    this.monto_gasto = monto_gasto;
    this.fecha_gasto = fecha_gasto;
    this.tipo_gasto = tipo_gasto;
    this.descripcion_gasto = descripcion_gasto;
    this.id_gasto = id_gasto;
  }

  setMontoGasto(monto_gasto) {
    this.monto_gasto = monto_gasto;
  }

  setFechaGasto(fecha_gasto) {
    this.fecha_gasto = fecha_gasto;
  }

  setTipoGasto(tipo_gasto) {
    this.tipo_gasto = tipo_gasto;
  }

  toGasto() {
    return {
      monto_gasto: this.monto_gasto,
      fecha_gasto: this.fecha_gasto,
      tipo_gasto: this.tipo_gasto,
      descripcion_gasto: this.descripcion_gasto,
    };
  }
}

export default Gasto;
