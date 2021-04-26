
import user from '../models/UserModel.js';


exports.loginUser =  (req, res) => {
    user.find({userId:req.body.userId}, (err, user) => {
        if (err) {
            res.send(err);
        }
        console.log(user,req.body);
        if(user[0] && user[0].password === req.body.password){
            res.send({email:user[0].userId, role:user[0].role, registered:true})
        }
        else{
            res.status(500).send({'Success':false});
        }
    });
};
