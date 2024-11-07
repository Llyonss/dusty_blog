
import { For } from 'solid-js'
import type { JSX } from 'solid-js';
import { Router, Route } from "@solidjs/router";
import routes from '@/routes';
function App(): JSX.Element {
    return (
        <>
            <Router>
                <For each={routes}>{({ path, component }) => (
                    <Route path={path} component={component} />
                )}</For>
            </Router>
        </>
    )
}
export default App
