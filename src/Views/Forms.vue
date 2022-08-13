<template>

  <section class="projetos">

    <form @submit.prevent="salvar">

      <div class="field">

        <label for="projectName" class="label"> Nome do Projeto </label>

        <input
          type="text"
          class="input"
          v-model="projectName"
          id="projectName"
        />

      </div>

      <div class="field">

        <button class="button" type="submit"> Salvar </button>

      </div>

    </form>

  </section>

</template>

<script lang="ts">
import {  defineComponent } from "vue";
import { useStore } from "@/Store/Vuex";
import { ADICIONA_PROJETO, ALTERA_PROJETO } from "@/Store/Types";
import { TypeNotification } from "@/interfaces/INotificacao";
import useNotificador from '@/Hooks/Notificador';

export default defineComponent({
  name: "ProjetoForms",
  props: {
    id: {
      type: String,
    },
  },
  mounted() {
    if (this.id) {
      const projeto = this.store.state.projetos.find(
        (proj) => proj.id == this.id,
      );
      this.projectName = projeto?.nome || "";
    }
  },
  data() {
    return {
      projectName: "",
    };
  },
  methods: {
    salvar() {
      if (this.id) {
        this.store.commit(ALTERA_PROJETO,{
          id: this.id,
          nome: this.projectName
        })
      } else {
        this.store.commit(ADICIONA_PROJETO, this.projectName);
      }
      this.projectName = ""
      this.notificar(TypeNotification.SUCESSO, 'Excelente!', 'Projeto salvo com sucesso!')
      this.$router.push("/projetos");
    }, 
  },
  setup() {
    const store = useStore();
    const { notificar } = useNotificador()
    return {
      store,
      notificar
    };
  },
});
</script>

<style scoped>
.projetos {
  padding: 1.27rem;
}
</style>
