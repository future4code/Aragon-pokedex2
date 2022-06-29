import Router from './routes/Router'
import GlobalState from './global/GlobalState'
import AppStyles from './AppStyles'

function App() {
  return (
    <AppStyles>
    <GlobalState>
      <Router />
    </GlobalState>
    </AppStyles>
  );
}

export default App;