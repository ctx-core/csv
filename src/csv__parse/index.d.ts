export declare function csv__parse(
	csv:string,
	csv__parse_o?:csv__parse_o_T
):Iterable<string[]>
export declare function csv__parse(
	on_row:csv__parse__iterator__on_row_T,
	csv:string,
	csv__parse_o?:csv__parse_o_T
):void
export declare function csv__parse_o_<D extends object>():csv__parse_o_T<D>
export declare function csv__parse_o__lex_regexp_(delimiter?:string):RegExp
export declare function csv__parse_o__new_line_regexp_():RegExp
export interface csv__parse_o_T<D extends object> {
	val:string
	val__hydrate:(val_str:string)=>any
	lex_regexp:RegExp
	new_line_regexp:RegExp
	val_a:any[]
	col_idx:number
	row_idx:number
	state:symbol
	data:D
}
export type csv__parse__iterator__on_row_T = (row:string[])=>any
