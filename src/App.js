import { Footer, Header } from "./components/"
import { AllRoutes } from "./routes/AllRoutes"
import "./App.css"
export default function App() {
  return (
    <div className="App">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  )
}
