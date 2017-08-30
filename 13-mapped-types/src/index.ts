interface Point {
    x: number;
    y: number;
}

type Nullable<T> = {
    [P in keyof T]: T[P] | null;
};

type Stringify<T> = {
    [P in keyof T]: string;
};

type PartialNullablePoint = Partial<Nullable<Stringify<Point>>>;

let point: PartialNullablePoint;
point = { x: "0", y: "0" };
point = { x: "0" };
point = { x: undefined, y: null };
