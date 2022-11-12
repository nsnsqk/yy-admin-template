
export default function (router) {
    router.beforeEach((to, from) => {
        const token = localStorage.getItem('login-token');
        if (!token) {
            if (to.path === '/login') {
                return true;
            }
            return {path: '/login', replace: true};
        }
        if (to.path === '/login') {
            return {path: '/', replace: true}
        }
        return true;
    })
}