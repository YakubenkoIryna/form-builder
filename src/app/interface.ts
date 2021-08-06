export interface User{
    email: string,
    password: string
}
export interface IFormElements{
    id?: number;
    title: 'string'
}
export interface IFormElementStyleState{
    id?:{
        title: string;
        placeholder?: string;
        required?: string;
        value?: string;
        label?: string;
        styles:{
            width?: string;
            height?: string;
            color?: string;
            borderStyle?: string;
            fontSize?: string;
            fontWeight?: string;
            backgroundColor?: string;
        }
    }
}
