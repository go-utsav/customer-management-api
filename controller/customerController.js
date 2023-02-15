const db = require('./../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const path = require('path').toString();

function generateHash(password) {
    const salt = bcrypt.genSalt(12);
    const hash = bcrypt.hash(password, salt);
    return hash
}

/**
 * register api method
 * @param {*} req
 * @param {*} res
 * @request
 */
exports.registerapi = async function (req, res) {

    try {

        var value = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const value2 = await bcrypt.hash(value, salt);
        var file = req.file.fieldname;
        const filepath = "D:/OFFICE/customer-api/src/image/" + `${file.fieldname}_${Date.now()}`;
        console.log(file);

        const register = await db.customers.create({
            username: req.body.username,
            email: req.body.email,
            password: value2,
            profilepic: filepath,
            createdAt: new Date(),
            updatedAt: new Date(),

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

        const finduser = await db.customers.findOne({ where: { username: cusername } });
        if (!finduser) {
            console.log('No user found');
        } else {
            bcrypt.compare(cpassword, finduser.password, function (err, result) {
                if (err) {
                    console.log(err);
                } else {
                    const token = jwt.sign(JSON.stringify(finduser), process.env.ACCESS_KEY_TOKEN);

                    return res.json({
                        status: 'Success',
                        message: 'Customer Login Success',
                        data: {
                            user: finduser,
                            token: token
                        }
                    });
                }
            });
            console.log('User found');
        }

        //previous login code without hashing password dont remove if not necessary

        // // const cusername = req.body.username;
        // var cpassword = req.body.password;
        // const salt = await bcrypt.genSalt(10);
        // const cpasswordhash = await bcrypt.hash(cpassword, salt);

        // const user = await db.customers.findOne({ where: { username: cusername, password: cpasswordhash } });

        // if (cusername == user.username) {
        //     bcrypt.compare(cpasswordhash, user.password, function (err, result) {
        //         if (err) {
        //             console.log(err);
        //         } else {
        //             console.log(result);
        //         }
        //     });
        //     const token = jwt.sign(JSON.stringify(user), process.env.ACCESS_KEY_TOKEN);

        //     return res.json({
        //         status: 'Success',
        //         message: 'Customer Login Success',
        //         data: {
        //             user: user,
        //             token: token
        //         }
        //     });
        // }

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

        const token = req.headers.authorization.split(' ')[1];

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
        const token = req.headers.authorization.split(' ')[1];
        const verify = jwt.verify(token.toString(), process.env.ACCESS_KEY_TOKEN);
        if (!verify) {
            console.log("Invalid");
            console.log(verify);
        } else {
            const user = await db.customers.update(
                { password: req.body.password },
                { where: { id: verify.id } }
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