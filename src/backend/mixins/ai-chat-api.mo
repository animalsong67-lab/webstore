import AiChatLib "../lib/ai-chat";
import AiChatTypes "../types/ai-chat";

mixin () {

  // Fully self-contained knowledge base AI — no external API calls, no API key needed.
  public shared func askAI(
    message : Text,
    conversationHistory : [AiChatTypes.ChatMessage],
  ) : async Text {
    if (message == "") {
      return "Please enter a message. / कृपया कोई सवाल लिखें।";
    };
    AiChatLib.answer(message, conversationHistory)
  };
};
