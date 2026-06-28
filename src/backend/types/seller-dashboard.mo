import CommonTypes "common";

module {
  public type Timestamp = CommonTypes.Timestamp;

  // Re-export for convenience
  public type CustomOrderStatus = {
    #Pending;
    #InProgress;
    #Completed;
    #Rejected;
  };
};
