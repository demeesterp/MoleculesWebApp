interface IMoleculesError {
    DisplayMessage:string;
}

interface IMoleculeValidationErrors {
    ValidationErrors:IMoleculeValidationError[];
}

interface  IMoleculeValidationError {
    Message:string;
    PropertyName:string;
}