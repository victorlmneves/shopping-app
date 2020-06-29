import React, { Component } from 'react'
import { Switch, Route, withRouter, Redirect } from 'react-router-dom'

// Public pages
import Layout from '../layout'
import Login from '../../pages/Login'
import Register from '../../pages/Register'
import RegisterEmailSent from '../../pages/Register/RegisterEmailSent'
import ForgotPassword from '../../pages/ForgotPassword'
import ChangePassword from '../../pages/ChangePassword'

// Private pages
import Homepage from '../../pages/Homepage'
import Play from '../../pages/Play'
import Awards from '../../pages/Awards'
import Ranking from '../../pages/Ranking'
import RegisterCoupon from '../../pages/UploadCoupon'
import AttachCoupon from '../../components/Forms/Coupon/AttachCoupon'
import Account from '../../pages/Account'
import Faqs from '../../pages/Faqs'
import PrivacyPolicy from '../../pages/PrivacyPolicy'
import TermsConditions from '../../pages/TermsConditions'
import CookiesPolicy from '../../pages/CookiesPolicy'
import Rules from '../../pages/Rules'
import ActivateAccount from '../../pages/ActivateAccount'
import Disclaimer from '../../components/Disclaimer'

// Containers
import PrivateRoute from '../utils/PrivateRoute'
import NotFoundPage from '../utils/NotFoundPage'
import ScrollToTop from '../utils/ScrollToTop'

import './App.scss'
import '@material/react-dialog/dist/dialog.css'
import '@material/react-button/dist/button.css'

const App = () => (
  <ScrollToTop>
    <Layout>
      <Switch>
        <Route path="/" exact render={() => <Redirect to="/home" />} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Register} />
        <Route path="/signup-details/:token" component={ActivateAccount} />
        <Route path="/recover-password" exact component={ForgotPassword} />
        <Route
          path="/signup-email-sent/:email"
          exact
          component={RegisterEmailSent}
        />
        <Route path="/recuperacao/:token" exact component={ChangePassword} />
        <PrivateRoute path="/home" component={Homepage} />
        <PrivateRoute path="/play" component={Play} />
        <PrivateRoute path="/prizes" component={Awards} />
        <PrivateRoute path="/ranking" component={Ranking} />
        <PrivateRoute path="/register-coupon" component={RegisterCoupon} />
        <PrivateRoute path="/attach-coupon" component={AttachCoupon} />
        <PrivateRoute path="/account" component={Account} />
        <PrivateRoute path="/faqs" component={Faqs} />
        <PrivateRoute path="/privacy-policy" component={PrivacyPolicy} />
        <PrivateRoute path="/terms-conditions" component={TermsConditions} />
        <PrivateRoute path="/cookies-policy" component={CookiesPolicy} />
        <PrivateRoute path="/rules" component={Rules} />
        <Route render={NotFoundPage} />
      </Switch>
    </Layout>
    <Disclaimer />
  </ScrollToTop>
)

export default withRouter(App)
