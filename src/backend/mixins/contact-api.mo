import List "mo:core/List";
import Time "mo:core/Time";
import ContactTypes "../types/contact";
import ContactLib "../lib/contact";

mixin (
  contactMessages : List.List<ContactTypes.ContactMessage>,
  nextContactId : Nat,
) {
  public shared func submitContact(input : ContactTypes.ContactMessageInput) : async () {
    ContactLib.submitContactMessage(contactMessages, nextContactId, input, Time.now());
  };
};
