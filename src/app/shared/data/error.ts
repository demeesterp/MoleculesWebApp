interface IMoleculesError {
    DisplayMessage:string;
}

interface IMoleculeValidationErrorList {
    ValidationErrors:IMoleculeValidationError[];
}

interface  IMoleculeValidationError {
    Message:string;
    PropertyName:string;
}