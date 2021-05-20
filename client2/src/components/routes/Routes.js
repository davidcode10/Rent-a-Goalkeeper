import { Switch, Route, Redirect } from 'react-router-dom'
import IndexPage from '../pages/Index/Index-page'
import Login from '../pages/Login/Login'
import EditProfile from '../pages/Profile/Edit-Profile'
import Favorites from '../pages/Profile/Common-Users/Favorites'
import MyConvocations from '../pages/Profile/Common-Users/myconvocations'
import Profile from '../pages/Profile/Profile'
import Signup from '../pages/Signup/Signup'
import ConvocationsAccepted from '../pages/Profile/GKs-users/Convocations-Accepted'
import ConvocationsSended from '../pages/Profile/GKs-users/Convocations-Sended'
import NewConvocation from '../pages/Convocations/New Convocation/New-convocation'
import AllConvocations from '../pages/Convocations/Convocations List/AllConvocations'
import { Spinner } from 'react-bootstrap'

const Routes = ({ fetchUser, storeUser, loggedUser }) => {

    return (
        <Switch>
            <Route path='/' exact render={() => <IndexPage />} />
            <Route path='/convocations' render={props => <AllConvocations {...props} loggedUser={loggedUser} history={props.history} />} />
            <Route path='/createconvocations' render={props => <NewConvocation fetchUser={fetchUser} loggedUser={loggedUser} {...props} history={props.history} />} />
            <Route path='/login' render={props => <Login storeUser={storeUser}  {...props} history={props.history} />} />
            <Route path='/signup' render={props => <Signup history={props.history} {...props} />} />
            <Route path='/profile' exact render={props => loggedUser ? <Profile {...props} loggedUser={loggedUser} /> : <Redirect to='/profile' />} />
            <Route path='/profile/edit' render={(props) => loggedUser ? <EditProfile loggedUser={loggedUser}  {...props} /> : <Redirect to='/profile' />} />
            <Route path='/profile/favorites' render={props => loggedUser ? <Favorites {...props} loggedUser={loggedUser} history={props.history} /> : <Redirect to='/profile' />} />
            <Route path='/profile/myconvocations' render={props => loggedUser ? <MyConvocations {...props} loggedUser={loggedUser} /> : <Redirect to='/profile' />} />
            <Route path='/profile/acceptedconvocations' render={(props) => loggedUser ? <ConvocationsAccepted  {...props} loggedUser={loggedUser} /> : <Redirect to='/profile' />} />
            <Route path='/profile/convocationssended' render={(props) => <ConvocationsSended  {...props} loggedUser={loggedUser} />} />
        </Switch>
    )
}

export default Routes