
import { createSignal } from 'solid-js'
import type { JSX } from 'solid-js';
import { Router, Route } from "@solidjs/router";
import LandingPage from './pages/landing-page/LandingPage';

function App(): JSX.Element {
    return (
        <>
            <Router>
                <Route path="/" component={LandingPage} />
            </Router>
        </>
    )
}

export default App
