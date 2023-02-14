const db = require('./../models');
const jwt = require('jsonwebtoken');


/**
 * register api method
 * @param {*} req
 * @param {*} res
 * @request
 */
exports.registerapi = async function (req, res) {

    try {

        const register = await db.customers.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            createdAt: new Date(),
            updatedAt: new Date()
        });

        const token = jwt.sign(JSON.stringify(register), process.env.ACCESS_KEY_TOKEN);

        return res.json({
            status: 'Success',
            message: 'Customer registration Success',
            data: {
                user: register,
                token: token
            }
        })

    } catch (err) {
        console.error(err);

        return res.json({
            status: 'error',
            message: 'Internal server error',
            data: null
        });
    }
}

/**
 * login api method
 * @param {*} req
 * @param {*} res
 * @request
 */

exports.loginapi = async function (req, res) {
    try {
        const cusername = req.body.username;
        const cpassword = req.body.password;
        const user = await db.customers.findOne({ where: { username: req.body.username, password: req.body.password } });

        if ( cusername == user.username && cpassword == user.password ) {
            const token = jwt.sign(JSON.stringify(user), process.env.ACCESS_KEY_TOKEN);

            return res.json({
                status: 'Success',
                message: 'Customer registration Success',
                data: {
                    user: user,
                    token: token
                }});
        }

    } catch (err) {
        console.log(err);
        return res.json({
            status: 'error',
            message: 'Invalid credentials please try again !!!',
            data: null
        })
    }
}  

/**
 * get data from token
 * @param {*} req
 * @param {*} res
 * @return 
 */

exports.decodetoken = async function (req, res) {
    try {

        const token =  req.headers.authorization.split(' ')[1]  ;
        
        const verify = jwt.verify(token.toString(), process.env.ACCESS_KEY_TOKEN);

        return res.json({
            status: 'Success',
            message: 'Customer found Success',
            data: verify
            });
        
    } catch (err) {
        console.log(err);

        return res.json({
            status: "error",
            message: "Invalid User token",
            data: null
        })
    }
}

/**
 * reset password with help of token
 * @param {*} req
 * @param {*} res
 * @return 
 */

exports.resetpassword = async function (req, res) {
    try {
        const token =  req.headers.authorization.split(' ')[1];
        const verify = jwt.verify(token.toString(), process.env.ACCESS_KEY_TOKEN);
        if(!verify) {
            console.log("Invalid");
            console.log(verify);
        }else {
            const user = await db.customers.update(
                { password: req.body.password }, 
                { where: { id : verify.id }}
            );
            console.log("Changing Password ...");
            return res.json({
                status: 'Success',
                message: 'password updated Success'
                });
        }
    
    } catch (error) {
        console.log(error);

        return res.json({
            status: "error",
            message: "Invalid User token or password",
            data: null
    });
}
}