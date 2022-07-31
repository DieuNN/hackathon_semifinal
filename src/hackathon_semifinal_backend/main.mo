import Hash "mo:base/Hash";
import HashMap "mo:base/HashMap";
import Nat "mo:base/Nat";
import Result "mo:base/Result";
import Types "Types";

actor {
  private stable var _numberOfCustomer : Nat = 0;
  private var _customer : HashMap.HashMap<Nat, Types.Customer> = HashMap.HashMap<Nat, Types.Customer>(1, Nat.equal, Hash.hash );
  private stable var _customerEntries : [(Nat, Types.Customer)] = [];

  // public func createCustomer(user : Types.CustomerExt) : async Result.Result<Text, Text> {

  // };

  // public func getUsers() : async [Types.CustomerExt] {

  // };


};
