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
  paymentType: string
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

export const depositMoneyWallet = async (data: WalletData) => {
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

export const getUserByCvu = async (cvu: string) => {
  const session = await getSession()

  return API.get(`users/cvu/${cvu}`, {
    headers: { Authorization: `Bearer ${session?.user.token}` },
  })
}

export const transferMoneyToUser = async (userId: string, amount: object) => {
  const session = await getSession()

  return API.post(`wallet/${userId}/transfer`, amount, {
    headers: { Authorization: `Bearer ${session?.user.token}` },
  })
}

export const getCreditCards = async () => {
  const session = await getSession()

  return API.get('payment/credit-cards', {
    headers: { Authorization: `Bearer ${session?.user.token}` },
  })
}

export const getWallet = async () => {
  const session = await getSession()

  return API.get('wallet/wallet/balance', {
    headers: { Authorization: `Bearer ${session?.user.token}` },
  })
}
