const app = require('../app')

app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), (req,res) =>{
    console.log('Server run on port ', app.get('port'))
})