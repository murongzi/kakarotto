import * as React from "react";

interface IClasses {
    tableResponsive: string;
    table: string;
    tableCell: string;
    tableHeadCell: string;
}

export interface ITable{
    classes?: IClasses
    tableHeaderColor: "warning"|"primary"|"danger"|"success"|"info"|"rose"|"gray";
    tableHead: string[];
    tableData: string[][];
}
