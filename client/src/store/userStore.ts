import { getProfile } from '@/services'
import { create } from 'zustand'

interface User {
  _id: string
  name: string
  email: string
  password: string
  isActive: boolean
  walletId: WalletId
  roles: string[]
  createdAt: string
  updatedAt: string
  __v: number
  getUserData: () => Promise<void>
  updateWallet: (data: number) => void
}

interface WalletId {
  _id: string
  alias: string
  name: string
  cvu: string
  status: boolean
  balance: number
  __v: number
}

const wallet = {
  _id: '',
  alias: '',
  name: '',
  cvu: '',
  status: true,
  balance: 0,
  __v: 0,
}

const initialUserState = {
  _id: '',
  name: '',
  email: '',
  password: '',
  isActive: true,
  walletId: wallet,
  roles: [],
  createdAt: '',
  updatedAt: '',
  __v: 0,
}

interface ToUserData {
  alias: string
  cvu: string
  email: string
  id: string
  name: string
  tempMoney: number
  selectedPaymentId: string
  setTempMoney: (money: number) => void
  setSelectedPaymentId: (id: string) => void
  setUserData: (data: object) => void
}

export const useUserProfile = create<User>((set) => ({
  ...initialUserState,
  getUserData: async () => {
    const user = await getProfile()
    set({ ...user.data })
    return user.data
  },
  updateWallet: (data) =>
    set((state) => ({
      walletId: {
        ...state.walletId,
        balance: (state.walletId.balance += data),
      },
    })),
}))

export const useTransferData = create<ToUserData>((set) => ({
  id: '',
  name: '',
  email: '',
  alias: '',
  cvu: '',
  tempMoney: 0,
  selectedPaymentId: '',
  setTempMoney: (money) => set({ tempMoney: money }),
  setSelectedPaymentId: (id) => set({ selectedPaymentId: id }),
  setUserData: (data) => set((state) => ({ ...state, ...data })),
}))
