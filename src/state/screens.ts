import { atom } from "jotai";

export enum Screens {
    LOGIN,
    HOME,
    HISTORY
}

export const screensAtom = atom(Screens.LOGIN);
export const sidebarAtom = atom(false);