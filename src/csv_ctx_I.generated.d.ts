import type { csv_Ctx } from './csv_Ctx';
import type { csv_path$_T } from './csv_path$_b';
export interface csv_ctx_I {
    csv_path$?: csv_path$_T;
    csv_b_h?: csv_b_h_T;
}
export interface csv_b_h_T {
    get csv_path$(): csv_path$_T;
}
export declare function csv_b_h_b(ctx: csv_Ctx): csv_b_h_T;
