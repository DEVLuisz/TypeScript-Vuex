import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Tasks from '../Views/Tasks.vue';
import Projects from '../Views/Projects.vue';
import Forms from '@/Views/Forms.vue';
import List from '@/Views/List.vue'

const rotas: RouteRecordRaw[] = [ 
  {
  path: '/',
  name: 'Task',
  component: Tasks
}, {
  path: '/projetos',
  component: Projects,
  children: [
    
{
  path: '',
  name: 'Projects',
  component: List
},
{
  path: 'novo',
  name: 'New Projects',
  component: Forms
},
{
  path: ':id',
  name: 'Edit Projects',
  component: Forms,
  props: true
}
  ]
}
]

const roteador = createRouter({
  history: createWebHashHistory(),
  routes: rotas
})

export default roteador;