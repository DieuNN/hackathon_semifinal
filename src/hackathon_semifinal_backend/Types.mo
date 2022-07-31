module {

    public type Customer = {
        index : Nat;
        firstName : Text;
        lastName : Text;
        // true means man, false means woman
        sex : Bool;
        dateOfBirth : Text;
        phone : Text;
        address : Text; 
    };
};