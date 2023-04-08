export function csv_val__hydrate(
	matched_str:string,
	is_quoted?:boolean
):csv__val_T
export {
	csv_val__hydrate as csv__val_,
}
export type csv__val_T = string|number|boolean|Date|null|undefined
