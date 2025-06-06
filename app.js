import express from 'express'
import indexRouter from './routes/indexRouter.js'
import newMessageRouter from './routes/newMessageRouter.js'
import detailRouter from './routes/detailRouter.js'

const app = express()
const PORT = process.env.PORT || 3000

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }))

app.use('/detail', detailRouter)
app.use('/new', newMessageRouter)
app.use('/', indexRouter)

app.listen(PORT, () => console.log(`Server running in http://localhost:${PORT}`))
