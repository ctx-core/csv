export interface csv__parse_o_T<
    D extends object
> {
    val:string
    val__hydrate:(val_str:string)=>unknown
    lex_regexp:RegExp
    new_line_regexp:RegExp
    val_a:unknown[]
    col_idx:number
    row_idx:number
    state:symbol
    data:D
}
