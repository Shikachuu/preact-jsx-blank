import { render } from 'preact';

const App = (props) => <>Hello {props.name}!</>

render(<App name="World" />,document.body);