export interface IndexPatternRef {
    id: string;
    title: string;
}
export interface FieldDetails {
    error: string;
    exists: number;
    total: number;
    buckets: Bucket[];
    columns: string[];
}
export interface Bucket {
    display: string;
    value: string;
    percent: number;
    count: number;
}
//# sourceMappingURL=types.d.ts.map