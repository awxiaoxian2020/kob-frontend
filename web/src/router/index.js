import {createRouter, createWebHistory} from 'vue-router'
import UserBotIndexView from '@/views/user/bot/UserBotIndexView'
import NotFound from "@/views/error/NotFound";
import PkIndexView from "@/views/pk/PkIndexView";
import RecordView from "@/views/record/RecordView";
import RankListView from "@/views/ranklist/RankListView";

const routes = [
    {
        path: '/',
        name: 'home',
        redirect: '/pk'
    },
    {
        path: '/user_bot',
        name: 'user_bot_index',
        component: UserBotIndexView
    },
    {
        path: '/404',
        name: '404',
        component: NotFound
    },
    {
        path: '/pk',
        name: 'pk_index',
        component: PkIndexView
    },
    {
        path: '/record',
        name: 'record',
        component: RecordView
    },
    {
        path: '/rank_list',
        name: 'rank_list',
        component: RankListView
    },
    {
        path: '/:catchAll(.*)',
        redirect: '/404'
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
