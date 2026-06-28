import AiChatTypes "../types/ai-chat";
import Text "mo:core/Text";

module {

  // ─── Language detection ──────────────────────────────────────────────────────

  // Returns true if the text contains Hindi (Devanagari) characters
  func isHindi(msg : Text) : Bool {
    for (c in msg.chars()) {
      let n = c.toNat32();
      // Devanagari Unicode block: U+0900–U+097F
      if (n >= 0x0900 and n <= 0x097F) return true;
    };
    false
  };

  // ─── Keyword helpers ─────────────────────────────────────────────────────────

  func containsAny(msg : Text, keywords : [Text]) : Bool {
    let lower = msg.toLower();
    for (kw in keywords.vals()) {
      if (lower.contains(#text kw)) return true;
    };
    false
  };

  // ─── Knowledge base entries ───────────────────────────────────────────────────
  // Each entry: (keywords[], english_answer, hindi_answer)

  type KbEntry = {
    keywords : [Text];
    en : Text;
    hi : Text;
  };

  let kb : [KbEntry] = [

    // 1. What is WebStore / TradeHub
    {
      keywords = ["what is webstore", "what is tradehub", "webstore kya", "tradehub kya", "about webstore", "about tradehub", "website marketplace", "platform kya", "kaisa platform", "yeh site", "is site", "what is this", "tell me about"];
      en = "**About WebStore / TradeHub**\n1. WebStore (also known as TradeHub) is a professional online marketplace for buying and selling websites.\n2. It was founded by Mr. Krish Raj (CEO & Co-Founder).\n3. You can browse listed websites, contact sellers, and purchase ready-made online businesses.\n4. You can also list your own website for sale or order a custom-built website.\n5. The platform is designed to be safe, transparent, and easy to use for both buyers and sellers.";
      hi = "**WebStore / TradeHub के बारे में**\n1. WebStore (जिसे TradeHub भी कहते हैं) एक professional online marketplace है जहाँ websites खरीदी और बेची जाती हैं।\n2. इसकी स्थापना Mr. Krish Raj (CEO & Co-Founder) ने की है।\n3. आप listed websites browse कर सकते हैं, sellers से contact कर सकते हैं, और ready-made online businesses खरीद सकते हैं।\n4. आप अपनी website भी बेचने के लिए list कर सकते हैं या custom website order कर सकते हैं।\n5. यह platform buyers और sellers दोनों के लिए safe, transparent और easy-to-use है।";
    },

    // 2. How to buy a website
    {
      keywords = ["buy", "kharid", "purchase", "acquire", "kaise kharidu", "website lena", "website kharidna", "buy website", "kaise khareede", "website kharidni"];
      en = "**How to Buy a Website on WebStore**\n1. Browse the Listings page — use filters to narrow by niche, platform, or price range.\n2. Click on any listing to see full details (revenue, traffic, asking price, description).\n3. Click **Contact Seller** to reach out directly via email or the contact form.\n4. Negotiate price and terms with the seller.\n5. Complete payment through the agreed method and get the website transferred to you.\n6. Tip: Always verify traffic, revenue, and ownership before paying.";
      hi = "**WebStore पर Website कैसे खरीदें**\n1. Listings page browse करें — niche, platform या price से filter करें।\n2. किसी भी listing पर click करके पूरी details देखें (revenue, traffic, asking price, description)।\n3. **Contact Seller** पर click करके seller से directly email या contact form के ज़रिए बात करें।\n4. Seller के साथ price और terms negotiate करें।\n5. Agreed method से payment complete करें और website अपने नाम transfer करवाएं।\n6. Tip: Payment से पहले हमेशा traffic, revenue और ownership verify करें।";
    },

    // 3. How to sell a website
    {
      keywords = ["sell", "bechna", "list your website", "apni website", "website sell", "website bechni", "bechne", "selling", "listed", "listing karna", "list karna", "kaise bechu"];
      en = "**How to Sell a Website on WebStore**\n1. Click **List Your Website** in the navigation menu.\n2. Fill in the form: website URL, niche/category, platform (WordPress, Shopify, etc.), monthly revenue, traffic, asking price, and description.\n3. Submit the form — your listing will appear to buyers.\n4. Interested buyers will contact you directly via email.\n5. Negotiate, finalize the deal, and transfer the website after receiving payment.\n6. Tip: Provide accurate data to attract serious buyers faster.";
      hi = "**WebStore पर Website कैसे बेचें**\n1. Navigation menu में **List Your Website** पर click करें।\n2. Form भरें: website URL, niche/category, platform (WordPress, Shopify आदि), monthly revenue, traffic, asking price और description।\n3. Form submit करें — आपकी listing buyers को दिखने लगेगी।\n4. Interested buyers आपसे directly email के ज़रिए contact करेंगे।\n5. Negotiate करें, deal finalize करें, और payment मिलने के बाद website transfer करें।\n6. Tip: सही data देने से serious buyers जल्दी मिलते हैं।";
    },

    // 4. Custom website / Customise your own website
    {
      keywords = ["custom", "customise", "customize", "apni marzi", "khud banao", "requirement", "bespoke", "tailored", "banwana", "banvana", "order website", "custom website", "apni website banana", "nayi website"];
      en = "**Customise Your Own Website**\n1. Click **Customise Your Own Website** in the menu.\n2. Fill in your requirements: website type (eCommerce, blog, portfolio, etc.), budget, features needed, and deadline.\n3. Submit your requirements — sellers/developers will review them.\n4. A seller will build and deliver a website matching your specs, then list it for you or hand it over directly.\n5. Great for buyers who want a fresh, purpose-built website instead of a pre-existing one.";
      hi = "**अपनी मर्ज़ी की Website बनवाएं**\n1. Menu में **Customise Your Own Website** पर click करें।\n2. अपनी requirements भरें: website type (eCommerce, blog, portfolio आदि), budget, ज़रूरी features और deadline।\n3. Requirements submit करें — sellers/developers उन्हें review करेंगे।\n4. कोई seller आपकी specs के हिसाब से website बनाकर deliver करेगा या directly आपको दे देगा।\n5. जो buyers पहले से बनी website की बजाय fresh, purpose-built website चाहते हैं उनके लिए यह बेहतरीन option है।";
    },

    // 5. Website valuation
    {
      keywords = ["valuation", "value", "worth", "kitne ki", "price kya", "estimate", "appraise", "kitna milega", "website ki kimat", "value kaise", "valued", "how much", "kitna"];
      en = "**Website Valuation — How Much Is Your Website Worth?**\n1. Monthly Revenue: Most websites sell for 20–40× monthly net profit (e.g. ₹10K/month → ₹2–4 lakh).\n2. Traffic: Higher organic traffic = higher value. Paid-traffic-only sites are valued lower.\n3. Niche: High-demand niches (SaaS, finance, health) command premium prices.\n4. Age: Older, established sites with history are valued more than new ones.\n5. Monetization: Diversified income streams (ads + affiliate + products) increase value.\n6. Platform: Easy-to-manage platforms (WordPress, Shopify) attract more buyers.\n7. Contact a seller or use our valuation guide to get a precise estimate.";
      hi = "**Website Valuation — आपकी Website कितने की है?**\n1. Monthly Revenue: ज़्यादातर websites 20–40× monthly net profit पर बिकती हैं (जैसे ₹10K/month → ₹2–4 लाख)।\n2. Traffic: जितना ज़्यादा organic traffic, उतनी ज़्यादा value। केवल paid traffic वाली sites कम valued होती हैं।\n3. Niche: High-demand niches (SaaS, finance, health) premium prices पाते हैं।\n4. Age: पुरानी, established sites की value नई sites से ज़्यादा होती है।\n5. Monetization: Diversified income (ads + affiliate + products) से value बढ़ती है।\n6. Platform: Easy-to-manage platforms (WordPress, Shopify) ज़्यादा buyers attract करते हैं।\n7. Precise estimate के लिए किसी seller से contact करें या हमारा valuation guide use करें।";
    },

    // 6. Login / Account
    {
      keywords = ["login", "sign in", "account", "register", "signup", "sign up", "log in", "kaise login", "account kaise", "profile", "authentication", "internet identity", "user account"];
      en = "**Login & Account on WebStore**\n1. Click the **Login** button in the header/navigation bar.\n2. WebStore uses Internet Identity — a secure, password-free login system.\n3. No username or password needed — just verify with your device (fingerprint, face ID, or security key).\n4. Once logged in, sellers can manage their listings and custom orders.\n5. Internet Identity is provided by the Internet Computer platform and protects your account.";
      hi = "**WebStore पर Login & Account**\n1. Header/navigation bar में **Login** button पर click करें।\n2. WebStore Internet Identity use करता है — एक secure, password-free login system।\n3. Username या password की ज़रूरत नहीं — बस अपने device से verify करें (fingerprint, face ID, या security key)।\n4. Login के बाद sellers अपनी listings और custom orders manage कर सकते हैं।\n5. Internet Identity Internet Computer platform द्वारा provide की जाती है और आपका account protect करती है।";
    },

    // 7. Contact information
    {
      keywords = ["contact", "reach", "email", "phone", "number", "instagram", "support", "help", "customer care", "helpline", "sampark", "mail", "call", "whatsapp", "7673809412", "animalsong", "krish_ff"];
      en = "**Contact WebStore**\n1. Email: animalsong67@gmail.com\n2. Phone: 7673809412\n3. Instagram: @krish_ff_5607\n4. For website listings inquiries, use the Contact Us page on the site.\n5. For custom website requests, use the Customise Your Own Website form.\n6. Response time is usually within 24 hours.";
      hi = "**WebStore से Contact करें**\n1. Email: animalsong67@gmail.com\n2. Phone: 7673809412\n3. Instagram: @krish_ff_5607\n4. Website listings से जुड़े सवालों के लिए site पर Contact Us page use करें।\n5. Custom website requests के लिए Customise Your Own Website form use करें।\n6. आमतौर पर 24 घंटे में जवाब मिलता है।";
    },

    // 8. About founder / CEO
    {
      keywords = ["founder", "ceo", "krish raj", "krish", "co-founder", "owner", "who made", "who created", "kisne banaya", "founder kaun", "team", "about us", "about team"];
      en = "**About the Founder**\n1. WebStore / TradeHub was founded by Mr. Krish Raj.\n2. He is the CEO and Co-Founder of the platform.\n3. Mr. Krish Raj's vision is to create a trusted, easy-to-use marketplace for website buyers and sellers in India and globally.\n4. The team is dedicated to making website trading safe, transparent, and accessible.\n5. Visit the About Us page on the website for more details and team photos.";
      hi = "**Founder के बारे में**\n1. WebStore / TradeHub की स्थापना Mr. Krish Raj ने की है।\n2. वे platform के CEO और Co-Founder हैं।\n3. Mr. Krish Raj का vision है भारत और globally website buyers और sellers के लिए एक trusted, easy-to-use marketplace बनाना।\n4. पूरी team website trading को safe, transparent और accessible बनाने के लिए dedicated है।\n5. अधिक जानकारी और team photos के लिए website पर About Us page visit करें।";
    },

    // 9. Categories / Niches
    {
      keywords = ["category", "niche", "categories", "type of website", "ecommerce", "blog", "saas", "news", "portfolio", "affiliate", "dropshipping", "educational", "kis type", "kya kya", "website types", "konsi type"];
      en = "**Website Categories on WebStore**\nWe have listings across many niches:\n1. eCommerce — online stores selling products\n2. Blog — content sites earning via ads or affiliate\n3. SaaS — software-as-a-service platforms\n4. News / Media — news portals and content hubs\n5. Portfolio — personal/professional showcase sites\n6. Affiliate — sites earning via affiliate commissions\n7. Dropshipping — stores with no inventory, order-fulfilled by suppliers\n8. Educational — courses, tutorials, learning platforms\n9. Use the filter on the Browse page to search by your preferred niche.";
      hi = "**WebStore पर Website Categories**\nहमारे पास कई niches में listings हैं:\n1. eCommerce — products बेचने वाले online stores\n2. Blog — ads या affiliate से कमाने वाले content sites\n3. SaaS — software-as-a-service platforms\n4. News / Media — news portals और content hubs\n5. Portfolio — personal/professional showcase sites\n6. Affiliate — affiliate commissions से कमाने वाली sites\n7. Dropshipping — बिना inventory के, suppliers द्वारा orders fulfill होने वाले stores\n8. Educational — courses, tutorials, learning platforms\n9. अपनी पसंदीदा niche से search करने के लिए Browse page पर filter use करें।";
    },

    // 10. Trust & safety
    {
      keywords = ["safe", "trust", "secure", "verified", "scam", "fraud", "genuine", "legit", "bharosa", "surakshit", "safety", "real", "fake", "dhoka", "trustworthy"];
      en = "**Trust & Safety on WebStore**\n1. All sellers are reviewed before their listings go live.\n2. Listings include real data: traffic, revenue, platform details.\n3. You can contact sellers directly and verify ownership before any payment.\n4. We recommend asking for proof (Google Analytics screenshots, bank statements) before buying.\n5. Never pay before verifying the website is genuine and owned by the seller.\n6. Report any suspicious listing to us at animalsong67@gmail.com.";
      hi = "**WebStore पर Trust & Safety**\n1. सभी sellers की listings live होने से पहले review की जाती हैं।\n2. Listings में real data होता है: traffic, revenue, platform details।\n3. Payment से पहले आप sellers से directly contact करके ownership verify कर सकते हैं।\n4. हम recommend करते हैं खरीदने से पहले proof माँगें (Google Analytics screenshots, bank statements)।\n5. Verify किए बिना कभी payment न करें।\n6. किसी भी suspicious listing की report animalsong67@gmail.com पर करें।";
    },

    // 11. Pricing
    {
      keywords = ["price", "cost", "how much does", "fees", "charges", "kitne mein", "lagat", "paisa", "payment", "kitna lagega", "pricing", "affordable", "commission", "fee"];
      en = "**Pricing on WebStore**\n1. Every listing has its own asking price set by the seller.\n2. Prices are negotiable — you can discuss directly with the seller.\n3. There are no fixed platform fees charged to buyers for browsing or contacting sellers.\n4. Custom website orders: pricing depends on complexity and is agreed between buyer and developer.\n5. Always confirm final price in writing before transferring any money.";
      hi = "**WebStore पर Pricing**\n1. हर listing की अपनी asking price होती है जो seller set करता है।\n2. Prices negotiable हैं — आप seller से directly बात कर सकते हैं।\n3. Buyers से browsing या sellers को contact करने के लिए कोई platform fee नहीं ली जाती।\n4. Custom website orders: pricing complexity पर depend करती है और buyer व developer के बीच agree होती है।\n5. कोई भी पैसा transfer करने से पहले final price लिखित रूप में confirm करें।";
    },

    // 12. Seller dashboard
    {
      keywords = ["seller dashboard", "manage listing", "my listing", "seller panel", "dashboard", "apni listing", "listing manage", "orders manage", "seller account"];
      en = "**Seller Dashboard**\n1. Log in using Internet Identity (Login button in header).\n2. Once logged in, navigate to Seller Dashboard from the menu.\n3. You can view and manage your active website listings.\n4. You can see incoming custom website orders from buyers.\n5. Update listing details, mark orders as fulfilled, or remove listings from the dashboard.";
      hi = "**Seller Dashboard**\n1. Header में Login button से Internet Identity के ज़रिए login करें।\n2. Login के बाद menu से Seller Dashboard पर जाएं।\n3. आप अपनी active website listings देख और manage कर सकते हैं।\n4. Buyers के incoming custom website orders देख सकते हैं।\n5. Dashboard से listing details update करें, orders को fulfilled mark करें, या listings remove करें।";
    },

    // 13. How to filter / search listings
    {
      keywords = ["filter", "search", "browse", "dhundhna", "find website", "khojana", "sort", "kaise dhundhu", "find listing", "search listing"];
      en = "**How to Search & Filter Listings**\n1. Go to the Browse / Listings page from the navigation menu.\n2. Use the search bar to search by keyword (e.g. 'blog', 'eCommerce', 'WordPress').\n3. Apply filters: Niche (category), Platform (WordPress, Shopify, etc.), Price range.\n4. Results update instantly to show matching listings.\n5. Click any listing card to view full details and contact the seller.";
      hi = "**Listings कैसे Search और Filter करें**\n1. Navigation menu से Browse / Listings page पर जाएं।\n2. Search bar में keyword type करें (जैसे 'blog', 'eCommerce', 'WordPress')।\n3. Filters लगाएं: Niche (category), Platform (WordPress, Shopify आदि), Price range।\n4. Results instantly update होते हैं matching listings दिखाने के लिए।\n5. Full details देखने और seller से contact करने के लिए किसी भी listing card पर click करें।";
    },

    // 14. FAQ — general
    {
      keywords = ["faq", "question", "doubt", "sawal", "confused", "clarity", "help me", "explain", "how does", "kaise kaam", "samjhao", "batao", "guide", "guideline"];
      en = "**Frequently Asked Questions**\n1. Is WebStore free to use? — Yes, browsing and contacting sellers is free.\n2. How do I verify a website before buying? — Ask for Analytics screenshots, income proof, and domain ownership.\n3. Can I negotiate the price? — Yes, all prices are negotiable with the seller.\n4. How long does a deal take? — Usually 1–7 days depending on negotiation and payment.\n5. What if there is a dispute? — Contact us at animalsong67@gmail.com and we will assist.\n6. Is my data safe? — Yes, we use Internet Computer's secure infrastructure.";
      hi = "**अक्सर पूछे जाने वाले सवाल**\n1. क्या WebStore use करना free है? — हाँ, browsing और sellers को contact करना free है।\n2. खरीदने से पहले website verify कैसे करें? — Analytics screenshots, income proof और domain ownership माँगें।\n3. क्या price negotiate हो सकती है? — हाँ, सभी prices seller के साथ negotiable हैं।\n4. Deal में कितना समय लगता है? — आमतौर पर negotiation और payment के हिसाब से 1–7 दिन।\n5. अगर कोई dispute हो तो? — animalsong67@gmail.com पर contact करें, हम help करेंगे।\n6. क्या मेरा data safe है? — हाँ, हम Internet Computer की secure infrastructure use करते हैं।";
    },

    // 15. Payment methods
    {
      keywords = ["payment", "pay", "upi", "bank transfer", "paytm", "gpay", "razorpay", "stripe", "paise kaise", "bhugtaan", "transaction", "how to pay", "kaise pay"];
      en = "**Payment on WebStore**\n1. Payment is currently handled directly between buyer and seller.\n2. Common methods: UPI, bank transfer, or any method agreed upon by both parties.\n3. Always transfer money only after verifying the website and confirming ownership.\n4. Get a written confirmation of the deal before paying.\n5. A payment gateway (Razorpay/Stripe) integration is coming soon for added security.";
      hi = "**WebStore पर Payment**\n1. Payment अभी buyer और seller के बीच directly होती है।\n2. Common methods: UPI, bank transfer, या दोनों parties द्वारा agree किया गया कोई भी तरीका।\n3. Website verify करने और ownership confirm करने के बाद ही पैसे transfer करें।\n4. Payment से पहले deal का written confirmation लें।\n5. Added security के लिए जल्द ही payment gateway (Razorpay/Stripe) integration आएगा।";
    },

    // 16. Platform / technology
    {
      keywords = ["platform", "technology", "tech stack", "built on", "internet computer", "blockchain", "decentralized", "icp", "dfinity", "kahan bana", "kaise bana"];
      en = "**Technology Behind WebStore**\n1. WebStore is built on the Internet Computer (ICP) — a next-generation blockchain platform.\n2. This means the website runs entirely on-chain — no traditional servers, fully decentralized.\n3. Data is stored securely in Motoko smart contracts (canisters).\n4. Login is powered by Internet Identity — no passwords needed.\n5. This makes WebStore extremely secure, censorship-resistant, and globally accessible.";
      hi = "**WebStore की Technology**\n1. WebStore Internet Computer (ICP) पर बना है — एक next-generation blockchain platform।\n2. इसका मतलब है website पूरी तरह on-chain चलती है — कोई traditional server नहीं, पूरी तरह decentralized।\n3. Data Motoko smart contracts (canisters) में securely store होता है।\n4. Login Internet Identity से powered है — कोई password नहीं चाहिए।\n5. इससे WebStore अत्यंत secure, censorship-resistant और globally accessible है।";
    },

    // 17. Language selector
    {
      keywords = ["language", "bhasha", "hindi", "english", "spanish", "french", "arabic", "translate", "change language", "language select", "multilingual"];
      en = "**Language Options on WebStore**\n1. WebStore supports multiple languages for global accessibility.\n2. Look for the language selector (globe icon) in the header/navigation bar.\n3. Available languages include: English, Hindi, Spanish, French, Arabic, Portuguese, German, Chinese, Japanese, Russian.\n4. Click your preferred language and the entire site text will switch instantly.\n5. This AI assistant also responds in Hindi or English based on how you write to it.";
      hi = "**WebStore पर Language Options**\n1. WebStore global accessibility के लिए multiple languages support करता है।\n2. Header/navigation bar में language selector (globe icon) देखें।\n3. उपलब्ध languages: English, Hindi, Spanish, French, Arabic, Portuguese, German, Chinese, Japanese, Russian।\n4. अपनी पसंदीदा language click करें और पूरी site का text instantly बदल जाएगा।\n5. यह AI assistant भी आपके लिखने के तरीके के हिसाब से Hindi या English में जवाब देता है।";
    },

    // 18. How to become a seller
    {
      keywords = ["become seller", "seller kaise banu", "seller registration", "join as seller", "seller banna", "sell on", "list on", "register as seller"];
      en = "**How to Become a Seller on WebStore**\n1. Log in using the Login button (Internet Identity).\n2. Once logged in, you automatically have seller access.\n3. Go to Seller Dashboard and click **List Your Website** to add your first listing.\n4. Fill in all website details accurately — buyers rely on this information.\n5. Your listing goes live and buyers can contact you directly.\n6. You can also fulfill custom website orders from buyers through your dashboard.";
      hi = "**WebStore पर Seller कैसे बनें**\n1. Login button (Internet Identity) से login करें।\n2. Login के बाद automatically seller access मिल जाता है।\n3. Seller Dashboard पर जाएं और अपनी पहली listing add करने के लिए **List Your Website** click करें।\n4. सभी website details सही-सही भरें — buyers इसी information पर rely करते हैं।\n5. आपकी listing live हो जाएगी और buyers directly contact करेंगे।\n6. Dashboard के ज़रिए buyers के custom website orders भी fulfill कर सकते हैं।";
    },

    // 19. Mobile / responsive
    {
      keywords = ["mobile", "phone", "responsive", "app", "android", "ios", "mobile friendly", "mobile mein", "phone mein"];
      en = "**Using WebStore on Mobile**\n1. WebStore is fully mobile-responsive — it works perfectly on smartphones and tablets.\n2. No app download needed — just open the website in your mobile browser.\n3. All features (browse, contact, list, custom order) are available on mobile.\n4. For the best experience, use Chrome or Safari on your phone.";
      hi = "**Mobile पर WebStore Use करें**\n1. WebStore पूरी तरह mobile-responsive है — smartphones और tablets पर perfectly काम करता है।\n2. कोई app download नहीं चाहिए — बस mobile browser में website खोलें।\n3. सभी features (browse, contact, list, custom order) mobile पर available हैं।\n4. Best experience के लिए phone पर Chrome या Safari use करें।";
    },

    // 20. Greeting / hello
    {
      keywords = ["hello", "hi", "hey", "namaste", "namaskar", "hii", "helo", "good morning", "good evening", "good afternoon", "howdy", "hola", "greet"];
      en = "Hello! 👋 Welcome to WebStore — your trusted marketplace for buying and selling websites.\nI can help you with:\n1. How to buy a website\n2. How to sell or list a website\n3. Website valuation\n4. Custom website orders\n5. Account/login help\n6. Contact information\nJust ask me anything about WebStore!";
      hi = "नमस्ते! 👋 WebStore में आपका स्वागत है — website खरीदने और बेचने का trusted marketplace।\nमैं इनमें help कर सकता हूँ:\n1. Website कैसे खरीदें\n2. Website कैसे बेचें या list करें\n3. Website valuation\n4. Custom website orders\n5. Account/login help\n6. Contact information\nWebStore के बारे में कुछ भी पूछें!";
    }
  ];

  // ─── Main answer function ─────────────────────────────────────────────────────

  public func answer(
    message : Text,
    _conversationHistory : [AiChatTypes.ChatMessage],
  ) : Text {
    let hindi = isHindi(message);

    // Try each knowledge base entry
    for (entry in kb.vals()) {
      if (containsAny(message, entry.keywords)) {
        return if (hindi) entry.hi else entry.en;
      };
    };

    // Fallback
    if (hindi) {
      "माफ़ कीजिए, मैं आपका सवाल पूरी तरह नहीं समझ पाया। 🙏\nकृपया इनमें से किसी topic के बारे में पूछें:\n1. Website कैसे खरीदें\n2. Website कैसे बेचें / list करें\n3. Website की value / valuation\n4. Custom website order\n5. Account / login\n6. Contact details\n7. Website categories / niches\n8. Trust & safety\n\nया अपना सवाल दूसरे शब्दों में लिखें, मैं पूरी कोशिश करूँगा!"
    } else {
      "Sorry, I didn't quite understand your question. 🙏\nYou can ask me about:\n1. How to buy a website\n2. How to sell / list a website\n3. Website valuation\n4. Custom website orders\n5. Account / login\n6. Contact details\n7. Website categories / niches\n8. Trust & safety\n\nOr try rephrasing your question and I'll do my best to help!"
    }
  };
};
