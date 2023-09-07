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
  name: string
  status: boolean
  balance: number
  __v: number
}

const wallet = {
  _id: '',
  name: '',
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

interface TempMoney {
  tempMoney: number
  setTempMoney: (money: number) => void
}

export const useUserProfile = create<User>((set) => ({
  ...initialUserState,
  getUserData: async () => {
    const user = await getProfile()
    set({ ...user.data })
  },
  updateWallet: (data) =>
    set((state) => ({
      walletId: {
        ...state.walletId,
        balance: (state.walletId.balance += data),
      },
    })),
}))

export const useTempMoney = create<TempMoney>((set) => ({
  tempMoney: 0,
  setTempMoney: (money) => set({ tempMoney: money }),
}))
