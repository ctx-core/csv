import type { csv_path_T } from './csv_path_b'
import type { table_Ctx } from '@ctx-core/table'
export interface csv_Ctx extends table_Ctx<number> {
	csv_path?:csv_path_T
}
