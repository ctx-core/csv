import type { table_Ctx } from '@ctx-core/table';
import type { csv_ctx_I } from './csv_ctx_I.generated';
export interface csv_Ctx extends csv_ctx_I, table_Ctx<number> {
}
