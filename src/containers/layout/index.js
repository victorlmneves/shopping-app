import React from 'react'
import { withRouter } from 'react-router-dom'

import BaseLayout from './BaseLayout'
import Modal from '../../components/Modal'
import ModalRules from '../../components/Modal/ModalRules'
import ModalImgButton from '../../components/ModalButton/ModalImgButton'
import ModalFaqs from '../../components/Modal/ModalFaqs'
import ModalCookiesPolicy from '../../components/Modal/ModalCookiesPolicy'

const Layout = ({ children }) => (
  <>
    <BaseLayout>{children}</BaseLayout>
    <ModalRules />
    <ModalFaqs />
    <ModalImgButton />
    <ModalCookiesPolicy />
  </>
)

export default withRouter(Layout)
