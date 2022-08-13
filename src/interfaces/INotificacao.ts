export enum TypeNotification {
  SUCESSO,
  FALHA,
  ATENCAO
}

export interface INotificacao {
  titulo: string,
  texto: string,
  tipo: TypeNotification,
  id: number
}