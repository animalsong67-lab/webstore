import CommonTypes "common";

module {
  public type Timestamp = CommonTypes.Timestamp;

  public type ContactMessage = {
    id : Nat;
    name : Text;
    email : Text;
    subject : Text;
    message : Text;
    submittedAt : Timestamp;
  };

  public type ContactMessageInput = {
    name : Text;
    email : Text;
    subject : Text;
    message : Text;
  };
};
