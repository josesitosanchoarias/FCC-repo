'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Insertar Provincias
    await queryInterface.bulkInsert(
      { tableName: "provincia", schema: "fcc_historiaclinica" },
      [
        {
          nombre_provincia: "Pichincha",
        },
        {
          nombre_provincia: "Guayas",
        },
      ],
      {}
    );

    // Insertar Cantones
    await queryInterface.bulkInsert(
      { tableName: "canton", schema: "fcc_historiaclinica" },
      [
        {
          nombre_canton: "Quito",
          id_provincia: 1,
        },
        {
          nombre_canton: "Rumiñahui",
          id_provincia: 1,
        },
        {
          nombre_canton: "Guayaquil",
          id_provincia: 2,
        },
      ],
      {}
    );

    // Insertar Parroquias
    await queryInterface.bulkInsert(
      { tableName: "parroquia", schema: "fcc_historiaclinica" },
      [
        {
          nombre_parroquia: "Belisario Quevedo",
          id_canton: 1,
        },
        {
          nombre_parroquia: "La Floresta",
          id_canton: 1,
        },
        {
          nombre_parroquia: "Sangolquí",
          id_canton: 2,
        },
        {
          nombre_parroquia: "Tarqui",
          id_canton: 3,
        },
      ],
      {}
    );

    // Insertar Tipos de Persona
    await queryInterface.bulkInsert(
      { tableName: "tipo_persona", schema: "fcc_historiaclinica" },
      [
        {
          descripcion_tipo_persona: "Beneficiario",
          observaciones_tipo_persona: null,
        },
        {
          descripcion_tipo_persona: "Voluntario",
          observaciones_tipo_persona: null,
        },
      ],
      {}
    );

    // Insertar Personas
    await queryInterface.bulkInsert(
      { tableName: "persona", schema: "fcc_historiaclinica" },
      [
        {
          nombre_persona: "Juan",
          apellido_persona: "Pérez",
          direccion_persona: "Calle Falsa 123",
          correo_persona: "juan.perez@example.com",
          telefono_persona: null,
          foto_persona: "",
          estado_persona: "Activo",
          id_parroquia: 2,
          id_tipo_persona: 1,
        },
        {
          nombre_persona: "María",
          apellido_persona: "López",
          direccion_persona: "Avenida Siempre Viva 742",
          correo_persona: "maria.lopez@example.com",
          telefono_persona: null,
          foto_persona: "",
          estado_persona: "Activo",
          id_parroquia: 2,
          id_tipo_persona: 2,
        },
      ],
      {}
    );

    // Insertar Interacciones
    await queryInterface.bulkInsert(
      { tableName: "interaccion", schema: "fcc_historiaclinica" },
      [
        {
          descripcion_interaccion: "Visita Domiciliaria",
          tipo_interaccion: "Visita",
          fecha_inicio_interaccion: new Date(),
          fecha_fin_interaccion: new Date(),
          archivo_interaccion: "",
          observciones_interaccion: "",
          estado_interaccion: "Completada",
        },
        {
          descripcion_interaccion: "Llamada de Seguimiento",
          tipo_interaccion: "Llamada",
          fecha_inicio_interaccion: new Date(),
          fecha_fin_interaccion: new Date(),
          archivo_interaccion: "",
          observciones_interaccion: "",
          estado_interaccion: "Pendiente",
        },
      ],
      {}
    );

    // Insertar asociaciones entre Interacciones y Personas (tabla intermedia)
    // Asumiendo que existe una tabla intermedia llamada 'persona_interaccion'
    // y que tiene columnas 'interaccion_id' y 'persona_id'
    await queryInterface.bulkInsert(
      { tableName: "persona_interaccion", schema: "fcc_historiaclinica" },
      [
        {
          interaccion_id: 1,
          persona_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          interaccion_id: 2,
          persona_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          interaccion_id: 2,
          persona_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    // Eliminar en orden inverso de creación para evitar problemas de FK
    await queryInterface.bulkDelete({ tableName: "persona_interaccion", schema: "fcc_historiaclinica" }, null, {});
    await queryInterface.bulkDelete({ tableName: "interaccion", schema: "fcc_historiaclinica" }, null, {});
    await queryInterface.bulkDelete({ tableName: "persona", schema: "fcc_historiaclinica" }, null, {});
    await queryInterface.bulkDelete({ tableName: "tipo_persona", schema: "fcc_historiaclinica" }, null, {});
    await queryInterface.bulkDelete({ tableName: "parroquia", schema: "fcc_historiaclinica" }, null, {});
    await queryInterface.bulkDelete({ tableName: "canton", schema: "fcc_historiaclinica" }, null, {});
    await queryInterface.bulkDelete({ tableName: "provincia", schema: "fcc_historiaclinica" }, null, {});
  },
};
