export interface ICustomSelectorProps{
    name: string,
    options: IOptionInCustomSelectorOptions[],
    defaultValue:string,
    label?:string
    onChange: (event:any)=> void
}

export interface IOptionInCustomSelectorOptions{
    label:string,
    value:string
}