import List "mo:core/List";
import Types "../types/contact";

module {
  public func submitContactMessage(
    messages : List.List<Types.ContactMessage>,
    nextId : Nat,
    input : Types.ContactMessageInput,
    now : Int,
  ) : () {
    let msg : Types.ContactMessage = {
      id = nextId;
      name = input.name;
      email = input.email;
      subject = input.subject;
      message = input.message;
      submittedAt = now;
    };
    messages.add(msg);
  };
};
