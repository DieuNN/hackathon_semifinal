import Array "mo:base/Array";
import Hash "mo:base/Hash";
import HashMap "mo:base/HashMap";
import Iter "mo:base/Iter";
import Nat "mo:base/Nat";
import Result "mo:base/Result";
import Types "Types";

actor {
  private stable var _numberOfCustomer : Nat = 0;
  private var _customers : HashMap.HashMap<Nat, Types.Customer> = HashMap.HashMap<Nat, Types.Customer>(1, Nat.equal, Hash.hash );
  private stable var _customerEntries : [(Nat, Types.Customer)] = [];

  public func createCustomer(firstName : Text, lastName : Text, sex : Bool, dateOfBirth : Text, phone : Text, address : Text ) : async Result.Result<Text, Text> {
      _numberOfCustomer +=1;
      let customer : Types.Customer = {
        firstName= firstName;
        lastName = lastName;
        sex = sex;
        dateOfBirth = dateOfBirth;
        phone = phone;
        address = address;
        index = _numberOfCustomer;
      };
      _customers.put(_numberOfCustomer, customer);
      return#ok("Customer added");
  };

  public func readCustomers() : async [Types.Customer] {
    var result : [Types.Customer] = [];
    for(element in _customers.keys()) {
      switch(_customers.get(element)) {
        case null {
          
        };
        case (?customer) {
          result := Array.append(result, [customer]);
        };
      }
    };
    return result;
  };

  public func readCustomer(customerId : Nat) : async ?Types.Customer {
    switch(_customers.get(customerId)) {
      case null {
        return null;
      };
      case (?customer) {
        return ?customer;
      };
    }
  };

  public func updateCustomer(customerId : Nat, firstName : Text, lastName : Text, sex : Bool, dateOfBirth : Text, phone : Text, address : Text ) : async Result.Result<Text, Text> {
    switch(_customers.get(customerId)) {
      case null {
        return#err("Customer not found!");
      };
      case (?_customer) {
        let customer : Types.Customer = {
        firstName= firstName;
        lastName = lastName;
        sex = sex;
        dateOfBirth = dateOfBirth;
        phone = phone;
        address = address;
        index = customerId;
      };
        _customers.put(customerId, customer);
        return#ok("Customer updated");
      };
    }
  };

  public func deleteCustomer(customerId : Nat) : async Result.Result<Text, Text> {
    switch(_customers.get(customerId)) {
      case null {
        return#err("Customer not found!");
      };
      case (?_customer) {
        _customers.delete(customerId);
        return#ok("Customer deleted")
      };
    }
  };

  system func preupgrade() {
    _customerEntries := Iter.toArray<(Nat, Types.Customer)>(_customers.entries());
  };

  system func postupgrade() {
    _customers := HashMap.fromIter<Nat, Types.Customer>(_customerEntries.vals(), 1, Nat.equal, Hash.hash);
    _customerEntries := [];
  };




};
