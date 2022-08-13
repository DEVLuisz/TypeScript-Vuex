import { TypeNotification } from "@/interfaces/INotificacao"
import { NOTIFICAR } from "@/Store/Types"
import { store } from "@/Store/Vuex"

export const notificacaoMixin = {
  methods: {
    notificar(tipo: TypeNotification, titulo: string, texto: string) : void{
      store.commit(NOTIFICAR, {
      titulo,
      texto,
      tipo
    })
  }
  }
}