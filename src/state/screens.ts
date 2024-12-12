import { atom } from "jotai";

export enum Screens {
    LOGIN,
    HOME
}

export const screensAtom = atom(Screens.LOGIN);