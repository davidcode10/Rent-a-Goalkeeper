import { Switch, Route, Redirect } from 'react-router-dom'
import ConvocationsList from '../pages/Convocations/Convocations List/Convocations-list'
import IndexPage from '../pages/Index/Index-page'
import Login from '../pages/Login/Login'
import EditProfile from '../pages/Profile/Edit-Profile'
import Favorites from '../pages/Profile/Common-Users/Favorites'
import MyConvocations from '../pages/Profile/Common-Users/myconvocations'
import Profile from '../pages/Profile/Profile'
import Signup from '../pages/Signup/Signup'
import ConvocationsAccepted from '../pages/Profile/GKs-users/Convocations-Accepted'
import ConvocationsSended from '../pages/Profile/GKs-users/Convocations-Sended'

const Routes = ({ storeUser, loggedUser }) => {

    return (
        <Switch>
            <Route path='/' exact render={() => <IndexPage />} />
            <Route path='/convocations' render={() => <ConvocationsList />} />
            <Route path='/login' render={props => <Login {...props} />} />
            <Route path='/signup' render={props => <Signup history={props.history} />} />
            <Route path='/profile' exact render={props => loggedUser ? <Profile {...props} /> : <Redirect to='/login' />} />
            <Route path='/profile/edit' render={() => <EditProfile />} />
            <Route path='/profile/favorites' render={() => <Favorites />} />
            <Route path='/profile/myconvocations' render={() => <MyConvocations />} />
            <Route path='/profile/acceptedconvocations' render={() => <ConvocationsAccepted />} />
            <Route path='/profile/convocationssended' render={() => <ConvocationsSended />} />
        </Switch>
    )
}

export default Routes