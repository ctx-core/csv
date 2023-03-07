export interface csv__hd_row___params_T<
	ColDefs extends (([string, any][])|any[]|object)
> {
	delimiter?:string
	csv__regex?:RegExp
}
export interface row__csv___params_T {
	delimiter?:string
	header_row?:string[]
}
