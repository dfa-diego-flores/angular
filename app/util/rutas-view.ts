export class Rutas {





 /****************NOMBRE DE LOS COMPONENTES Y VISTAS************************/
 public BUTTON_BUSCAR:string="BUTTON_BUSCAR";
 public BUTTON_EDITAR:string="BUTTON_EDITAR";
 public BUTTON_LIMPIAR:string="BUTTON_LIMPIAR";
 public BUTTON_MODIFICAR:string="BUTTON_MODIFICAR";
 public BUTTON_QUITAR_LISTA:string="BUTTON_QUITAR_LISTA";
 public BUTTON_REGISTRAR:string="BUTTON_REGISTRAR";
 public BUTTON_REGRESAR_LISTA:string="BUTTON_REGRESAR_LISTA";
 public BUTTON_TRANSFERIR_DOCUMENTOS:string="BUTTON_TRANSFERIR_DOCUMENTOS";





 public BUTTON_AGREGAR_MODIFICAR:string="BUTTON_AGREGAR_MODIFICAR";
 public BUTTON_QUITAR_ROL:string="BUTTON_QUITAR_ROL";
 public BUTTON_GUARDAR:string="BUTTON_GUARDAR";
 public BUTTON_PANEL_PERMISOS:string="BUTTON_PANEL_PERMISOS";
 public BUTTON_PANEL_REFERENCIA:string="BUTTON_PANEL_REFERENCIA";
 public BUTTON_BUSCAR_ROL:string="BUTTON_BUSCAR_ROL";
 public BUTTON_AGREGAR_ROL:string="BUTTON_AGREGAR_ROL";


 public BUTTON_REGISTRAR_EMPLEADO:string="BUTTON_REGISTRAR_EMPLEADO";
 public BUTTON_REGRESAR:string="BUTTON_REGRESAR";
 public BUTTON_PANEL_EMPLEADO:string="BUTTON_PANEL_EMPLEADO";
 public BUTTON_REGISTRAR_USUARIO:string="BUTTON_REGISTRAR_USUARIO";
 public BUTTON_PANEL_USUARIO:string="BUTTON_PANEL_USUARIO";

 public BUTTON_GENERAR_DOC_INVENTARIO:string="BUTTON_GENERAR_DOC_INVENTARIO";
 public BUTTON_GENERAR_DOC_MEMO:string="BUTTON_GENERAR_DOC_MEMO";
 public BUTTON_VER_DETALLE:string="BUTTON_VER_DETALLE";
 public BUTTON_ELIMINAR:string="BUTTON_ELIMINAR";



 public BUTTON_AGREGAR_DOCS:string="BUTTON_AGREGAR_DOCS";
 public BUTTON_QUITAR_DOCS:string="BUTTON_QUITAR_DOCS";
/*************COMPONENTE GENERAL PARA VISUALIAR*****************/
 public VISUALIZAR_VIEW:string="VISUALIZAR_VIEW";


/**************VISTAS**************/
 public FORM_LISTAR_DOCUMENTO:string="FORM_LISTAR_DOCUMENTO";
 public FORM_MODIFICAR_DOCUMENTO:string="FORM_MODIFICAR_DOCUMENTO";
 public FORM_REGISTRAR_DOCUMENTO:string="FORM_REGISTRAR_DOCUMENTO";
 public FORM_MODIFICAR_USUARIO:string="FORM_MODIFICAR_USUARIO";
 public FORM_TRANSFERENCIA_DOCUMENTO:string="FORM_TRANSFERENCIA_DOCUMENTO";
 public FORM_PRINCIPAL:string="FORM_PRINCIPAL";
 public FORM_REGISTRAR_USUARIO:string="FORM_REGISTRAR_USUARIO";
 public FORM_LISTAR_TRANSFERENCIA:string="FORM_LISTAR_TRANSFERENCIA";
 public FORM_GENERAR_DOCS:string="FORM_GENERAR_DOCS";
/***************NOMBRES DE LAS PETICIONES HTTP QUE SE SOLICITAN *************************/
  
 public API:string="api";

 public API_SERIE_REST:string=this.API+"/SERIE_REST";
 public API_LOGIN_REST:string=this.API+"/LOGIN_REST";
 public API_DOCUMENTO_REST:string=this.API+"/DOCUMENTO_REST";
 public API_TRANSFERENCIA_REST:string=this.API+"/TRANSFERENCIA_REST";
 public API_PERSONA_SATT_REST:string=this.API+  "/PERSONA_SATT_REST";
 public API_VISTA_REST:string=this.API+  "/VISTA_REST";
 public API_PERMISO_REST:string= this.API +"/PERMISO_REST";
 public API_PERFIL_REST:string= this.API +"/PERFIL_REST";
 public API_USUARIO_DATA_REST:string= this.API +"/USUARIO_DATA_REST";
 //public API_USUARIO_REST:string= this.API +"/USUARIO_REST";
 //public API_USUARIO_REST:string="/cultura/public/api/usuario";
 public API_USUARIO_REST:string="/culturaREST/api/usuario";
 public API_UNIDAD_ENTIDAD_REST:string= this.API +"/UNIDAD_ENTIDAD_REST";
 public API_DOC_GENERADO:string= this.API +"/DOC_GENERADO_REST";
}