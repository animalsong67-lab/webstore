import CommonTypes "common";

module {
  public type Timestamp = CommonTypes.Timestamp;

  public type CustomOrderStatus = {
    #Pending;
    #InProgress;
    #Completed;
    #Rejected;
  };

  public type CustomOrderInput = {
    websiteType : Text;
    budget : Text;
    description : Text;
    requirements : Text;
    contactEmail : Text;
    contactName : Text;
    timeline : Text;
  };

  public type CustomOrder = {
    id : Nat;
    websiteType : Text;
    budget : Text;
    description : Text;
    requirements : Text;
    contactEmail : Text;
    contactName : Text;
    timeline : Text;
    submittedAt : Timestamp;
    status : Text;
    submittedBy : Principal;
    sellerNotes : ?Text;
  };
};
