import Vue from 'vue'
import Card from './Card'
import Child from './Child'
import Button from './Button'
import { HasError, AlertError, AlertSuccess } from 'vform'
import ThemeSwitcher from './ThemeSwitcher'
import AppCheckbox from './ui/AppCheckbox'
import AppInputValidation from './ui/AppInputValidation'
import AppButton from './ui/AppButton'

// Components that are registered globaly.
[
  Card,
  Child,
  Button,
  HasError,
  AlertError,
  AlertSuccess,
  ThemeSwitcher,
  AppInputValidation,
  AppCheckbox,
  AppButton
].forEach(Component => {
  Vue.component(Component.name, Component)
})
