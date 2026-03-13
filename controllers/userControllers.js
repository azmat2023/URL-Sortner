const User = require('../models/userSchema.js')



exports.handleUserSignUP = async (req, res) => {
    const { firstName, lastName, email, password } = req.body

    try {
        const user = await User.create({
            firstName,
            lastName,
            email,
            password
        })

        res.render('home', { shortUrl: null, error: null })
    } catch (error) {
        console.log("Error:", error);


    }
}


exports.handleUserLogin = async (req, res) => {

    const { email, password } = req.body
    try {

        const user = await User.findOne({ email, password })

        if (!user) {
            console.log('Invalid user')
            return res.render(
                "login"
                , {
                    error: 'Incorrect password',
                    formData: { email },
                    success: null,
                    shortUrl: null,

                }
            )
        }

        res.redirect(
            '/'
        )
    

    } catch (error) {
        console.log("Error:", error)

    }

}