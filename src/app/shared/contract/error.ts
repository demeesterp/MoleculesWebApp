export interface IMoleculesError {
    DisplayMessage:string;
}

export interface IMoleculeValidationErrors {
    ValidationErrors:IMoleculeValidationError[];
}

export interface  IMoleculeValidationError {
    Message:string;
    PropertyName:string;
}