import { createRouter, createWebHistory, RouteRecordRaw  } from "vue-router";
import pinia from "../stores/createPinia";
import { useMainStore } from "../stores";
import { storeToRefs } from "pinia";

import { Login, Question } from "../views";
import ExamList from "../views/exam/ExamList.vue";
import ExamDetail from "../views/exam/ExamDetail.vue";
import CreateExam from "../views/exam/CreateExam.vue";
import ExamResult from "../views/exam/ExamResult.vue";
import ExamStudents from "../views/exam/ExamStudents.vue";
import ExamNotifications from "../views/student/ExamNotifications.vue";

const routes : Array<RouteRecordRaw> = [
    {
        path : "/",
        redirect : "/hello"        // 实际情况，不会有单纯的根路由，所以在访问网址时，就需要重定向。
    },
    {
        path : "/login",           // 路由的URL
        name : "login",             // 路由的名字
        component : Login,    // 路由对应的组件
    },                           // 如果还有其他的路由，就继续添加
    {
        path: "/teacher/question",
        name: "question",
        component : Question,
    },
    // 考试相关路由
    {
        path: "/exam",
        name: "exam-list",
        component: ExamList,
    },
    {
        path: "/exam/:id",
        name: "exam-detail",
        component: ExamDetail,
        props: true
    },
    {
        path: "/exam/:id/edit",
        name: "exam-edit",
        component: CreateExam,
        props: true
    },
    {
        path: "/exam/create",
        name: "exam-create",
        component: CreateExam
    },
    {
        path: "/exam/:id/result",
        name: "exam-result",
        component: ExamResult,
        props: true
    },
    {
        path: "/exam/:id/students",
        name: "exam-students",
        component: ExamStudents,
        props: true
    },
    {
        path: "/student/notifications",
        name: "exam-notifications",
        component: ExamNotifications
    }
]

const router = createRouter({
    history:createWebHistory(),    // 路由历史
    routes:routes                  // 编写的路由
})

router.beforeEach((to,_,next) => {
    const loginstore = useMainStore().useLoginStore(pinia);
    const { loginSession } = storeToRefs(loginstore);
    //loginSession 是登录的标记，true表示已经登录，false代表未登录

    if(loginSession.value === false){
        //解决无限重定向的问题
        if(to.path === "/login"){
            next();
        }else{
            next("/login");
        }
    }else{
        // 根据用户类型重定向到相应的考试页面
        const userType = localStorage.getItem('userType');
        if (userType === '0' && to.path === '/') {
            // 教务老师 -> 考试管理
            next('/exam');
        } else if (userType === '1' && to.path === '/') {
            // 普通老师 -> 考试管理
            next('/exam');
        } else if (userType === '2' && to.path === '/') {
            // 学生 -> 我的考试
            next('/exam');
        } else {
            next();
        }
    }
});

export default router;