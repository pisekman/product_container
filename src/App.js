import logo from './logo.svg'
import './App.css'
import Double from './components/Double'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="vivo-lp" id="vivo_section">
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                    <h2>jestem h2</h2>
                    <section>section</section>
                    <Double wrapper={1} />
                </div>
            </header>
        </div>
    )
}

export default App
