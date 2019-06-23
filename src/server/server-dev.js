import path from 'path'
import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import config from '../../webpack.dev.config'

const app = express()
const DIST_DIR = __dirname
const HTML_FILE = path.join(DIST_DIR, 'index.html')
const PORT = process.env.PORT || 8080
const compiler = webpack(config)

// app.use(express.static(DIST_DIR))
app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}))

app.get('*', (req, res) => {
    res.sendFile(HTML_FILE)
})

app.listen(PORT, () => {
    console.log(`App listening to ${PORT}...`)
    console.log(`Press Ctrl/Cmd + C to quit.`)
})

