export interface IUser {
    email: string;
    password: string;
}

export interface IFormElements {
    id?: number;
    title: string;
    styles?: object;
}

export interface IFormElementStyleState {
    id?: {
        title: string;
        placeholder?: string;
        required?: string;
        value?: string;
        label?: string;
        styles: {
            width?: string;
            height?: string;
            color?: string;
            borderStyle?: string;
            borderRadius?: string;
            textAlign?: string;
            fontSize?: string;
            fontWeight?: string;
            backgroundColor?: string;
            maxWidth?: string;


        }
    };
}
