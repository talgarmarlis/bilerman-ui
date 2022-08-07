import React from 'react'
import { ConfigProvider } from 'antd'
import { IntlProvider } from 'react-intl'
import { connect } from 'react-redux'
import moment from 'moment'
import 'moment/locale/ky'
import 'moment/locale/ru'

import kyrgyz from './locales/ky-KG'
import russian from './locales/ru-RU'
import english from './locales/en-US'

const locales = {
  'ky-KG': kyrgyz,
  'ru-RU': russian,
  'en-US': english,
}

const mapStateToProps = ({ settings }) => ({ settings })

const Localization = ({ children, settings: { locale } }) => {
  const currentLocale = locales[locale]
  moment.locale(currentLocale.code)
  return (
    <ConfigProvider locale={currentLocale.localeAntd}>
      <IntlProvider locale="en-US" messages={currentLocale.messages}>
        {children}
      </IntlProvider>
    </ConfigProvider>
  )
}

export default connect(mapStateToProps)(Localization)
