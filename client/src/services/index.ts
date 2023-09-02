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
