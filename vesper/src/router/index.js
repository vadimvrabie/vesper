import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Header from "../components/Header";
import HeroSection from "../components/HeroSection"

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Header',
      component: Header
    },
    {
      path: '/heroSection',
      name: 'HeroSection',
      component: HeroSection
    },
    {
      path: '/aboutUs',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/clientSection',
      name: 'AboutUs',
      component: AboutUs
    },
  ]
})
