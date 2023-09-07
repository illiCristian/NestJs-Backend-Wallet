import { getSession } from 'next-auth/react'
import { API } from './config'

type Email = {
  email: string | undefined
}

type Code = {
  email: string | undefined
  code: string | undefined
}

type UserData = {
  name: string | undefined
  email: string | undefined
  password: string | undefined
}

type WalletData = {
  amount: number
  selectedPaymentId: string
}

export type CreditCard = {
  paymentType: string
  name: string
  cardNumber: string
  expirationDate: string
  cvv: string
}

type BankAccount = {
  paymentType: string
  bankName: string
  accountNumber: string
}

export const getProfile = async () => {
  const session = await getSession()

  return await API.get('users/', {
    headers: { Authorization: `Bearer ${session?.user.token}` },
  })
}

export const sendConfirmationEmail = async (data: Email) => {
  return API.post('mailing/send-mail', data)
}

export const sendConfirmationCode = async (data: Code) => {
  return API.post('mailing/validate-code', data)
}

export const registerUser = async (data: UserData) => {
  return API.post('auth/signup', data)
}

export const depositMoneyBank = async (data: WalletData) => {
  const session = await getSession()

  return API.post('wallet/wallet/deposit/accountBank', data, {
    headers: { Authorization: `Bearer ${session?.user.token}` },
  })
}

export const depositMoneyCard = async (data: WalletData) => {
  const session = await getSession()

  return API.post('wallet/wallet/deposit/creditCard', data, {
    headers: { Authorization: `Bearer ${session?.user.token}` },
  })
}

export const createCreditCard = async (data: CreditCard) => {
  const session = await getSession()

  return API.post('payment/add-payment/card', data, {
    headers: { Authorization: `Bearer ${session?.user.token}` },
  })
}

export const createBankAccount = async (data: BankAccount) => {
  const session = await getSession()

  return API.post('payment/add-payment/bank', data, {
    headers: { Authorization: `Bearer ${session?.user.token}` },
  })
}
