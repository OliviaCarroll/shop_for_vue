export interface Link {
    label: string;
    link?: string;
    style?: string; 
    action?: string;
}

// export function LinkConstructor(label: string, link: string = "", style: string = "", 
//     action: Function = () => {}) {
//     action()
// }