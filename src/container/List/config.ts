export interface MList {
    name: string;
    age: string;
    sex: string;
}

export interface IList {
    results: Array<MList>
}

const results = [
    {
        name: "1",
        age: "1",
        sex: "1"
    },
    {
        name: "2",
        age: "2",
        sex: "2"
    },
    {
        name: "3",
        age: "3",
        sex: "3"
    }
]

export default {
    results
}