import VueRouter from "vue-router";
import ListArticle from '../pages/ListArticle.vue'
import CreateArticle from '../pages/CreateArticle.vue'
import EditArticle from '../pages/EditArticle.vue'

const router = new VueRouter({
  routes: [{
      path: '/',
      name: 'home',
      redirect: '/articles/index'
    },
    {
      path: '/articles/index',
      name: 'list-article',
      component: ListArticle
    },
    {
      path: '/articles/create',
      name: 'create-article',
      component: CreateArticle
    },
    {
      path: '/articles/:id/edit',
      name: 'edit-article',
      component: EditArticle
    }
  ]
})

export default router