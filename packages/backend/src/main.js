import app from './app'
import { PORT } from './app/config.js'

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`)
})
