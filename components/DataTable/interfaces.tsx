export interface IStatbank {
    dataset: Dataset;
}
export interface Dataset {
    dimension: Dimension;
    label: string;
    source: string;
    updated: string;
    value: number[];
}
export interface Dimension {
    BILTYPE: BILTYPE;
    ContentsCode: ContentsCode;
    Tid: Tid;
    id: string[];
    size: number[];
    role: Role;
}
export interface BILTYPE {
    label: string;
    category: Category;
}
export interface Category {
    index: any;
    label: any;
}
export interface ContentsCode {
    label: string;
    category: Category1;
}
export interface Category1 {
    index: Index1;
    label: Label1;
    unit: Unit;
}
export interface Index1 {
    BIL5: number;
}
export interface Label1 {
    BIL5: string;
}
export interface Unit {
    BIL5: BIL5;
}
export interface BIL5 {
    base: string;
    decimals: number;
}
export interface Tid {
    label: string;
    category: Category2;
}
export interface Category2 {
    index: any;
    label: any;
}
export interface Role {
    metric: string[];
    time: string[];
}
