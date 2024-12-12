import { atom } from "jotai"

export interface IUserInfos {
    name: string
    balance: number
}

export const userInfoAtom = atom<IUserInfos>()