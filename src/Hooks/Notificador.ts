import { TypeNotification } from "@/interfaces/INotificacao"
import { NOTIFICAR } from "@/Store/Types"
import { store } from "@/Store/Vuex"

type Notificador = {
  notificar: (tipo: TypeNotification, titulo: string, texto: string) => void
}

export default () : Notificador => {
  const notificar = (tipo: TypeNotification, titulo: string, texto: string) : void =>{
    store.commit(NOTIFICAR , {
    titulo,
    texto,
    tipo
  }) 
}
return {
  notificar
}
}