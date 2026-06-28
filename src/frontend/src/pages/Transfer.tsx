import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CheckCircle2,
  ChevronRight,
  Circle,
  Database,
  Download,
  FileArchive,
  Globe,
  HelpCircle,
  Loader2,
  Server,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { useCallback, useMemo, useState } from "react";

/* ─── Types ─── */
interface CheckItem {
  id: string;
  labelEn: string;
  labelHi: string;
}

/* ─── Data ─── */
const DOMAIN_STEPS: CheckItem[] = [
  {
    id: "d1",
    labelEn: "Unlock domain at registrar",
    labelHi: "रजिस्ट्रार पर डोमेन अनलॉक करें",
  },
  {
    id: "d2",
    labelEn: "Obtain authorization code (EPP code)",
    labelHi: "ऑथराइज़ेशन कोड (EPP कोड) प्राप्त करें",
  },
  {
    id: "d3",
    labelEn: "Update nameservers to buyer's hosting",
    labelHi: "नेमसर्वर को खरीदार के होस्टिंग पर अपडेट करें",
  },
  {
    id: "d4",
    labelEn: "Initiate domain transfer",
    labelHi: "डोमेन ट्रांसफर शुरू करें",
  },
  {
    id: "d5",
    labelEn: "Verify WHOIS information update",
    labelHi: "WHOIS जानकारी अपडेट सत्यापित करें",
  },
  {
    id: "d6",
    labelEn: "Confirm transfer complete",
    labelHi: "ट्रांसफर पूर्ण होने की पुष्टि करें",
  },
];

const CPANEL_STEPS: CheckItem[] = [
  {
    id: "c1",
    labelEn: "Download full backup from cPanel",
    labelHi: "cPanel से पूरा बैकअप डाउनलोड करें",
  },
  {
    id: "c2",
    labelEn: "Upload backup to new host",
    labelHi: "नए होस्ट पर बैकअप अपलोड करें",
  },
  {
    id: "c3",
    labelEn: "Restore via cPanel Backup Wizard",
    labelHi: "cPanel बैकअप विज़ार्ड से रिस्टोर करें",
  },
  {
    id: "c4",
    labelEn: "Update DNS and verify propagation",
    labelHi: "DNS अपडेट करें और प्रोपेगेशन सत्यापित करें",
  },
];

const MANAGED_STEPS: CheckItem[] = [
  {
    id: "m1",
    labelEn: "Request migration from managed host support",
    labelHi: "मैनेज्ड होस्ट सपोर्ट से माइग्रेशन का अनुरोध करें",
  },
  {
    id: "m2",
    labelEn: "Provide source hosting credentials",
    labelHi: "सोर्स होस्टिंग क्रेडेंशियल्स दें",
  },
  {
    id: "m3",
    labelEn: "Confirm staging site works",
    labelHi: "स्टेजिंग साइट काम कर रही है यह पुष्टि करें",
  },
  {
    id: "m4",
    labelEn: "Go live on new managed host",
    labelHi: "नए मैनेज्ड होस्ट पर लाइव करें",
  },
];

const PLESK_STEPS: CheckItem[] = [
  {
    id: "p1",
    labelEn: "Create full backup in Plesk Panel",
    labelHi: "Plesk पैनल में पूरा बैकअप बनाएं",
  },
  {
    id: "p2",
    labelEn: "Download backup archive",
    labelHi: "बैकअप आर्काइव डाउनलोड करें",
  },
  {
    id: "p3",
    labelEn: "Upload and restore on destination Plesk",
    labelHi: "गंतव्य Plesk पर अपलोड और रिस्टोर करें",
  },
  {
    id: "p4",
    labelEn: "Reconfigure domains and DNS",
    labelHi: "डोमेन और DNS पुनः कॉन्फ़िगर करें",
  },
];

