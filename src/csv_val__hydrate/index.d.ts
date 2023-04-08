export function csv_val__hydrate(
	val:string,
	header?:string,
	row_tuple?:string[],
	col_idx?:number
):csv__val_T
export {
	csv_val__hydrate as csv__val_,
}
export type csv__val_T = string|number|boolean|Date|null|undefined
