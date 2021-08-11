import { IFormElementStyleState } from "../../interfaces/interface";


export interface AppState{
    feature: IFormElementStyleState;
}
export const getFormElements = (state: AppState): IFormElementStyleState => state.feature;