const CLOUD_STEPS: CheckItem[] = [
  {
    id: "cl1",
    labelEn: "Export server image or container",
    labelHi: "सर्वर इमेज या कंटेनर एक्सपोर्ट करें",
  },
  {
    id: "cl2",
    labelEn: "Spin up equivalent instance on target cloud",
    labelHi: "टारगेट क्लाउड पर समान इंस्टेंस बनाएं",
  },
  {
    id: "cl3",
    labelEn: "Transfer data using rsync or cloud tools",
    labelHi: "rsync या क्लाउड टूल से डेटा ट्रांसफर करें",
  },
  {
    id: "cl4",
    labelEn: "Update environment variables and DNS",
    labelHi: "एनवायरनमेंट वेरिएबल और DNS अपडेट करें",
  },
];

const WP_STEPS: CheckItem[] = [
  {
    id: "w1",
    labelEn: "Export WordPress content via Tools > Export",
    labelHi: "टूल्स > एक्सपोर्ट से WordPress कंटेंट एक्सपोर्ट करें",
  },
  {
    id: "w2",
    labelEn: "Install WordPress on new host",
    labelHi: "नए होस्ट पर WordPress इंस्टॉल करें",
  },
  {
    id: "w3",
    labelEn: "Import content via Tools > Import",
    labelHi: "टूल्स > इंपोर्ट से कंटेंट इंपोर्ट करें",
  },
  {
    id: "w4",
    labelEn: "Update plugins and themes",
    labelHi: "प्लगइन्स और थीम अपडेट करें",
  },
  {
    id: "w5",
    labelEn: "Test site functionality and permalinks",
    labelHi: "साइट फंक्शनैलिटी और परमालिंक टेस्ट करें",
  },
];

const BACKUP_ITEMS = [
  { id: "b1", labelEn: "Database", labelHi: "डेटाबेस" },
  { id: "b2", labelEn: "Files", labelHi: "फाइल्स" },
  { id: "b3", labelEn: "Emails", labelHi: "ईमेल्स" },
  { id: "b4", labelEn: "SSL Certificates", labelHi: "SSL सर्टिफिकेट्स" },
];

const FAQS = [
  {
    qEn: "How long does a domain transfer take?",
    qHi: "डोमेन ट्रांसफर में कितना समय लगता है?",
    aEn: "Typically 5–7 days after the transfer is initiated and the auth code is accepted. Some registrars offer expedited transfers.",
    aHi: "आमतौर पर ट्रांसफर शुरू होने और ऑथ कोड स्वीकार होने के बाद 5–7 दिन लगते हैं। कुछ रजिस्ट्रार एक्सपेडाइटेड ट्रांसफर भी ऑफर करते हैं।",
  },
  {
    qEn: "Will my website go down during migration?",
    qHi: "क्या माइग्रेशन के दौरान मेरी वेबसाइट बंद रहेगी?",
    aEn: "With proper planning, downtime can be minimized to a few minutes. We recommend scheduling migrations during low-traffic hours.",
    aHi: "सही योजना के साथ, डाउनटाइम कुछ मिनटों तक सीमित किया जा सकता है। हम माइग्रेशन को कम ट्रैफिक वाले घंटों में शेड्यूल करने की सलाह देते हैं।",
  },
  {
    qEn: "Do I need technical knowledge to use these tools?",
    qHi: "क्या इन टूल्स का उपयोग करने के लिए तकनीकी ज्ञान की आवश्यकता है?",
    aEn: "Basic familiarity with hosting panels helps, but our step-by-step guides are designed for beginners. Support is available if needed.",
    aHi: "होस्टिंग पैनल्स की बुनियादी जानकारी मददगार होती है, लेकिन हमारी स्टेप-बाई-स्टेप गाइड बिगिनर्स के लिए बनाई गई हैं। ज़रूरत पड़ने पर सपोर्ट उपलब्ध है।",
  },
  {
    qEn: "What if the transfer fails halfway?",
    qHi: "अगर ट्रांसफर आधे में फेल हो जाए तो?",
    aEn: "You can roll back to the original setup using the backup created before transfer. Always keep a full backup before starting.",
    aHi: "ट्रांसफर से पहले बनाए गए बैकअप का उपयोग करके आप मूल सेटअप पर वापस जा सकते हैं। शुरू करने से पहले हमेशा पूरा बैकअप रखें।",
  },
];

