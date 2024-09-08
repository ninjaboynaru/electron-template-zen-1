import './css/index.scss'

import { createRoot } from 'react-dom/client'

import Home from './pages/Home'
import { Toaster } from './uikit/Toast/Toaster'

function App() {
	return (
		<main>
			<Home />
			<Toaster />
		</main>
	)
}

const rootElement = document.getElementById('root')
if (rootElement) {
	const root = createRoot(rootElement)
	root.render(<App />)
}
else {
	throw new Error('Root element not found in the HTML document')
}