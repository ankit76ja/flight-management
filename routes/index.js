import user from '../controllers/UserController';


export default (app) => {
    app.route('/login')
        .post(user.loginUser);
};