/* ─── Helpers ─── */
function useChecklist(_items: CheckItem[]) {
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const toggle = useCallback((id: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);
  return { checked, toggle };
}

/* ─── Page ─── */
export default function TransferPage() {
  const [lang, setLang] = useState<"en" | "hi">("en");
  const t = (en: string, hi: string) => (lang === "hi" ? hi : en);

  const domain = useChecklist(DOMAIN_STEPS);
  const cpanel = useChecklist(CPANEL_STEPS);
  const managed = useChecklist(MANAGED_STEPS);
  const plesk = useChecklist(PLESK_STEPS);
  const cloud = useChecklist(CLOUD_STEPS);
  const wp = useChecklist(WP_STEPS);

  const totalItems =
    DOMAIN_STEPS.length +
    CPANEL_STEPS.length +
    MANAGED_STEPS.length +
    PLESK_STEPS.length +
    CLOUD_STEPS.length +
    WP_STEPS.length;

  const checkedCount = useMemo(() => {
    return (
      domain.checked.size +
      cpanel.checked.size +
      managed.checked.size +
      plesk.checked.size +
      cloud.checked.size +
      wp.checked.size
    );
  }, [
    domain.checked,
    cpanel.checked,
    managed.checked,
    plesk.checked,
    cloud.checked,
    wp.checked,
  ]);

  const progress = Math.round((checkedCount / totalItems) * 100);

  return (
    <div className="min-h-screen bg-background" data-ocid="transfer.page">
      {/* Gradient Hero Banner */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/15 via-transparent to-primary/10 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.78_0.24_195/0.1),transparent_60%)] pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-accent/30 text-accent text-xs font-semibold mb-6">
            <ShieldCheck className="w-4 h-4" />
            Step-by-Step Transfer Guide
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Website Transfer</span>
            <span className="block text-foreground text-2xl sm:text-3xl mt-2 font-normal">
              {t("Complete Migration System", "पूर्ण माइग्रेशन सिस्टम")}
            </span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed">
            {t(
              "Simplify website ownership transfer with guided assistants for domain, hosting, backups, and CMS migration.",
              "डोमेन, होस्टिंग, बैकअप और CMS माइग्रेशन के लिए गाइडेड असिस्टेंट के साथ वेबसाइट स्वामित्व ट्रांसफर को सरल बनाएं।",
            )}
          </p>
          {/* Language toggle */}
          <div className="inline-flex rounded-2xl glass-card border border-border/50 p-1 mt-8">
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`px-4 py-1.5 text-sm rounded-xl transition-all duration-200 ${
                lang === "en"
                  ? "bg-primary/20 text-primary font-semibold shadow-[0_0_10px_oklch(0.7_0.22_270/0.3)]"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              data-ocid="transfer.lang_en"
            >
              English
            </button>
            <button
              type="button"
              onClick={() => setLang("hi")}
              className={`px-4 py-1.5 text-sm rounded-xl transition-all duration-200 ${
                lang === "hi"
                  ? "bg-primary/20 text-primary font-semibold shadow-[0_0_10px_oklch(0.7_0.22_270/0.3)]"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              data-ocid="transfer.lang_hi"
            >
              हिंदी
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-8">
        {/* Progress */}
        <div className="glass-card rounded-2xl p-6 border border-border/50">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-semibold text-foreground">
              {t("Overall Progress", "कुल प्रगति")}
            </span>
            <span className="text-lg font-bold font-mono gradient-text">
              {progress}%
            </span>
          </div>
          <div className="relative h-3 bg-muted/30 rounded-full overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary via-accent to-[oklch(0.72_0.2_142)] transition-all duration-500 shadow-[0_0_10px_oklch(0.7_0.22_270/0.5)]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            {t(
              `${checkedCount} of ${totalItems} steps completed`,
              `${totalItems} में से ${checkedCount} चरण पूर्ण`,
            )}
          </p>
        </div>

        {/* Accordion Sections */}
        <Accordion type="multiple" className="space-y-4">
          <AccordionItem
            value="domain"
            className="glass-card border border-border/50 rounded-2xl overflow-hidden data-[state=open]:border-accent/30 data-[state=open]:shadow-[0_0_20px_oklch(0.78_0.24_195/0.12)] transition-all duration-300"
          >
            <AccordionTrigger className="px-5 py-4 hover:no-underline hover:bg-muted/20 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent/15 border border-accent/25 flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5 text-accent" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-foreground">
                    {t("Domain Transfer Assistant", "डोमेन ट्रांसफर असिस्टेंट")}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {t("6 steps", "6 चरण")}
                  </p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-5 pb-5">
              <Checklist
                items={DOMAIN_STEPS}
                checked={domain.checked}
                toggle={domain.toggle}
                lang={lang}
              />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="hosting"
            className="glass-card border border-border/50 rounded-2xl overflow-hidden data-[state=open]:border-primary/30 data-[state=open]:shadow-[0_0_20px_oklch(0.7_0.22_270/0.12)] transition-all duration-300"
          >
            <AccordionTrigger className="px-5 py-4 hover:no-underline hover:bg-muted/20 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center shrink-0">
                  <Server className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-foreground">
                    {t("Hosting Migration Guide", "होस्टिंग माइग्रेशन गाइड")}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {t("4 platforms", "4 प्लेटफॉर्म")}
                  </p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-5 pb-5">
              <HostingTabs
                lang={lang}
                cpanel={{ checked: cpanel.checked, toggle: cpanel.toggle }}
                managed={{ checked: managed.checked, toggle: managed.toggle }}
                plesk={{ checked: plesk.checked, toggle: plesk.toggle }}
                cloud={{ checked: cloud.checked, toggle: cloud.toggle }}
              />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="backup"
            className="glass-card border border-border/50 rounded-2xl overflow-hidden data-[state=open]:border-[oklch(0.72_0.2_142/0.4)] data-[state=open]:shadow-[0_0_20px_oklch(0.72_0.2_142/0.1)] transition-all duration-300"
          >
            <AccordionTrigger className="px-5 py-4 hover:no-underline hover:bg-muted/20 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[oklch(0.72_0.2_142/0.15)] border border-[oklch(0.72_0.2_142/0.25)] flex items-center justify-center shrink-0">
                  <FileArchive className="w-5 h-5 text-[oklch(0.72_0.2_142)]" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-foreground">
                    {t("Website Backup Tool", "वेबसाइट बैकअप टूल")}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {t("One-click backup", "वन-क्लिक बैकअप")}
                  </p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-5 pb-5">
              <BackupTool lang={lang} />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="cms"
            className="glass-card border border-border/50 rounded-2xl overflow-hidden data-[state=open]:border-[oklch(0.75_0.2_300/0.4)] data-[state=open]:shadow-[0_0_20px_oklch(0.75_0.2_300/0.1)] transition-all duration-300"
          >
            <AccordionTrigger className="px-5 py-4 hover:no-underline hover:bg-muted/20 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[oklch(0.75_0.2_300/0.15)] border border-[oklch(0.75_0.2_300/0.25)] flex items-center justify-center shrink-0">
                  <Wrench className="w-5 h-5 text-[oklch(0.75_0.2_300)]" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-foreground">
                    {t("CMS & Platform Migration", "CMS और प्लेटफॉर्म माइग्रेशन")}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {t("WordPress + cPanel", "WordPress + cPanel")}
                  </p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-5 pb-5 space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Database className="w-4 h-4 text-primary" />
                  {t(
                    "WordPress Migration Checklist",
                    "WordPress माइग्रेशन चेकलिस्ट",
                  )}
                </h4>
                <Checklist
                  items={WP_STEPS}
                  checked={wp.checked}
                  toggle={wp.toggle}
                  lang={lang}
                />
              </div>
              <div className="border-t border-border/40 pt-5">
                <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-accent" />
                  {t("cPanel Connection Guide", "cPanel कनेक्शन गाइड")}
                </h4>
                <div className="bg-muted/20 border border-border/40 rounded-xl p-4 space-y-2 font-mono text-xs">
                  <p className="text-muted-foreground">
                    {t("Host:", "होस्ट:")}{" "}
                    <span className="text-accent">cpanel.yourdomain.com</span>
                  </p>
                  <p className="text-muted-foreground">
                    {t("Username:", "यूज़रनेम:")}{" "}
                    <span className="text-foreground">your_cpanel_user</span>
                  </p>
                  <p className="text-muted-foreground">
                    {t("Password:", "पासवर्ड:")}{" "}
                    <span className="text-muted-foreground">************</span>
                  </p>
                </div>
              </div>
              <div className="border-t border-border/40 pt-5">
                <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-primary" />
                  {t("WordPress to Other Platforms", "WordPress से अन्य प्लेटफॉर्म")}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(
                    "If moving from WordPress to another CMS, export content as XML first. Most platforms provide importers for WordPress XML format. Verify plugin compatibility and theme assets separately.",
                    "यदि WordPress से दूसरे CMS पर जा रहे हैं, तो पहले कंटेंट को XML के रूप में एक्सपोर्ट करें।",
                  )}
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* FAQ */}
        <section className="space-y-4" data-ocid="transfer.faq_section">
          <h2 className="text-xl font-display font-bold gradient-text flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-primary" />
            {t("Frequently Asked Questions", "अक्सर पूछे जाने वाले सवाल")}
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {FAQS.map((faq) => (
              <div
                key={faq.qEn}
                className="glass-card rounded-2xl p-5 border border-border/50 hover:border-primary/20 transition-all duration-300"
              >
                <p className="text-sm font-semibold text-foreground mb-2">
                  {lang === "hi" ? faq.qHi : faq.qEn}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {lang === "hi" ? faq.aHi : faq.aEn}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

/* ─── Sub-components ─── */

function Checklist({
  items,
  checked,
  toggle,
  lang,
}: {
  items: CheckItem[];
  checked: Set<string>;
  toggle: (id: string) => void;
  lang: "en" | "hi";
}) {
  return (
    <ul className="space-y-2">
      {items.map((item) => {
        const isChecked = checked.has(item.id);
        return (
          <li key={item.id}>
            <button
              type="button"
              className={`flex items-start gap-3 rounded-xl border px-4 py-3 transition-all duration-200 cursor-pointer select-none w-full text-left ${
                isChecked
                  ? "border-[oklch(0.72_0.2_142/0.4)] bg-[oklch(0.72_0.2_142/0.08)] shadow-[0_0_10px_oklch(0.72_0.2_142/0.15)]"
                  : "border-border/40 bg-muted/10 hover:bg-muted/20 hover:border-primary/25"
              }`}
              onClick={() => toggle(item.id)}
              aria-pressed={isChecked}
              data-ocid={`transfer.checkbox.${item.id}`}
            >
              <div className="mt-0.5 shrink-0">
                {isChecked ? (
                  <CheckCircle2 className="w-5 h-5 text-[oklch(0.72_0.2_142)]" />
                ) : (
                  <Circle className="w-5 h-5 text-muted-foreground/50" />
                )}
              </div>
              <span
                className={`text-sm leading-relaxed ${
                  isChecked
                    ? "text-foreground/60 line-through"
                    : "text-foreground"
                }`}
              >
                {lang === "hi" ? item.labelHi : item.labelEn}
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}

function HostingTabs({
  lang,
  cpanel,
  managed,
  plesk,
  cloud,
}: {
  lang: "en" | "hi";
  cpanel: { checked: Set<string>; toggle: (id: string) => void };
  managed: { checked: Set<string>; toggle: (id: string) => void };
  plesk: { checked: Set<string>; toggle: (id: string) => void };
  cloud: { checked: Set<string>; toggle: (id: string) => void };
}) {
  const t = (en: string, hi: string) => (lang === "hi" ? hi : en);
  return (
    <Tabs defaultValue="cpanel" className="w-full">
      <TabsList className="w-full flex-wrap h-auto gap-1 p-1 glass-card border border-border/50 rounded-xl">
        <TabsTrigger
          value="cpanel"
          className="text-xs rounded-lg data-[state=active]:bg-primary/20 data-[state=active]:text-primary transition-all"
        >
          cPanel
        </TabsTrigger>
        <TabsTrigger
          value="managed"
          className="text-xs rounded-lg data-[state=active]:bg-primary/20 data-[state=active]:text-primary transition-all"
        >
          {t("Managed", "मैनेज्ड")}
        </TabsTrigger>
        <TabsTrigger
          value="plesk"
          className="text-xs rounded-lg data-[state=active]:bg-primary/20 data-[state=active]:text-primary transition-all"
        >
          Plesk
        </TabsTrigger>
        <TabsTrigger
          value="cloud"
          className="text-xs rounded-lg data-[state=active]:bg-primary/20 data-[state=active]:text-primary transition-all"
        >
          {t("Cloud", "क्लाउड")}
        </TabsTrigger>
      </TabsList>
      <TabsContent value="cpanel" className="mt-3">
        <Checklist
          items={CPANEL_STEPS}
          checked={cpanel.checked}
          toggle={cpanel.toggle}
          lang={lang}
        />
      </TabsContent>
      <TabsContent value="managed" className="mt-3">
        <Checklist
          items={MANAGED_STEPS}
          checked={managed.checked}
          toggle={managed.toggle}
          lang={lang}
        />
      </TabsContent>
      <TabsContent value="plesk" className="mt-3">
        <Checklist
          items={PLESK_STEPS}
          checked={plesk.checked}
          toggle={plesk.toggle}
          lang={lang}
        />
      </TabsContent>
      <TabsContent value="cloud" className="mt-3">
        <Checklist
          items={CLOUD_STEPS}
          checked={cloud.checked}
          toggle={cloud.toggle}
          lang={lang}
        />
      </TabsContent>
    </Tabs>
  );
}

function BackupTool({ lang }: { lang: "en" | "hi" }) {
  const t = (en: string, hi: string) => (lang === "hi" ? hi : en);
  const [status, setStatus] = useState<"idle" | "running" | "done">("idle");

  const startBackup = () => {
    setStatus("running");
    setTimeout(() => setStatus("done"), 2000);
  };

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center gap-3">
        <Button
          type="button"
          onClick={startBackup}
          disabled={status === "running"}
          className={`gap-2 transition-all duration-300 ${
            status === "done"
              ? "bg-[oklch(0.72_0.2_142/0.9)] hover:bg-[oklch(0.72_0.2_142)] shadow-[0_0_16px_oklch(0.72_0.2_142/0.4)]"
              : "bg-primary/90 hover:bg-primary shadow-[0_0_16px_oklch(0.7_0.22_270/0.3)] hover:shadow-[0_0_24px_oklch(0.7_0.22_270/0.5)]"
          }`}
          data-ocid="transfer.backup_button"
        >
          {status === "running" ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : status === "done" ? (
            <CheckCircle2 className="w-4 h-4" />
          ) : (
            <Download className="w-4 h-4" />
          )}
          {status === "running"
            ? t("Backup in progress...", "बैकअप प्रगति पर...")
            : status === "done"
              ? t("Backup complete!", "बैकअप पूर्ण!")
              : t("Initiate Backup", "बैकअप शुरू करें")}
        </Button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {BACKUP_ITEMS.map((item) => (
          <div
            key={item.id}
            className="glass-card rounded-xl border border-border/40 p-4 text-center space-y-2"
          >
            <Database className="w-6 h-6 text-primary mx-auto" />
            <p className="text-xs font-medium text-foreground">
              {lang === "hi" ? item.labelHi : item.labelEn}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
